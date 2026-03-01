/**
 * Enphase API Integration
 *
 * Enphase uses OAuth2 for their API. For the public health check,
 * we use the Enphase Developer API v4 which requires:
 * - An API key (from developer.enphase.com)
 * - An access token (from OAuth2 flow)
 *
 * For the MVP public health check, we support two modes:
 * 1. System owner shares their Enphase System ID + we use our app credentials
 * 2. OAuth flow where the user authorizes read access
 *
 * Enphase API docs: https://developer-v4.enphase.com/docs
 */

const ENPHASE_BASE = "https://api.enphaseenergy.com/api/v4";

export interface EnphaseSystemSummary {
  system_id: number;
  system_name: string;
  system_public_name: string;
  status: string;
  timezone: string;
  country: string;
  state: string;
  city: string;
  postal_code: string;
  connection_type: string;
  meta: {
    status: string;
    last_report_at: number; // unix timestamp
    last_energy_at: number;
    operational_at: number;
  };
  energy_lifetime: number; // Wh
  energy_today: number; // Wh
  system_size: number; // W (DC)
  current_power: number; // W
  modules: number; // panel count
}

export interface EnphaseMonthlyProduction {
  system_id: number;
  start_at: number; // unix timestamp
  end_at: number;
  production: number; // Wh for the period
}

export interface EnphaseProductionStats {
  system_id: number;
  total_devices: number;
  intervals: {
    end_at: number; // unix timestamp
    devices_reporting: number;
    wh_del: number; // Wh delivered (produced)
  }[];
}

// ─── API Helpers ───

async function fetchEnphase(
  path: string,
  apiKey: string,
  accessToken: string
): Promise<any> {
  const url = `${ENPHASE_BASE}${path}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      key: apiKey,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Enphase API error: ${response.status} ${response.statusText} - ${errorText}`
    );
  }

  return response.json();
}

// ─── System Summary ───

export async function getEnphaseSystemSummary(
  systemId: string,
  apiKey: string,
  accessToken: string
): Promise<EnphaseSystemSummary> {
  return fetchEnphase(
    `/systems/${systemId}/summary`,
    apiKey,
    accessToken
  );
}

// ─── Monthly Production (using stats endpoint) ───

export async function getEnphaseMonthlyProduction(
  systemId: string,
  apiKey: string,
  accessToken: string,
  startAt: number, // unix timestamp
  endAt: number
): Promise<EnphaseProductionStats> {
  return fetchEnphase(
    `/systems/${systemId}/energy_lifetime?start_at=${startAt}&end_at=${endAt}&production=all`,
    apiKey,
    accessToken
  );
}

// ─── Validate Credentials ───

export async function validateEnphaseCredentials(
  systemId: string,
  apiKey: string,
  accessToken: string
): Promise<{ valid: boolean; summary?: EnphaseSystemSummary; error?: string }> {
  try {
    const summary = await getEnphaseSystemSummary(
      systemId,
      apiKey,
      accessToken
    );
    return { valid: true, summary };
  } catch (error: any) {
    return {
      valid: false,
      error: error.message || "Invalid Enphase credentials",
    };
  }
}

// ─── Get System Data for Health Score ───
// Note: For MVP, Enphase integration requires OAuth. We'll guide users through it.

export async function getEnphaseDataForHealthScore(
  systemId: string,
  apiKey: string,
  accessToken: string,
  months: number = 12
) {
  const now = new Date();
  const startDate = new Date(now);
  startDate.setMonth(startDate.getMonth() - months);

  const startAt = Math.floor(startDate.getTime() / 1000);
  const endAt = Math.floor(now.getTime() / 1000);

  const [summary, production] = await Promise.all([
    getEnphaseSystemSummary(systemId, apiKey, accessToken),
    getEnphaseMonthlyProduction(systemId, apiKey, accessToken, startAt, endAt),
  ]);

  return { summary, production };
}
