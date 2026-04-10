import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createServiceRoleClient();
    const now = new Date();
    const weekAgo = new Date(now);
    weekAgo.setDate(weekAgo.getDate() - 7);

    const { data: events, error } = await supabase
      .from("analytics_events")
      .select("*")
      .gte("created_at", weekAgo.toISOString())
      .order("created_at", { ascending: true });

    if (error) {
      if (error.code === "42P01") {
        return NextResponse.json({ message: "analytics_events table not found" });
      }
      throw error;
    }

    if (!events || events.length === 0) {
      return NextResponse.json({ message: "No events this week" });
    }

    const countEvents = (names: string[]) =>
      events.filter((event: any) => names.includes(event.event_name)).length;

    const metrics = {
      totalEvents: events.length,
      pageViews: countEvents(["page_view"]),
      returnVisits: countEvents(["return_visit"]),
      homeCtaClicks: countEvents(["home_cta_click"]),
      checkPageViews: events.filter(
        (event: any) =>
          event.event_name === "page_view" && event.properties?.page === "/check"
      ).length,
      checksStarted: countEvents(["check_started"]),
      checksCompleted: countEvents(["check_completed"]),
      checkErrors: countEvents(["check_error"]),
      alertSignups: countEvents(["alert_signup", "email_subscribed"]),
      reportsShared: countEvents(["report_share", "report_shared"]),
      walkthroughOpened: countEvents(["walkthrough_opened"]),
    };

    const conversionRates = {
      checkPageToStart:
        metrics.checkPageViews > 0
          ? ((metrics.checksStarted / metrics.checkPageViews) * 100).toFixed(1)
          : "0",
      startToComplete:
        metrics.checksStarted > 0
          ? ((metrics.checksCompleted / metrics.checksStarted) * 100).toFixed(1)
          : "0",
      completeToAlert:
        metrics.checksCompleted > 0
          ? ((metrics.alertSignups / metrics.checksCompleted) * 100).toFixed(1)
          : "0",
      completeToShare:
        metrics.checksCompleted > 0
          ? ((metrics.reportsShared / metrics.checksCompleted) * 100).toFixed(1)
          : "0",
    };

    const completedEvents = events.filter((e: any) => e.event_name === "check_completed");
    const scores = completedEvents.map((e: any) => e.properties?.score || 0);
    const avgScore = scores.length > 0 ? scores.reduce((a: number, b: number) => a + b, 0) / scores.length : 0;

    const report = {
      period: {
        start: weekAgo.toISOString().split("T")[0],
        end: now.toISOString().split("T")[0],
      },
      metrics,
      conversionRates,
      avgScore: Math.round(avgScore),
    };

    return NextResponse.json({ success: true, report });
  } catch (error: any) {
    console.error("GTM report error:", error);
    return NextResponse.json(
      { error: error.message || "GTM report failed" },
      { status: 500 }
    );
  }
}
