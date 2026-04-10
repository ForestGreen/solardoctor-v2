import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getEnphaseAuthUrl } from "@/lib/enphase-oauth";
import { nanoid } from "nanoid";

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Generate a CSRF-safe state parameter
    // Include user ID if logged in, so we can link the tokens after callback
    const state = JSON.stringify({
      nonce: nanoid(),
      userId: user?.id || null,
      returnTo: request.nextUrl.searchParams.get("returnTo") || "/dashboard",
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
