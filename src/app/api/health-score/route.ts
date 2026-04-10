import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getSystemDataForHealthScore } from "@/lib/solaredge";
import {
  getEnphaseDataForHealthScore,
  convertEnphaseIntervalsToMonthlyEnergy,
} from "@/lib/enphase";
import { getExpectedMonthlyKwh } from "@/lib/pvwatts";
import {
  buildHealthSummary,
  buildNormalizedHealthSummary,
} from "@/lib/health-score";

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const systemId = request.nextUrl.searchParams.get("systemId");
    if (!systemId) {
      return NextResponse.json(
        { error: "systemId is required" },
        { status: 400 }
      );
    }

    const { data: system, error: dbError } = await supabase
      .from("solar_systems")
      .select("*")
      .eq("id", systemId)
      .eq("user_id", user.id)
      .single();

    if (dbError || !system) {
      return NextResponse.json({ error: "System not found" }, { status: 404 });
    }

    if (!system.site_id || !system.api_key) {
      return NextResponse.json(
        { error: "System is missing inverter credentials" },
        { status: 400 }
      );
    }

    let summary;

    if (system.type === "enphase") {
      const developerApiKey = process.env.ENPHASE_API_KEY;
      if (!developerApiKey) {
        return NextResponse.json(
          { error: "Enphase support is not configured yet" },
          { status: 500 }
        );
      }

      if (!system.latitude || !system.longitude || !system.system_capacity_kw) {
        return NextResponse.json(
          {
            error:
              "Enphase system is missing location metadata. Reconnect the system and try again.",
          },
          { status: 400 }
        );
      }

      const { summary: enphaseSummary, production } =
        await getEnphaseDataForHealthScore(
          system.site_id,
          developerApiKey,
          system.api_key
        );

      const expectedMonthlyKwh = await getExpectedMonthlyKwh(
        system.latitude,
        system.longitude,
        system.system_capacity_kw
      );

      const monthlyEnergy = convertEnphaseIntervalsToMonthlyEnergy(production);

      summary = buildNormalizedHealthSummary(
        systemId,
        {
          name:
            enphaseSummary.system_name ||
            enphaseSummary.system_public_name ||
            `Enphase System ${system.site_id}`,
          capacityKw: system.system_capacity_kw,
          city: system.city || enphaseSummary.city,
          state: system.state || enphaseSummary.state,
          postalCode: system.zip_code || enphaseSummary.postal_code,
          country: enphaseSummary.country,
          currentPowerW: enphaseSummary.current_power ?? 0,
          lifetimeEnergyWh: enphaseSummary.energy_lifetime ?? 0,
        },
        monthlyEnergy,
        expectedMonthlyKwh
      );
    } else {
      const { details, overview, monthlyEnergy } =
        await getSystemDataForHealthScore(system.site_id, system.api_key);

      const lat = system.latitude ?? details.location.latitude;
      const lon = system.longitude ?? details.location.longitude;
      const capacityKw = system.system_capacity_kw ?? details.peakPower;

      const expectedMonthlyKwh = await getExpectedMonthlyKwh(
        lat,
        lon,
        capacityKw
      );

      summary = buildHealthSummary(
        systemId,
        details,
        overview,
        monthlyEnergy,
        expectedMonthlyKwh
      );

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
