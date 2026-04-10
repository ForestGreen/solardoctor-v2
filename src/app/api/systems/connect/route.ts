import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { validateCredentials } from "@/lib/solaredge";
import { encryptCredential } from "@/lib/crypto";

/**
 * POST /api/systems/connect
 * Validate SolarEdge credentials and save the system to the database.
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { siteId, apiKey } = await request.json();

    if (!siteId || !apiKey) {
      return NextResponse.json(
        { error: "siteId and apiKey are required" },
        { status: 400 }
      );
    }

    // Validate with SolarEdge API
    const validation = await validateCredentials(siteId, apiKey);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error || "Invalid credentials" },
        { status: 400 }
      );
    }

    const details = validation.details!;

    // Save to database
    const { data, error: dbError } = await supabase
      .from("solar_systems")
      .insert({
        user_id: user.id,
        type: "solaredge",
        site_id: siteId,
        api_key: encryptCredential(apiKey),
        status: "active",
        system_capacity_kw: details.peakPower,
        latitude: details.location.latitude,
        longitude: details.location.longitude,
        zip_code: details.location.zip,
        city: details.location.city,
        state: details.location.state,
        install_date: details.installationDate,
      })
      .select()
      .single();

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "This system is already connected" },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Failed to save system" },
        { status: 500 }
      );
    }

    // Auto-subscribe the user to weekly digest emails
    // Uses service role to bypass RLS for the email_subscriptions table
    try {
      const { createServiceRoleClient: createSvcClient } = await import("@/lib/supabase/server");
      const svcSupabase = createSvcClient();
      await svcSupabase
        .from("email_subscriptions")
        .upsert(
          {
            email: user.email!.toLowerCase(),
            site_id: siteId,
            api_key: encryptCredential(apiKey),
            subscribed: true,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "email,site_id" }
        );
    } catch (subError) {
      // Non-fatal: system is connected even if subscription fails
      console.warn("Failed to auto-subscribe for digest:", subError);
    }

    return NextResponse.json({
      success: true,
      system: data,
      details,
    });
  } catch (error: any) {
    console.error("Connect system error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to connect system" },
      { status: 500 }
    );
  }
}
