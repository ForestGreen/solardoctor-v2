import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

/**
 * POST /api/report
 * Body: { ...healthPreviewData }
 *
 * Stores a health score result and returns a shareable report ID.
 * Public endpoint — no authentication required.
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.overallScore && data.overallScore !== 0) {
      return NextResponse.json(
        { error: "Health score data is required" },
        { status: 400 }
      );
    }

    // Generate a short, URL-friendly ID using crypto
    const reportId = generateShortId();

    const supabase = createServiceRoleClient();

    const { error } = await supabase.from("health_reports").insert({
      id: reportId,
      system_name: data.systemName || "Solar System",
      system_capacity_kw: data.systemCapacityKw || 0,
      location: data.location || "",
      overall_score: data.overallScore,
      overall_status: data.overallStatus,
      estimated_lost_kwh: data.estimatedLostKwh || 0,
      estimated_lost_dollars: data.estimatedLostDollars || 0,
      current_power_w: data.currentPowerW || 0,
      lifetime_kwh: data.lifetimeKwh || 0,
      recent_months: data.recentMonths || [],
      created_at: new Date().toISOString(),
    });

    if (error) {
      // If table doesn't exist, return the report ID anyway (graceful degradation)
      if (error.code === "42P01") {
        console.warn("health_reports table not found. Report not saved.");
        return NextResponse.json({ reportId, saved: false });
      }
      throw error;
    }

    return NextResponse.json({ reportId, saved: true });
  } catch (error: any) {
    console.error("Report save error:", error);
    return NextResponse.json(
      { error: "Failed to save report" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/report?id=abc123
 *
 * Fetches a stored report by ID.
 */
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Report ID is required" },
        { status: 400 }
      );
    }

    const supabase = createServiceRoleClient();

    const { data, error } = await supabase
      .from("health_reports")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Report not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Report fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch report" },
      { status: 500 }
    );
  }
}

function generateShortId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let result = "";
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  for (const byte of bytes) {
    result += chars[byte % chars.length];
  }
  return result;
}
