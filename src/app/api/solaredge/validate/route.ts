import { NextRequest, NextResponse } from "next/server";
import { validateCredentials } from "@/lib/solaredge";
import { rateLimit } from "@/lib/rate-limit";

/**
 * POST /api/solaredge/validate
 * Body: { siteId: string, apiKey: string }
 *
 * Validates SolarEdge credentials and returns site details if valid.
 * Used during onboarding to verify the user's API credentials work.
 */
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`validate-se:${ip}`, { maxRequests: 10, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { error: "Too many attempts. Please wait a minute before trying again." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const { siteId, apiKey } = await request.json();

    if (!siteId || !apiKey) {
      return NextResponse.json(
        { error: "siteId and apiKey are required" },
        { status: 400 }
      );
    }

    const result = await validateCredentials(siteId, apiKey);

    if (result.valid && result.details) {
      return NextResponse.json({
        valid: true,
        details: result.details,
        system: {
          name: result.details.name,
          capacity: result.details.peakPower,
          location: `${result.details.location.city}, ${result.details.location.state}`,
          installDate: result.details.installationDate,
          status: result.details.status,
          panels: result.details.primaryModule.manufacturerName
            ? `${result.details.primaryModule.manufacturerName} ${result.details.primaryModule.modelName}`
            : "Unknown",
        },
      });
    }

    return NextResponse.json({ valid: false, error: result.error });
  } catch (error: any) {
    return NextResponse.json(
      { valid: false, error: error.message },
      { status: 500 }
    );
  }
}
