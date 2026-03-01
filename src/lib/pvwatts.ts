import type { PVWattsRequest, PVWattsResponse } from "@/types";

const PVWATTS_BASE = "https://developer.nrel.gov/api/pvwatts/v8.json";

/**
 * Fetch expected monthly production from NREL PVWatts API.
 *
 * Design principle: minimize user inputs.
 * - lat/lon and system_capacity come from SolarEdge site details (auto-populated)
 * - tilt defaults to latitude (common rule of thumb)
 * - azimuth defaults to 180° (south-facing)
 * - array_type defaults to 1 (fixed roof mount)
 * - losses defaults to 14% (industry standard)
 *
 * This gets us ~90% accuracy without asking the homeowner anything.
 * Tilt/azimuth can later be inferred from production curves.
 */
export async function getExpectedProduction(
  params: PVWattsRequest
): Promise<PVWattsResponse> {
  const apiKey = process.env.NREL_API_KEY || "DEMO_KEY";

  const queryParams = new URLSearchParams({
    api_key: apiKey,
    lat: params.lat.toString(),
    lon: params.lon.toString(),
    system_capacity: params.system_capacity.toString(),
    azimuth: (params.azimuth ?? 180).toString(),
    tilt: (params.tilt ?? Math.abs(params.lat)).toString(), // Default: tilt = latitude
    array_type: (params.array_type ?? 1).toString(), // Fixed roof mount
    module_type: (params.module_type ?? 0).toString(), // Standard
    losses: (params.losses ?? 14).toString(), // 14% industry standard
    dc_ac_ratio: "1.2",
    inv_eff: "96.0",
    gcr: "0.4",
    dataset: "nsrdb",
  });

  const url = `${PVWATTS_BASE}?${queryParams.toString()}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`PVWatts API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();

  if (data.errors && data.errors.length > 0) {
    throw new Error(`PVWatts error: ${data.errors.join(", ")}`);
  }

  return data;
}

/**
 * Get expected monthly kWh for a system.
 * Returns an array of 12 values (Jan=0, Dec=11).
 */
export async function getExpectedMonthlyKwh(
  lat: number,
  lon: number,
  systemCapacityKw: number
): Promise<number[]> {
  const result = await getExpectedProduction({
    lat,
    lon,
    system_capacity: systemCapacityKw,
  });

  return result.outputs.ac_monthly;
}

/**
 * Get expected annual kWh.
 */
export async function getExpectedAnnualKwh(
  lat: number,
  lon: number,
  systemCapacityKw: number
): Promise<number> {
  const result = await getExpectedProduction({
    lat,
    lon,
    system_capacity: systemCapacityKw,
  });

  return result.outputs.ac_annual;
}
