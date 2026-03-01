import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getSystemDataForHealthScore } from "@/lib/solaredge";
import { getExpectedMonthlyKwh } from "@/lib/pvwatts";
import { buildHealthSummary } from "@/lib/health-score";

/**
 * GET /api/health-score?systemId=...
 *
 * Fetches actual production from SolarEdge, expected production from PVWatts,
 * and returns a complete health score summary.
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();

    // Verify authentication
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get system ID from query params
    const systemId = request.nextUrl.searchParams.get("systemId");
    if (!systemId) {
      return NextResponse.json(
        { error: "systemId is required" },
        { status: 400 }
      );
    }

    // Fetch system details from database
    const { data: system, error: dbError } = await supabase
      .from("solar_systems")
      .select("*")
      .eq("id", systemId)
      .eq("user_id", user.id)
      .single();

    if (dbError || !system) {
      return NextResponse.json(
        { error: "System not found" },
        { status: 404 }
      );
    }

    if (!system.site_id || !system.api_key) {
      return NextResponse.json(
        { error: "System missing SolarEdge credentials" },
        { status: 400 }
      );
    }

    // Fetch data from SolarEdge API
    const { details, overview, monthlyEnergy } =
      await getSystemDataForHealthScore(system.site_id, system.api_key);

    // Get expected production from PVWatts
    const lat = system.latitude ?? details.location.latitude;
    const lon = system.longitude ?? details.location.longitude;
    const capacityKw = system.system_capacity_kw ?? details.peakPower;

    const expectedMonthlyKwh = await getExpectedMonthlyKwh(
      lat,
      lon,
      capacityKw
    );

    // Build health summary
    const summary = buildHealthSummary(
      systemId,
      details,
      overview,
      monthlyEnergy,
      expectedMonthlyKwh
    );

    // Update system metadata in DB if not already set
    if (!system.latitude || !system.system_capacity_kw) {
      await supabase
        .from("solar_systems")
        .update({
          system_capacity_kw: details.peakPower,
          latitude: details.location.latitude,
          longitude: details.location.longitude,
          zip_code: details.location.zip,
          city: details.location.city,
          state: details.location.state,
          install_date: details.installationDate,
        })
        .eq("id", systemId);
    }

    return NextResponse.json(summary);
  } catch (error: any) {
    console.error("Health score error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to calculate health score" },
      { status: 500 }
    );
  }
}
