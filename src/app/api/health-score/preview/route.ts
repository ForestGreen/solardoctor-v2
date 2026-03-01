import { NextRequest, NextResponse } from "next/server";
import { getSystemDataForHealthScore } from "@/lib/solaredge";
import { getExpectedMonthlyKwh } from "@/lib/pvwatts";
import { buildHealthSummary } from "@/lib/health-score";

/**
 * POST /api/health-score/preview
 * Body: { siteId: string, apiKey: string }
 *
 * PUBLIC endpoint — no authentication required.
 * Returns a health score preview for any valid SolarEdge site.
 * Used on the free health check landing page.
 */
export async function POST(request: NextRequest) {
  try {
    const { siteId, apiKey } = await request.json();

    if (!siteId || !apiKey) {
      return NextResponse.json(
        { error: "siteId and apiKey are required" },
        { status: 400 }
      );
    }

    // Fetch data from SolarEdge API (last 12 months for preview)
    const { details, overview, monthlyEnergy } =
      await getSystemDataForHealthScore(siteId, apiKey, 12);

    // Get expected production from PVWatts
    const lat = details.location.latitude;
    const lon = details.location.longitude;
    const capacityKw = details.peakPower;

    const expectedMonthlyKwh = await getExpectedMonthlyKwh(
      lat,
      lon,
      capacityKw
    );

    // Build health summary
    const summary = buildHealthSummary(
      "preview",
      details,
      overview,
      monthlyEnergy,
      expectedMonthlyKwh
    );

    // Return a trimmed preview (don't expose full detail on public endpoint)
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
      // Only return last 6 months for the preview chart
      recentMonths: summary.monthlyScores.slice(-6),
    });
  } catch (error: any) {
    console.error("Health score preview error:", error);

    // Friendly error messages
    if (error.message?.includes("403")) {
      return NextResponse.json(
        { error: "Invalid API key. Please check your SolarEdge API key and try again." },
        { status: 400 }
      );
    }
    if (error.message?.includes("404")) {
      return NextResponse.json(
        { error: "Site not found. Please check your Site ID and try again." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to fetch health score. Please try again." },
      { status: 500 }
    );
  }
}
