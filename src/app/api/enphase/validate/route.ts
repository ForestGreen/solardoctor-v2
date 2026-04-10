import { NextRequest, NextResponse } from "next/server";
import { validateEnphaseCredentials } from "@/lib/enphase";
import { geocodePostalCode } from "@/lib/geocode";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`validate-en:${ip}`, { maxRequests: 10, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { valid: false, error: "Too many attempts. Please wait a minute before trying again." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const { systemId, accessToken } = await request.json();

    if (!systemId || !accessToken) {
      return NextResponse.json(
        { valid: false, error: "systemId and accessToken are required" },
        { status: 400 }
      );
    }

    const developerApiKey = process.env.ENPHASE_API_KEY;
    if (!developerApiKey) {
      return NextResponse.json(
        { valid: false, error: "Enphase support is not configured yet" },
        { status: 500 }
      );
    }

    const result = await validateEnphaseCredentials(
      systemId,
      developerApiKey,
      accessToken
    );

    if (!result.valid || !result.summary) {
      return NextResponse.json({ valid: false, error: result.error });
    }

    const summary = result.summary;
    const geocode = summary.postal_code
      ? await geocodePostalCode(summary.postal_code, summary.country || "US")
      : null;

    return NextResponse.json({
      valid: true,
      details: summary,
      system: {
        name: summary.system_name || summary.system_public_name,
        capacity: summary.system_size / 1000,
        location: `${summary.city || geocode?.city || ""}, ${summary.state || geocode?.state || ""}`.replace(
          /^,\s*|,\s*$/g,
          ""
        ),
        postalCode: summary.postal_code,
        status: summary.status,
        modules: summary.modules,
        latitude: geocode?.latitude,
        longitude: geocode?.longitude,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { valid: false, error: error.message || "Unable to validate Enphase access" },
      { status: 500 }
    );
  }
}
