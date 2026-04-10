/**
 * Enphase OAuth 2.0 Integration
 *
 * Flow:
 * 1. User clicks "Connect with Enphase" → redirected to Enphase authorization URL
 * 2. User logs in and grants access → Enphase redirects back with auth code
 * 3. Our callback exchanges the code for access + refresh tokens
 * 4. We store the tokens and use them to fetch production data
 */

const ENPHASE_AUTH_URL = "https://api.enphaseenergy.com/oauth/authorize";
const ENPHASE_TOKEN_URL = "https://api.enphaseenergy.com/oauth/token";

function getEnphaseConfig() {
  const clientId = process.env.ENPHASE_CLIENT_ID;
  const clientSecret = process.env.ENPHASE_CLIENT_SECRET;
  const apiKey = process.env.ENPHASE_API_KEY;
  const redirectUri = process.env.NEXT_PUBLIC_ENPHASE_REDIRECT_URI ||
    "https://www.getsolardoctor.com/api/enphase/callback";

  if (!clientId || !clientSecret || !apiKey) {
    throw new Error("Enphase OAuth is not configured. Set ENPHASE_CLIENT_ID, ENPHASE_CLIENT_SECRET, and ENPHASE_API_KEY.");
  }

  return { clientId, clientSecret, apiKey, redirectUri };
}

/**
 * Generate the Enphase OAuth authorization URL
 * The `state` parameter prevents CSRF and can carry context (e.g. user ID)
 */
export function getEnphaseAuthUrl(state: string): string {
  const { clientId, redirectUri } = getEnphaseConfig();

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    state,
  });

  return `${ENPHASE_AUTH_URL}?${params.toString()}`;
}

/**
 * Exchange an authorization code for access + refresh tokens
 */
export async function exchangeEnphaseCode(code: string): Promise<{
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}> {
  const { clientId, clientSecret, redirectUri } = getEnphaseConfig();

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(ENPHASE_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }).toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Enphase token exchange failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json();

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresIn: data.expires_in, // typically 86400 (24 hours)
  };
}

/**
 * Refresh an expired access token using a refresh token
 */
export async function refreshEnphaseToken(refreshToken: string): Promise<{
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}> {
  const { clientId, clientSecret } = getEnphaseConfig();

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(ENPHASE_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }).toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Enphase token refresh failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json();

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresIn: data.expires_in,
  };
}
