import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

/**
 * GET /api/unsubscribe?email=...&siteId=...
 *
 * One-click unsubscribe from weekly digest emails.
 * Returns a simple HTML page confirming unsubscription.
 */
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  const siteId = request.nextUrl.searchParams.get("siteId");

  if (!email || !siteId) {
    return new NextResponse(
      "<html><body><h2>Invalid unsubscribe link</h2><p>Missing email or site ID.</p></body></html>",
      { headers: { "Content-Type": "text/html" } }
    );
  }

  try {
    const supabase = createServiceRoleClient();

    await supabase
      .from("email_subscriptions")
      .update({ subscribed: false, updated_at: new Date().toISOString() })
      .eq("email", email.toLowerCase())
      .eq("site_id", siteId);

    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head><title>Unsubscribed - SolarDoctor</title>
<style>body{font-family:-apple-system,sans-serif;max-width:480px;margin:60px auto;padding:0 16px;text-align:center;}
h2{color:#111;}p{color:#666;line-height:1.6;}a{color:#16A34A;}</style>
</head>
<body>
  <h2>You've been unsubscribed</h2>
  <p>You won't receive any more weekly health reports for site ${siteId}.</p>
  <p>Changed your mind? <a href="https://www.getsolardoctor.com/check">Re-subscribe anytime</a>.</p>
  <p style="margin-top:32px;font-size:12px;color:#999;">
    <a href="https://www.getsolardoctor.com" style="color:#16A34A;">SolarDoctor</a>
  </p>
</body>
</html>`,
      { headers: { "Content-Type": "text/html" } }
    );
  } catch {
    return new NextResponse(
      "<html><body><h2>Something went wrong</h2><p>Please try again or contact support.</p></body></html>",
      { headers: { "Content-Type": "text/html" } }
    );
  }
}
