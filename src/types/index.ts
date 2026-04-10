// SolarEdge API Types

export interface SolarEdgeSiteDetails {
  id: number;
  name: string;
  accountId: number;
  status: string;
  peakPower: number;
  installationDate: string;
  type: string;
  location: {
    country: string;
    state: string;
    city: string;
    address: string;
    zip: string;
    timeZone: string;
    latitude: number;
    longitude: number;
  };
  primaryModule: {
    manufacturerName: string;
    modelName: string;
    maximumPower: number;
  };
}

export interface SolarEdgeEnergyValue {
  date: string;
  value: number | null;
}

export interface SolarEdgeOverview {
  lastUpdateTime: string;
  lifeTimeData: { energy: number; revenue: number };
  lastYearData: { energy: number };
  lastMonthData: { energy: number };
  lastDayData: { energy: number };
  currentPower: { power: number };
}

export interface NormalizedSystemInfo {
  name: string;
  capacityKw: number;
  city: string;
  state: string;
  postalCode?: string;
  country?: string;
  currentPowerW: number;
  lifetimeEnergyWh: number;
}

// PVWatts Types

export interface PVWattsRequest {
  lat: number;
  lon: number;
  system_capacity: number;
  azimuth?: number;
  tilt?: number;
  array_type?: number;
  module_type?: number;
  losses?: number;
}

export interface PVWattsResponse {
  outputs: {
    ac_monthly: number[];
    ac_annual: number;
    solrad_monthly: number[];
    solrad_annual: number;
    capacity_factor: number;
  };
  station_info: {
    lat: number;
    lon: number;
    elev: number;
    tz: number;
    location: string;
    city: string;
    state: string;
    distance: number;
  };
}

// Health Score Types

export type HealthStatus =
  | "healthy"
  | "overperforming"
  | "underperforming"
  | "problem"
  | "critical"
  | "offline"
  | "no_data";

export interface MonthlyHealthScore {
  month: number;
  year: number;
  actualKwh: number;
  expectedKwh: number;
  score: number;
  status: HealthStatus;
}

export interface SystemHealthSummary {
  systemId: string;
  systemName: string;
  systemCapacityKw: number;
  location: string;
  currentPowerW: number;
  lifetimeKwh: number;
  monthlyScores: MonthlyHealthScore[];
  latestScore: MonthlyHealthScore | null;
  overallScore: number;
  overallStatus: HealthStatus;
  estimatedLostKwh: number;
  estimatedLostDollars: number;
}

// Database Types

export interface SolarSystem {
  id: string;
  user_id: string;
  type: "solaredge" | "enphase";
  username: string;
  password: string;
  status: string;
  dateadded: string;
  site_id: string | null;
  api_key: string | null;
  system_capacity_kw: number | null;
  latitude: number | null;
  longitude: number | null;
  zip_code: string | null;
  city: string | null;
  state: string | null;
  install_date: string | null;
}

export interface ExpectedProduction {
  id: string;
  solar_system_id: string;
  month: number;
  expected_kwh: number;
  year: number;
  pvwatts_params: Record<string, unknown> | null;
}

export interface MonthlyProduction {
  id: string;
  solar_system_id: string;
  month: number;
  year: number;
  actual_kwh: number;
  health_score: number | null;
  status: HealthStatus | null;
}
