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

/**
 * GET /api/health-score/preview?systemId=123
 * Used after Enphase OAuth callback — reads access token from HTTP-only cookie.
 */
export async function GET(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`preview:${ip}`, { maxRequests: 5, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before trying again." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const systemId = request.nextUrl.searchParams.get("systemId");
    const accessToken = request.cookies.get("enphase_access_token")?.value;

    if (!systemId || !accessToken) {
      return NextResponse.json(
        { error: "Missing Enphase credentials. Please try connecting again." },
        { status: 400 }
      );
    }

    const developerApiKey = process.env.ENPHASE_API_KEY;
    if (!developerApiKey) {
      return NextResponse.json(
        { error: "Enphase support is not configured yet." },
        { status: 500 }
      );
    }

    const { summary: enphaseSummary, production } =
      await getEnphaseDataForHealthScore(systemId, developerApiKey, accessToken, 12);

    // Use Enphase's own location data first, fall back to geocoding postal code
    let lat: number | null = null;
    let lon: number | null = null;
    let city = enphaseSummary.city || "";
    let state = enphaseSummary.state || "";

    if (enphaseSummary.postal_code) {
      try {
        const location = await geocodePostalCode(
          enphaseSummary.postal_code,
          enphaseSummary.country || "US"
        );
        lat = location.latitude;
        lon = location.longitude;
        city = city || location.city;
        state = state || location.state;
      } catch {
        // Geocoding failed — we'll try PVWatts with whatever we have
      }
    }

    if (lat === null || lon === null) {
      return NextResponse.json(
        { error: "Could not determine your system's location. Please try the manual flow instead." },
        { status: 400 }
      );
    }

    const capacityKw = enphaseSummary.system_size / 1000;
    const expectedMonthlyKwh = await getExpectedMonthlyKwhSafe(lat, lon, capacityKw);
    const monthlyEnergy = convertEnphaseIntervalsToMonthlyEnergy(production);

    const summary = buildNormalizedHealthSummary(
      "preview",
      {
        name: enphaseSummary.system_name || enphaseSummary.system_public_name || `Enphase System ${systemId}`,
        capacityKw,
        city,
        state,
        postalCode: enphaseSummary.postal_code,
        country: enphaseSummary.country,
        currentPowerW: enphaseSummary.current_power ?? 0,
        lifetimeEnergyWh: enphaseSummary.energy_lifetime ?? 0,
      },
      monthlyEnergy,
      expectedMonthlyKwh
    );

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
    console.error("Health score preview (GET/Enphase) error:", error);
    return NextResponse.json(
      { error: formatApiError(error, "enphase") },
      { status: 500 }
    );
  }
}

/**
 * POST /api/health-score/preview
 * Standard flow — credentials passed in request body.
 */
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`preview:${ip}`, { maxRequests: 5, windowMs: 60_000 });

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

      // Use Enphase's own location data, fall back to geocoding
      let lat: number | null = null;
      let lon: number | null = null;
      let city = enphaseSummary.city || "";
      let state = enphaseSummary.state || "";

      if (enphaseSummary.postal_code) {
        try {
          const location = await geocodePostalCode(
            enphaseSummary.postal_code,
            enphaseSummary.country || "US"
          );
          lat = location.latitude;
          lon = location.longitude;
          city = city || location.city;
          state = state || location.state;
        } catch {
          // Geocoding failed
        }
      }

      if (lat === null || lon === null) {
        return NextResponse.json(
          { error: "Could not determine your system's location. Your Enphase system may not expose location data." },
          { status: 400 }
        );
      }

      const capacityKw = enphaseSummary.system_size / 1000;
      const expectedMonthlyKwh = await getExpectedMonthlyKwhSafe(lat, lon, capacityKw);
      const monthlyEnergy = convertEnphaseIntervalsToMonthlyEnergy(production);

      summary = buildNormalizedHealthSummary(
        "preview",
        {
          name: enphaseSummary.system_name || enphaseSummary.system_public_name || `Enphase System ${siteId}`,
          capacityKw,
          city,
          state,
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

      const expectedMonthlyKwh = await getExpectedMonthlyKwhSafe(
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
    const brand = "solaredge"; // Default for error context
    return NextResponse.json(
      { error: formatApiError(error, brand) },
      { status: error.message?.includes("401") || error.message?.includes("403") ? 400 : 500 }
    );
  }
}

// ─── Helpers ───

/**
 * Get expected monthly kWh with fallback when PVWatts is unavailable.
 * Falls back to national average: ~1,400 kWh/kW/year distributed by month.
 */
async function getExpectedMonthlyKwhSafe(
  lat: number,
  lon: number,
  capacityKw: number
): Promise<number[]> {
  try {
    return await getExpectedMonthlyKwh(lat, lon, capacityKw);
  } catch (error) {
    console.warn("PVWatts unavailable, using national average fallback:", error);
    // National average monthly distribution (fraction of annual production)
    const monthlyFractions = [0.065, 0.070, 0.085, 0.090, 0.095, 0.100, 0.100, 0.095, 0.090, 0.080, 0.070, 0.060];
    const annualKwh = capacityKw * 1400; // ~1,400 kWh/kW/year national average
    return monthlyFractions.map(f => Math.round(annualKwh * f));
  }
}

/**
 * Parse API errors into user-friendly, actionable messages.
 */
function formatApiError(error: any, brand: string): string {
  const msg = error.message || "";
  const brandName = brand === "enphase" ? "Enphase" : "SolarEdge";

  if (msg.includes("401") || msg.includes("403")) {
    return brand === "solaredge"
      ? "Your API key appears to be invalid or expired. Double-check it in your SolarEdge portal under Admin > Site Access > API Access."
      : "Your Enphase access token appears to be invalid or expired. Try connecting with your Enphase account again.";
  }

  if (msg.includes("404")) {
    return `We couldn't find a system with that ID. Please check your ${brandName} system ID and try again.`;
  }

  if (msg.includes("429")) {
    return `The ${brandName} API is temporarily rate-limiting requests. Please wait a minute and try again.`;
  }

  if (msg.includes("5") && (msg.includes("500") || msg.includes("502") || msg.includes("503"))) {
    return `The ${brandName} monitoring service is temporarily unavailable. This isn't your fault — try again in a few minutes.`;
  }

  if (msg.includes("fetch") || msg.includes("network") || msg.includes("ECONNREFUSED")) {
    return `We couldn't reach the ${brandName} servers. Please check your connection and try again.`;
  }

  return msg || "Something went wrong. Please try again.";
}
