import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

/**
 * GET /api/cron/gtm-report
 *
 * Weekly automated GTM feedback loop.
 * Analyzes funnel metrics and sends a summary email with insights.
 *
 * Funnel stages:
 * 1. Site visit (page_view)
 * 2. Check page visit (page_view where page = /check)
 * 3. Check started (check_started)
 * 4. Check completed (check_completed)
 * 5. Email subscribed (email_subscribed)
 * 6. Report shared (report_shared)
 *
 * Runs weekly via Vercel Cron (Mondays at 10am ET / 3pm UTC)
 */
export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createServiceRoleClient();
    const now = new Date();
    const weekAgo = new Date(now);
    weekAgo.setDate(weekAgo.getDate() - 7);

    // Fetch all events from the past week
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

    // Calculate funnel metrics
    const metrics = {
      totalEvents: events.length,
      pageViews: events.filter((e: any) => e.event_name === "page_view").length,
      checkPageViews: events.filter(
        (e: any) => e.event_name === "page_view" && e.properties?.page === "/check"
      ).length,
      checksStarted: events.filter((e: any) => e.event_name === "check_started").length,
      checksCompleted: events.filter((e: any) => e.event_name === "check_completed").length,
      checkErrors: events.filter((e: any) => e.event_name === "check_error").length,
      emailSubscriptions: events.filter((e: any) => e.event_name === "email_subscribed").length,
      reportsShared: events.filter((e: any) => e.event_name === "report_shared").length,
      walkthroughOpened: events.filter((e: any) => e.event_name === "walkthrough_opened").length,
      enphaseWaitlist: events.filter((e: any) => e.event_name === "enphase_waitlist").length,
      blogCtaClicks: events.filter((e: any) => e.event_name === "blog_cta_clicked").length,
    };

    // Calculate conversion rates
    const conversionRates = {
      checkPageToStart:
        metrics.checkPageViews > 0
          ? ((metrics.checksStarted / metrics.checkPageViews) * 100).toFixed(1)
          : "0",
      startToComplete:
        metrics.checksStarted > 0
          ? ((metrics.checksCompleted / metrics.checksStarted) * 100).toFixed(1)
          : "0",
      completeToEmail:
        metrics.checksCompleted > 0
          ? ((metrics.emailSubscriptions / metrics.checksCompleted) * 100).toFixed(1)
          : "0",
      completeToShare:
        metrics.checksCompleted > 0
          ? ((metrics.reportsShared / metrics.checksCompleted) * 100).toFixed(1)
          : "0",
    };

    // Analyze score distribution
    const completedEvents = events.filter((e: any) => e.event_name === "check_completed");
    const scores = completedEvents.map((e: any) => e.properties?.score || 0);
    const avgScore = scores.length > 0 ? scores.reduce((a: number, b: number) => a + b, 0) / scores.length : 0;

    // Top referrers
    const referrerCounts: Record<string, number> = {};
    events.forEach((e: any) => {
      if (e.referrer) {
        try {
          const host = new URL(e.referrer).hostname;
          referrerCounts[host] = (referrerCounts[host] || 0) + 1;
        } catch {}
      }
    });
    const topReferrers = Object.entries(referrerCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    // Location distribution from completed checks
    const locationCounts: Record<string, number> = {};
    completedEvents.forEach((e: any) => {
      const loc = e.properties?.location;
      if (loc) {
        locationCounts[loc] = (locationCounts[loc] || 0) + 1;
      }
    });
    const topLocations = Object.entries(locationCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    // Generate automated insights
    const insights: string[] = [];

    if (parseFloat(conversionRates.startToComplete) < 50) {
      insights.push(
        `Only ${conversionRates.startToComplete}% of users who start a check complete it. Consider simplifying the API key instructions or adding a video walkthrough.`
      );
    }

    if (parseFloat(conversionRates.completeToEmail) < 20) {
      insights.push(
        `Email conversion is ${conversionRates.completeToEmail}%. Try making the email CTA more prominent or adding a countdown ("limited time free alerts").`
      );
    }

    if (metrics.walkthroughOpened > metrics.checksStarted * 0.3) {
      insights.push(
        `${metrics.walkthroughOpened} users opened the API key walkthrough (${((metrics.walkthroughOpened / (metrics.checksStarted || 1)) * 100).toFixed(0)}%). Many users are confused about the API key. Consider adding a video or making Site ID the only required field.`
      );
    }

    if (metrics.enphaseWaitlist > 5) {
      insights.push(
        `${metrics.enphaseWaitlist} Enphase users joined the waitlist. Prioritize Enphase API integration.`
      );
    }

    if (metrics.checkErrors > metrics.checksStarted * 0.2) {
      insights.push(
        `High error rate: ${metrics.checkErrors} errors out of ${metrics.checksStarted} attempts (${((metrics.checkErrors / (metrics.checksStarted || 1)) * 100).toFixed(0)}%). Check for common API key format issues.`
      );
    }

    if (parseFloat(conversionRates.completeToShare) < 10) {
      insights.push(
        `Report sharing is low (${conversionRates.completeToShare}%). Consider auto-prompting with "Share your score with neighbors?" or adding a gamification element.`
      );
    }

    // Build report
    const report = {
      period: {
        start: weekAgo.toISOString().split("T")[0],
        end: now.toISOString().split("T")[0],
      },
      metrics,
      conversionRates,
      avgScore: Math.round(avgScore),
      topReferrers,
      topLocations,
      insights,
    };

    // Send report email
    try {
      const emailHtml = buildGTMReportEmail(report);
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SolarDoctor <alerts@getsolardoctor.com>",
          to: ["richard.matsui@energyreinvestmentcapital.com"],
          subject: `SolarDoctor Weekly GTM Report: ${metrics.checksCompleted} checks, ${metrics.emailSubscriptions} emails`,
          html: emailHtml,
        }),
      });
    } catch (emailError) {
      console.error("Failed to send GTM report email:", emailError);
    }

    return NextResponse.json({ success: true, report });
  } catch (error: any) {
    console.error("GTM report error:", error);
    return NextResponse.json(
      { error: error.message || "GTM report failed" },
      { status: 500 }
    );
  }
}

function buildGTMReportEmail(report: any): string {
  const { metrics, conversionRates, insights, topReferrers, topLocations, period } = report;

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #166534; font-size: 22px; margin-bottom: 4px;">SolarDoctor Weekly GTM Report</h1>
      <p style="color: #6b7280; font-size: 14px; margin-top: 0;">${period.start} to ${period.end}</p>

      <h2 style="font-size: 16px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Funnel Metrics</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr style="background: #f9fafb;"><td style="padding: 8px;">Page Views</td><td style="padding: 8px; text-align: right; font-weight: bold;">${metrics.pageViews}</td></tr>
        <tr><td style="padding: 8px;">/check Page Views</td><td style="padding: 8px; text-align: right; font-weight: bold;">${metrics.checkPageViews}</td></tr>
        <tr style="background: #f9fafb;"><td style="padding: 8px;">Checks Started</td><td style="padding: 8px; text-align: right; font-weight: bold;">${metrics.checksStarted}</td></tr>
        <tr><td style="padding: 8px;">Checks Completed</td><td style="padding: 8px; text-align: right; font-weight: bold; color: #166534;">${metrics.checksCompleted}</td></tr>
        <tr style="background: #f9fafb;"><td style="padding: 8px;">Check Errors</td><td style="padding: 8px; text-align: right; font-weight: bold; color: ${metrics.checkErrors > 0 ? '#dc2626' : '#6b7280'};">${metrics.checkErrors}</td></tr>
        <tr><td style="padding: 8px;">Email Subscriptions</td><td style="padding: 8px; text-align: right; font-weight: bold; color: #166534;">${metrics.emailSubscriptions}</td></tr>
        <tr style="background: #f9fafb;"><td style="padding: 8px;">Reports Shared</td><td style="padding: 8px; text-align: right; font-weight: bold;">${metrics.reportsShared}</td></tr>
        <tr><td style="padding: 8px;">Enphase Waitlist</td><td style="padding: 8px; text-align: right; font-weight: bold;">${metrics.enphaseWaitlist}</td></tr>
        <tr style="background: #f9fafb;"><td style="padding: 8px;">Walkthrough Opened</td><td style="padding: 8px; text-align: right; font-weight: bold;">${metrics.walkthroughOpened}</td></tr>
        <tr><td style="padding: 8px;">Blog CTA Clicks</td><td style="padding: 8px; text-align: right; font-weight: bold;">${metrics.blogCtaClicks}</td></tr>
      </table>

      <h2 style="font-size: 16px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 24px;">Conversion Rates</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr style="background: #f9fafb;"><td style="padding: 8px;">Check Page → Start</td><td style="padding: 8px; text-align: right; font-weight: bold;">${conversionRates.checkPageToStart}%</td></tr>
        <tr><td style="padding: 8px;">Start → Complete</td><td style="padding: 8px; text-align: right; font-weight: bold;">${conversionRates.startToComplete}%</td></tr>
        <tr style="background: #f9fafb;"><td style="padding: 8px;">Complete → Email</td><td style="padding: 8px; text-align: right; font-weight: bold;">${conversionRates.completeToEmail}%</td></tr>
        <tr><td style="padding: 8px;">Complete → Share</td><td style="padding: 8px; text-align: right; font-weight: bold;">${conversionRates.completeToShare}%</td></tr>
      </table>

      <h2 style="font-size: 16px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 24px;">Avg Health Score</h2>
      <p style="font-size: 32px; font-weight: bold; color: ${report.avgScore >= 90 ? '#166534' : report.avgScore >= 75 ? '#ca8a04' : '#dc2626'}; margin: 8px 0;">${report.avgScore}/100</p>

      ${topReferrers.length > 0 ? `
      <h2 style="font-size: 16px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 24px;">Top Referrers</h2>
      <ol style="font-size: 14px; padding-left: 20px;">
        ${topReferrers.map(([host, count]: [string, number]) => `<li style="margin-bottom: 4px;">${host} (${count} visits)</li>`).join("")}
      </ol>
      ` : ""}

      ${topLocations.length > 0 ? `
      <h2 style="font-size: 16px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 24px;">Top Locations</h2>
      <ol style="font-size: 14px; padding-left: 20px;">
        ${topLocations.map(([loc, count]: [string, number]) => `<li style="margin-bottom: 4px;">${loc} (${count} checks)</li>`).join("")}
      </ol>
      ` : ""}

      ${insights.length > 0 ? `
      <h2 style="font-size: 16px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 24px;">Automated Insights</h2>
      <ul style="font-size: 14px; padding-left: 20px;">
        ${insights.map((i: string) => `<li style="margin-bottom: 8px; color: #374151;">${i}</li>`).join("")}
      </ul>
      ` : ""}

      <p style="font-size: 12px; color: #9ca3af; margin-top: 32px; border-top: 1px solid #e5e7eb; padding-top: 12px;">
        This is an automated GTM report from SolarDoctor. View your Vercel Analytics dashboard for more details.
      </p>
    </div>
  `;
}
