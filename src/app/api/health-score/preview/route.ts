import { NextRequest, NextResponse } from "next/server";
import { getSystemDataForHealthScore } from "@/lib/solaredge";
import {
  getEnphaseDataForHealthScore,
  convertEnphaseIntervalsToMonthlyEnergy,
} from "@/lib/enphase";
import { geocodePostalCode } from "@/lib/geocode";
import { getExpectedMonthlyKwh } from "@/lib/pvwatts";
import {
  buildHealthSummary,
  buildNormalizedHealthSummary,
} from "@/lib/health-score";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 requests per minute per IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success, remaining } = rateLimit(`preview:${ip}`, { maxRequests: 5, windowMs: 60_000 });

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before trying again." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const { brand = "solaredge", siteId, apiKey } = await request.json();

    if (!siteId || !apiKey) {
      return NextResponse.json(
        { error: "siteId and apiKey are required" },
        { status: 400 }
      );
    }

    let summary;

    if (brand === "enphase") {
      const developerApiKey = process.env.ENPHASE_API_KEY;
      if (!developerApiKey) {
        return NextResponse.json(
          { error: "Enphase support is not configured yet." },
          { status: 500 }
        );
      }

      const { summary: enphaseSummary, production } =
        await getEnphaseDataForHealthScore(siteId, developerApiKey, apiKey, 12);

      if (!enphaseSummary.postal_code) {
        return NextResponse.json(
          { error: "This Enphase system does not expose a postal code yet." },
          { status: 400 }
        );
      }

      const location = await geocodePostalCode(
        enphaseSummary.postal_code,
        enphaseSummary.country || "US"
      );

      const expectedMonthlyKwh = await getExpectedMonthlyKwh(
        location.latitude,
        location.longitude,
        enphaseSummary.system_size / 1000
      );

      const monthlyEnergy = convertEnphaseIntervalsToMonthlyEnergy(production);

      summary = buildNormalizedHealthSummary(
        "preview",
        {
          name:
            enphaseSummary.system_name ||
            enphaseSummary.system_public_name ||
            `Enphase System ${siteId}`,
          capacityKw: enphaseSummary.system_size / 1000,
          city: enphaseSummary.city || location.city,
          state: enphaseSummary.state || location.state,
          postalCode: enphaseSummary.postal_code,
          country: enphaseSummary.country,
          currentPowerW: enphaseSummary.current_power ?? 0,
          lifetimeEnergyWh: enphaseSummary.energy_lifetime ?? 0,
        },
        monthlyEnergy,
        expectedMonthlyKwh
      );
    } else {
      const { details, overview, monthlyEnergy } =
        await getSystemDataForHealthScore(siteId, apiKey, 12);

      const expectedMonthlyKwh = await getExpectedMonthlyKwh(
        details.location.latitude,
        details.location.longitude,
        details.peakPower
      );

      summary = buildHealthSummary(
        "preview",
        details,
        overview,
        monthlyEnergy,
        expectedMonthlyKwh
      );
    }

    return NextResponse.json({
      systemName: summary.systemName,
      systemCapacityKw: summary.systemCapacityKw,
      location: summary.location,
      currentPowerW: summary.currentPowerW,
      lifetimeKwh: summary.lifetimeKwh,
      overallScore: summary.overallScore,
      overallStatus: summary.overallStatus,
      latestScore: summary.latestScore,
      estimatedLostKwh: summary.estimatedLostKwh,
      estimatedLostDollars: summary.estimatedLostDollars,
      recentMonths: summary.monthlyScores.slice(-6),
    });
  } catch (error: any) {
    console.error("Health score preview error:", error);

    if (error.message?.includes("403") || error.message?.includes("401")) {
      return NextResponse.json(
        {
          error:
            "Invalid credentials. Please check your inverter access details and try again.",
        },
        { status: 400 }
      );
    }
    if (error.message?.includes("404")) {
      return NextResponse.json(
        { error: "Site not found. Please check your system ID and try again." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to fetch health score. Please try again." },
      { status: 500 }
    );
  }
}
