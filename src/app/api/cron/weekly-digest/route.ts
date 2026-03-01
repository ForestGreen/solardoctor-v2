import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { getSystemDataForHealthScore } from "@/lib/solaredge";
import { getExpectedMonthlyKwh } from "@/lib/pvwatts";
import { buildHealthSummary } from "@/lib/health-score";
import { sendDigestEmail } from "@/lib/email";

/**
 * GET /api/cron/weekly-digest
 *
 * Called by Vercel Cron (or external cron service) to send weekly health
 * digest emails to all active subscribers.
 *
 * Protected by CRON_SECRET header to prevent unauthorized access.
 */
export async function GET(request: NextRequest) {
  // Verify cron secret (Vercel sends this automatically for cron jobs)
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceRoleClient();

  // Get all active subscriptions
  const { data: subscriptions, error } = await supabase
    .from("email_subscriptions")
    .select("*")
    .eq("subscribed", true);

  if (error) {
    console.error("Failed to fetch subscriptions:", error);
    return NextResponse.json({ error: "Failed to fetch subscriptions" }, { status: 500 });
  }

  if (!subscriptions || subscriptions.length === 0) {
    return NextResponse.json({ message: "No active subscriptions", sent: 0 });
  }

  let sent = 0;
  let failed = 0;

  for (const sub of subscriptions) {
    try {
      // Fetch health data for this subscriber's system
      const { details, overview, monthlyEnergy } =
        await getSystemDataForHealthScore(sub.site_id, sub.api_key, 6);

      const lat = details.location.latitude;
      const lon = details.location.longitude;
      const capacityKw = details.peakPower;

      const expectedMonthlyKwh = await getExpectedMonthlyKwh(lat, lon, capacityKw);

      const summary = buildHealthSummary(
        "digest",
        details,
        overview,
        monthlyEnergy,
        expectedMonthlyKwh
      );

      // Send digest email
      const success = await sendDigestEmail({
        recipientEmail: sub.email,
        systemName: summary.systemName,
        location: summary.location,
        healthScore: summary.overallScore,
        status: summary.overallStatus,
        currentPowerKw: summary.currentPowerW / 1000,
        estimatedLostKwh: summary.estimatedLostKwh,
        estimatedLostDollars: summary.estimatedLostDollars,
        unsubscribeUrl: `https://www.getsolardoctor.com/api/unsubscribe?email=${encodeURIComponent(sub.email)}&siteId=${encodeURIComponent(sub.site_id)}`,
      });

      if (success) {
        sent++;
        // Update last_digest_sent_at
        await supabase
          .from("email_subscriptions")
          .update({ last_digest_sent_at: new Date().toISOString() })
          .eq("id", sub.id);
      } else {
        failed++;
      }

      // Rate limiting: wait 200ms between emails to respect Resend limits
      await new Promise((resolve) => setTimeout(resolve, 200));
    } catch (err) {
      console.error(`Failed to send digest for ${sub.email}:`, err);
      failed++;
    }
  }

  return NextResponse.json({
    message: "Weekly digest completed",
    total: subscriptions.length,
    sent,
    failed,
  });
}
