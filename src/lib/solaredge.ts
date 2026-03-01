import type {
  SolarEdgeSiteDetails,
  SolarEdgeEnergyValue,
  SolarEdgeOverview,
} from "@/types";

const BASE_URL = "https://monitoringapi.solaredge.com";

// ─── Fetch Helpers ───

async function fetchSolarEdgeXML(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`SolarEdge API error: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

async function fetchSolarEdgeJSON(url: string): Promise<any> {
  // Use .json format for easier parsing
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`SolarEdge API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

// ─── Site Details ───

export async function getSiteDetails(
  siteId: string,
  apiKey: string
): Promise<SolarEdgeSiteDetails> {
  const url = `${BASE_URL}/site/${siteId}/details.json?api_key=${apiKey}`;
  const data = await fetchSolarEdgeJSON(url);
  return data.details;
}

// ─── Site Overview (current power, lifetime energy) ───

export async function getSiteOverview(
  siteId: string,
  apiKey: string
): Promise<SolarEdgeOverview> {
  const url = `${BASE_URL}/site/${siteId}/overview.json?api_key=${apiKey}`;
  const data = await fetchSolarEdgeJSON(url);
  return data.overview;
}

// ─── Monthly Energy Production ───

export async function getMonthlyEnergy(
  siteId: string,
  apiKey: string,
  startDate: string, // YYYY-MM-DD
  endDate: string // YYYY-MM-DD
): Promise<SolarEdgeEnergyValue[]> {
  const url = `${BASE_URL}/site/${siteId}/energy.json?timeUnit=MONTH&startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`;
  const data = await fetchSolarEdgeJSON(url);
  return data.energy.values;
}

// ─── Daily Energy Production ───

export async function getDailyEnergy(
  siteId: string,
  apiKey: string,
  startDate: string,
  endDate: string
): Promise<SolarEdgeEnergyValue[]> {
  const url = `${BASE_URL}/site/${siteId}/energy.json?timeUnit=DAY&startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`;
  const data = await fetchSolarEdgeJSON(url);
  return data.energy.values;
}

// ─── Data Period (start/end dates of available data) ───

export async function getDataPeriod(
  siteId: string,
  apiKey: string
): Promise<{ startDate: string; endDate: string }> {
  const url = `${BASE_URL}/site/${siteId}/dataPeriod.json?api_key=${apiKey}`;
  const data = await fetchSolarEdgeJSON(url);
  return data.dataPeriod;
}

// ─── Validate API Credentials ───

export async function validateCredentials(
  siteId: string,
  apiKey: string
): Promise<{ valid: boolean; details?: SolarEdgeSiteDetails; error?: string }> {
  try {
    const details = await getSiteDetails(siteId, apiKey);
    return { valid: true, details };
  } catch (error: any) {
    return {
      valid: false,
      error: error.message || "Invalid SolarEdge credentials",
    };
  }
}

// ─── Get Full System Data for Health Score ───

export async function getSystemDataForHealthScore(
  siteId: string,
  apiKey: string,
  months: number = 24 // How many months of history
) {
  const now = new Date();
  const startDate = new Date(now);
  startDate.setMonth(startDate.getMonth() - months);

  const startStr = startDate.toISOString().split("T")[0];
  const endStr = now.toISOString().split("T")[0];

  const [details, overview, monthlyEnergy] = await Promise.all([
    getSiteDetails(siteId, apiKey),
    getSiteOverview(siteId, apiKey),
    getMonthlyEnergy(siteId, apiKey, startStr, endStr),
  ]);

  return { details, overview, monthlyEnergy };
}
