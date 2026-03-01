import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { getSystemDataForHealthScore } from "@/lib/solaredge";
import { getExpectedMonthlyKwh } from "@/lib/pvwatts";
import { buildHealthSummary, checkForAlerts } from "@/lib/health-score";

/**
 * POST /api/alerts/check
 *
 * Cron-triggered endpoint to check all active systems for alerts.
 * Designed to be called by Vercel Cron or similar scheduler.
 *
 * Security: Requires CRON_SECRET header for authentication.
 */
export async function POST(request: NextRequest) {
  try {
    // Verify cron secret (simple auth for cron jobs)
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createServiceRoleClient();

    // Fetch all active systems with SolarEdge credentials
    const { data: systems, error } = await supabase
      .from("solar_systems")
      .select("*, profiles!inner(email)")
      .eq("status", "active")
      .not("site_id", "is", null)
      .not("api_key", "is", null);

    if (error) {
      console.error("Failed to fetch systems:", error);
      return NextResponse.json(
        { error: "Failed to fetch systems" },
        { status: 500 }
      );
    }

    const results: { systemId: string; alert: boolean; error?: string }[] = [];

    for (const system of systems || []) {
      try {
        // Get actual production from SolarEdge
        const { details, overview, monthlyEnergy } =
          await getSystemDataForHealthScore(system.site_id, system.api_key);

        // Get expected production from PVWatts
        const lat = system.latitude ?? details.location.latitude;
        const lon = system.longitude ?? details.location.longitude;
        const capacityKw = system.system_capacity_kw ?? details.peakPower;

        const expectedMonthlyKwh = await getExpectedMonthlyKwh(
          lat,
          lon,
          capacityKw
        );

        // Build health summary
        const summary = buildHealthSummary(
          system.id,
          details,
          overview,
          monthlyEnergy,
          expectedMonthlyKwh
        );

        // Check for alerts
        const alertResult = checkForAlerts(summary);

        if (alertResult.shouldAlert) {
          // Check if we already sent this alert (avoid duplicates)
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();

          const { data: existingAlert } = await supabase
            .from("alert_history")
            .select("id")
            .eq("solar_system_id", system.id)
            .eq("month", summary.latestScore?.month ?? currentMonth)
            .eq("year", summary.latestScore?.year ?? currentYear)
            .maybeSingle();

          if (!existingAlert) {
            // Record the alert
            await supabase.from("alert_history").insert({
              solar_system_id: system.id,
              user_id: system.user_id,
              alert_type: alertResult.alertType,
              message: alertResult.message,
              health_score: summary.latestScore?.score,
              month: summary.latestScore?.month,
              year: summary.latestScore?.year,
            });

            // Send email (if Resend is configured)
            if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "your-resend-key-here") {
              const userEmail = (system as any).profiles?.email;
              if (userEmail) {
                try {
                  await sendAlertEmail(
                    userEmail,
                    summary.systemName,
                    alertResult.message,
                    summary.overallScore
                  );

                  // Mark as email sent
                  await supabase
                    .from("alert_history")
                    .update({ email_sent: true, sent_at: new Date().toISOString() })
                    .eq("solar_system_id", system.id)
                    .eq("month", summary.latestScore?.month)
                    .eq("year", summary.latestScore?.year);
                } catch (emailErr) {
                  console.error("Failed to send email:", emailErr);
                }
              }
            }

            results.push({ systemId: system.id, alert: true });
          } else {
            results.push({ systemId: system.id, alert: false });
          }
        } else {
          results.push({ systemId: system.id, alert: false });
        }
      } catch (err: any) {
        console.error(`Error checking system ${system.id}:`, err);
        results.push({
          systemId: system.id,
          alert: false,
          error: err.message,
        });
      }
    }

    return NextResponse.json({
      checked: results.length,
      alerts: results.filter((r) => r.alert).length,
      results,
    });
  } catch (error: any) {
    console.error("Alert check error:", error);
    return NextResponse.json(
      { error: error.message || "Alert check failed" },
      { status: 500 }
    );
  }
}

// ─── Email Helper ───

async function sendAlertEmail(
  to: string,
  systemName: string,
  message: string,
  score: number
) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "SolarDoctor <alerts@getsolardoctor.com>",
      to: [to],
      subject: `Alert: Your solar system "${systemName}" needs attention (Score: ${Math.round(score)}%)`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #15803d; font-size: 24px; margin: 0;">SolarDoctor</h1>
          </div>

          <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h2 style="color: #991b1b; font-size: 18px; margin: 0 0 8px;">System Alert</h2>
            <p style="color: #7f1d1d; margin: 0; line-height: 1.6;">${message}</p>
          </div>

          <div style="text-align: center; margin: 32px 0;">
            <a href="https://getsolardoctor.com/dashboard" style="background: #16a34a; color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
              View Full Report
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; text-align: center;">
            You're receiving this because you connected "${systemName}" to SolarDoctor.
            <br />
            <a href="https://getsolardoctor.com/dashboard" style="color: #9ca3af;">Manage your alerts</a>
          </p>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error: ${res.status} ${body}`);
  }
}
