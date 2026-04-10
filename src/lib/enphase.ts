/**
 * Enphase API Integration
 */

import type { SolarEdgeEnergyValue } from "@/types";

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
    last_report_at: number;
    last_energy_at: number;
    operational_at: number;
  };
  energy_lifetime: number;
  energy_today: number;
  system_size: number;
  current_power: number;
  modules: number;
}

export interface EnphaseProductionStats {
  system_id: number;
  total_devices: number;
  intervals: {
    end_at: number;
    devices_reporting: number;
    wh_del: number;
  }[];
}

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

export async function getEnphaseSystemSummary(
  systemId: string,
  apiKey: string,
  accessToken: string
): Promise<EnphaseSystemSummary> {
  return fetchEnphase(`/systems/${systemId}/summary`, apiKey, accessToken);
}

export async function getEnphaseMonthlyProduction(
  systemId: string,
  apiKey: string,
  accessToken: string,
  startAt: number,
  endAt: number
): Promise<EnphaseProductionStats> {
  return fetchEnphase(
    `/systems/${systemId}/stats?start_at=${startAt}&end_at=${endAt}&interval=day`,
    apiKey,
    accessToken
  );
}

export function convertEnphaseIntervalsToMonthlyEnergy(
  production: EnphaseProductionStats
): SolarEdgeEnergyValue[] {
  const monthlyTotals = new Map<string, number>();

  for (const interval of production.intervals || []) {
    const date = new Date(interval.end_at * 1000);
    const key = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
    monthlyTotals.set(key, (monthlyTotals.get(key) || 0) + (interval.wh_del || 0));
  }

  return Array.from(monthlyTotals.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => ({
      date: `${key}-01T00:00:00.000Z`,
      value,
    }));
}

export async function validateEnphaseCredentials(
  systemId: string,
  apiKey: string,
  accessToken: string
): Promise<{ valid: boolean; summary?: EnphaseSystemSummary; error?: string }> {
  try {
    const summary = await getEnphaseSystemSummary(systemId, apiKey, accessToken);
    return { valid: true, summary };
  } catch (error: any) {
    return {
      valid: false,
      error: error.message || "Invalid Enphase credentials",
    };
  }
}

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
