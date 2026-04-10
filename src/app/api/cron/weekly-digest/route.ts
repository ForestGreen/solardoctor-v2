import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { getSystemDataForHealthScore } from "@/lib/solaredge";
import {
  getEnphaseDataForHealthScore,
  convertEnphaseIntervalsToMonthlyEnergy,
} from "@/lib/enphase";
import { getExpectedMonthlyKwh } from "@/lib/pvwatts";
import { buildHealthSummary, buildNormalizedHealthSummary } from "@/lib/health-score";
import { sendDigestEmail } from "@/lib/email";
import { decryptCredential } from "@/lib/crypto";
import { geocodePostalCode } from "@/lib/geocode";

/**
 * GET /api/cron/weekly-digest
 *
 * Unified weekly email: sends health report to ALL subscribers.
 * Consolidates two previous systems:
 * 1. email_subscriptions (unauthenticated users from /check)
 * 2. solar_systems + profiles (authenticated dashboard users)
 *
 * Runs every Monday at 2 PM UTC via Vercel Cron.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceRoleClient();

  // ─── 1. Collect all recipients from BOTH tables ───

  interface Recipient {
    email: string;
    siteId: string;
    apiKey: string; // decrypted
    brand: "solaredge" | "enphase";
    source: "subscription" | "dashboard";
  }

  const recipients: Recipient[] = [];
  const seenKeys = new Set<string>(); // dedup by email+siteId

  // Source A: email_subscriptions (unauthenticated /check users)
  const { data: subscriptions } = await supabase
    .from("email_subscriptions")
    .select("*")
    .eq("subscribed", true);

  for (const sub of subscriptions || []) {
    const key = `${sub.email}:${sub.site_id}`;
    if (seenKeys.has(key)) continue;
    seenKeys.add(key);
    recipients.push({
      email: sub.email,
      siteId: sub.site_id,
      apiKey: decryptCredential(sub.api_key),
      brand: "solaredge", // subscriptions from /check default to solaredge
      source: "subscription",
    });
  }

  // Source B: solar_systems + profiles (authenticated dashboard users)
  const { data: systems } = await supabase
    .from("solar_systems")
    .select("*, profiles!inner(email)")
    .eq("status", "active")
    .not("site_id", "is", null)
    .not("api_key", "is", null);

  for (const sys of systems || []) {
    const email = (sys as any).profiles?.email;
    if (!email) continue;
    const key = `${email}:${sys.site_id}`;
    if (seenKeys.has(key)) continue;
    seenKeys.add(key);
    recipients.push({
      email,
      siteId: sys.site_id,
      apiKey: decryptCredential(sys.api_key),
      brand: sys.type || "solaredge",
      source: "dashboard",
    });
  }

  if (recipients.length === 0) {
    return NextResponse.json({ message: "No active subscribers", sent: 0 });
  }

  // ─── 2. Process each recipient ───

  let sent = 0;
  let failed = 0;
  const errors: string[] = [];

  for (const recipient of recipients) {
    try {
      let summary;

      if (recipient.brand === "enphase") {
        const developerApiKey = process.env.ENPHASE_API_KEY;
        if (!developerApiKey) {
          errors.push(`${recipient.email}: Enphase not configured`);
          failed++;
          continue;
        }

        const { summary: enphaseSummary, production } =
          await getEnphaseDataForHealthScore(
            recipient.siteId,
            developerApiKey,
            recipient.apiKey,
            6
          );

        let lat = 0, lon = 0;
        if (enphaseSummary.postal_code) {
          try {
            const loc = await geocodePostalCode(enphaseSummary.postal_code, enphaseSummary.country || "US");
            lat = loc.latitude;
            lon = loc.longitude;
          } catch {}
        }

        if (lat === 0 || lon === 0) {
          errors.push(`${recipient.email}: Could not geocode Enphase system`);
          failed++;
          continue;
        }

        const expectedMonthlyKwh = await getExpectedMonthlyKwh(lat, lon, enphaseSummary.system_size / 1000);
        const monthlyEnergy = convertEnphaseIntervalsToMonthlyEnergy(production);

        summary = buildNormalizedHealthSummary("digest", {
          name: enphaseSummary.system_name || `Enphase System ${recipient.siteId}`,
          capacityKw: enphaseSummary.system_size / 1000,
          city: enphaseSummary.city || "",
          state: enphaseSummary.state || "",
          currentPowerW: enphaseSummary.current_power ?? 0,
          lifetimeEnergyWh: enphaseSummary.energy_lifetime ?? 0,
        }, monthlyEnergy, expectedMonthlyKwh);
      } else {
        // SolarEdge
        const { details, overview, monthlyEnergy } =
          await getSystemDataForHealthScore(recipient.siteId, recipient.apiKey, 6);

        const expectedMonthlyKwh = await getExpectedMonthlyKwh(
          details.location.latitude,
          details.location.longitude,
          details.peakPower
        );

        summary = buildHealthSummary("digest", details, overview, monthlyEnergy, expectedMonthlyKwh);
      }

      // Send the email
      const success = await sendDigestEmail({
        recipientEmail: recipient.email,
        systemName: summary.systemName,
        location: summary.location,
        healthScore: summary.overallScore,
        status: summary.overallStatus,
        currentPowerKw: summary.currentPowerW / 1000,
        estimatedLostKwh: summary.estimatedLostKwh,
        estimatedLostDollars: summary.estimatedLostDollars,
        topIssue: summary.overallScore < 75
          ? "Your system may need attention. Check your inverter for error codes and consider a professional inspection."
          : undefined,
        unsubscribeUrl: `https://www.getsolardoctor.com/api/unsubscribe?email=${encodeURIComponent(recipient.email)}&siteId=${encodeURIComponent(recipient.siteId)}`,
      });

      if (success) sent++;
      else failed++;

      // Rate limit: 200ms between emails
      await new Promise((resolve) => setTimeout(resolve, 200));
    } catch (err: any) {
      console.error(`Digest failed for ${recipient.email}:`, err.message);
      errors.push(`${recipient.email}: ${err.message}`);
      failed++;
    }
  }

  return NextResponse.json({
    message: "Weekly digest completed",
    total: recipients.length,
    sent,
    failed,
    errors: errors.length > 0 ? errors.slice(0, 10) : undefined,
  });
}
