import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

/**
 * POST /api/track
 * Body: { event: string, properties?: Record<string, any> }
 *
 * Lightweight event tracking endpoint for GTM feedback loop.
 * Logs key user actions to Supabase for funnel analysis.
 *
 * Key events to track:
 * - page_view: { page, referrer, utm_source, utm_medium, utm_campaign }
 * - check_started: { brand }
 * - check_completed: { score, status, location }
 * - check_error: { error_type }
 * - email_subscribed: { source }
 * - report_shared: { platform, score }
 * - walkthrough_opened: {}
 * - enphase_waitlist: { email }
 * - blog_cta_clicked: { slug }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, properties } = body;

    if (!event) {
      return NextResponse.json({ error: "event is required" }, { status: 400 });
    }

    const supabase = createServiceRoleClient();

    // Extract referrer and user agent for attribution
    const referrer = request.headers.get("referer") || "";
    const userAgent = request.headers.get("user-agent") || "";

    const { error } = await supabase.from("analytics_events").insert({
      event_name: event,
      properties: properties || {},
      referrer,
      user_agent: userAgent,
      page_url: properties?.page || "",
      created_at: new Date().toISOString(),
    });

    if (error) {
      // If table doesn't exist, fail silently
      if (error.code === "42P01") {
        return NextResponse.json({ ok: true, saved: false });
      }
      console.error("Track event error:", error);
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    // Never let tracking break the user experience
    return NextResponse.json({ ok: true });
  }
}
