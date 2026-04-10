import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";
import { validateCredentials } from "@/lib/solaredge";
import { validateEnphaseCredentials } from "@/lib/enphase";
import { geocodePostalCode } from "@/lib/geocode";
import { encryptCredential } from "@/lib/crypto";

/**
 * POST /api/systems/connect
 * Body: { brand: "solaredge" | "enphase", siteId: string, apiKey: string }
 *
 * Validates credentials, encrypts them, saves to database, and auto-subscribes
 * the user to weekly digest emails. This is the ONLY path for saving system
 * credentials — the dashboard connect page calls this endpoint rather than
 * inserting directly into Supabase (to ensure server-side encryption).
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

    const { brand = "solaredge", siteId, apiKey } = await request.json();

    if (!siteId || !apiKey) {
      return NextResponse.json(
        { error: "siteId and apiKey are required" },
        { status: 400 }
      );
    }

    // ─── Validate credentials with the appropriate API ───

    let systemRecord: Record<string, any>;

    if (brand === "enphase") {
      const developerApiKey = process.env.ENPHASE_API_KEY;
      if (!developerApiKey) {
        return NextResponse.json(
          { error: "Enphase support is not configured yet" },
          { status: 500 }
        );
      }

      const validation = await validateEnphaseCredentials(siteId, developerApiKey, apiKey);
      if (!validation.valid) {
        return NextResponse.json(
          { error: validation.error || "Invalid Enphase credentials" },
          { status: 400 }
        );
      }

      const summary = validation.summary!;

      // Geocode for lat/lon if postal code available
      let lat: number | null = null;
      let lon: number | null = null;
      if (summary.postal_code) {
        try {
          const loc = await geocodePostalCode(summary.postal_code, summary.country || "US");
          lat = loc.latitude;
          lon = loc.longitude;
        } catch {}
      }

      systemRecord = {
        user_id: user.id,
        type: "enphase",
        site_id: siteId,
        api_key: encryptCredential(apiKey),
        status: "active",
        system_capacity_kw: summary.system_size ? summary.system_size / 1000 : null,
        latitude: lat,
        longitude: lon,
        zip_code: summary.postal_code || null,
        city: summary.city || null,
        state: summary.state || null,
        install_date: null,
      };
    } else {
      // SolarEdge
      const validation = await validateCredentials(siteId, apiKey);
      if (!validation.valid) {
        return NextResponse.json(
          { error: validation.error || "Invalid SolarEdge credentials" },
          { status: 400 }
        );
      }

      const details = validation.details!;

      systemRecord = {
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
      };
    }

    // ─── Save to database ───

    const { data, error: dbError } = await supabase
      .from("solar_systems")
      .insert(systemRecord)
      .select()
      .single();

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "This system is already connected to your account." },
          { status: 409 }
        );
      }
      console.error("DB insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save system" },
        { status: 500 }
      );
    }

    // ─── Auto-subscribe to weekly digest ───

    try {
      const svcSupabase = createServiceRoleClient();
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
      console.warn("Failed to auto-subscribe for digest:", subError);
    }

    return NextResponse.json({
      success: true,
      system: data,
    });
  } catch (error: any) {
    console.error("Connect system error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to connect system" },
      { status: 500 }
    );
  }
}
