import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { exchangeEnphaseCode } from "@/lib/enphase-oauth";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const stateParam = request.nextUrl.searchParams.get("state");
  const errorParam = request.nextUrl.searchParams.get("error");

  // Handle Enphase error (user denied access, etc.)
  if (errorParam) {
    return NextResponse.redirect(
      new URL(`/check?error=enphase_denied`, request.url)
    );
  }

  if (!code || !stateParam) {
    return NextResponse.redirect(
      new URL("/check?error=missing_code", request.url)
    );
  }

  // Decode state
  let state: { userId: string | null; returnTo: string };
  try {
    state = JSON.parse(Buffer.from(stateParam, "base64url").toString());
  } catch {
    return NextResponse.redirect(
      new URL("/check?error=invalid_state", request.url)
    );
  }

  try {
    // Exchange code for tokens
    const { accessToken, refreshToken, expiresIn } = await exchangeEnphaseCode(code);

    const supabase = createServerSupabaseClient();

    // Fetch the user's Enphase systems using the new token
    const apiKey = process.env.ENPHASE_API_KEY!;
    const systemsResponse = await fetch(
      "https://api.enphaseenergy.com/api/v4/systems",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          key: apiKey,
        },
      }
    );

    if (!systemsResponse.ok) {
      throw new Error(`Failed to fetch Enphase systems: ${systemsResponse.status}`);
    }

    const systemsData = await systemsResponse.json();
    const systems = systemsData.systems || [];

    if (systems.length === 0) {
      return NextResponse.redirect(
        new URL("/check?error=no_enphase_systems", request.url)
      );
    }

    // If user is logged in, save the system and tokens
    if (state.userId) {
      const firstSystem = systems[0];

      // Save or update the Enphase system
      const { error: upsertError } = await supabase
        .from("solar_systems")
        .upsert(
          {
            user_id: state.userId,
            type: "enphase",
            site_id: String(firstSystem.system_id),
            api_key: accessToken,
            username: refreshToken, // Store refresh token in username field temporarily
            status: "active",
            system_capacity_kw: firstSystem.system_size ? firstSystem.system_size / 1000 : null,
            city: firstSystem.city || null,
            state: firstSystem.state || null,
            zip_code: firstSystem.postal_code || null,
          },
          { onConflict: "user_id,site_id" }
        );

      if (upsertError) {
        console.error("Failed to save Enphase system:", upsertError);
      }

      // Redirect to dashboard
      return NextResponse.redirect(
        new URL(state.returnTo || "/dashboard", request.url)
      );
    }

    // If not logged in, redirect to check page with the token for a preview check
    // Store tokens in a short-lived server-side session or pass via encrypted cookie
    const firstSystem = systems[0];
    const previewParams = new URLSearchParams({
      enphase: "connected",
      systemId: String(firstSystem.system_id),
      systemName: firstSystem.system_name || `Enphase System`,
    });

    // Set tokens in a secure HTTP-only cookie for the preview flow
    const response = NextResponse.redirect(
      new URL(`/check?${previewParams.toString()}`, request.url)
    );

    response.cookies.set("enphase_access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: expiresIn,
      path: "/",
    });

    response.cookies.set("enphase_refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    });

    return response;
  } catch (error: any) {
    console.error("Enphase callback error:", error);
    return NextResponse.redirect(
      new URL(`/check?error=enphase_failed`, request.url)
    );
  }
}
