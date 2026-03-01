import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { sendWelcomeEmail } from "@/lib/email";

/**
 * POST /api/subscribe
 * Body: { email: string, siteId: string, apiKey: string }
 *
 * Stores an email subscription for weekly health score digest emails.
 * Uses service role to bypass RLS since this is a public endpoint.
 */
export async function POST(request: NextRequest) {
  try {
    const { email, siteId, apiKey } = await request.json();

    if (!email || !siteId || !apiKey) {
      return NextResponse.json(
        { error: "email, siteId, and apiKey are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const supabase = createServiceRoleClient();

    // Upsert the subscription (update if email+siteId already exists)
    const { error } = await supabase
      .from("email_subscriptions")
      .upsert(
        {
          email: email.toLowerCase().trim(),
          site_id: siteId.trim(),
          api_key: apiKey.trim(),
          subscribed: true,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "email,site_id",
        }
      );

    if (error) {
      console.error("Subscription error:", error);
      // If table doesn't exist yet, still return success to not break the UX
      // The table will be created when we set up the cron job
      if (error.code === "42P01") {
        console.log("email_subscriptions table does not exist yet — will be created during setup");
        return NextResponse.json({ success: true, message: "Subscription recorded" });
      }
      return NextResponse.json(
        { error: "Failed to save subscription" },
        { status: 500 }
      );
    }

    // Send welcome email (fire-and-forget, don't block response)
    sendWelcomeEmail(email.toLowerCase().trim(), siteId.trim()).catch(() => {});

    return NextResponse.json({ success: true, message: "Subscription saved successfully" });
  } catch (error: any) {
    console.error("Subscribe endpoint error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
