import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getEnphaseAuthUrl } from "@/lib/enphase-oauth";
import { nanoid } from "nanoid";

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Validate returnTo against allowlist to prevent open redirect
    const ALLOWED_RETURN_PATHS = ["/dashboard", "/check", "/dashboard/connect"];
    const rawReturnTo = request.nextUrl.searchParams.get("returnTo") || "/dashboard";
    const returnTo = ALLOWED_RETURN_PATHS.includes(rawReturnTo) ? rawReturnTo : "/dashboard";

    // Generate a CSRF-safe state parameter
    const state = JSON.stringify({
      nonce: nanoid(),
      userId: user?.id || null,
      returnTo,
    });

    // Base64 encode the state for URL safety
    const encodedState = Buffer.from(state).toString("base64url");

    const authUrl = getEnphaseAuthUrl(encodedState);

    return NextResponse.redirect(authUrl);
  } catch (error: any) {
    console.error("Enphase authorize error:", error);
    return NextResponse.redirect(
      new URL("/check?error=enphase_not_configured", request.url)
    );
  }
}
