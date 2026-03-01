// ─── SolarEdge API Types ───

export interface SolarEdgeSiteDetails {
  id: number;
  name: string;
  accountId: number;
  status: string;
  peakPower: number; // kW
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
  value: number | null; // Wh
}

export interface SolarEdgeOverview {
  lastUpdateTime: string;
  lifeTimeData: { energy: number; revenue: number };
  lastYearData: { energy: number };
  lastMonthData: { energy: number };
  lastDayData: { energy: number };
  currentPower: { power: number }; // Watts
}

// ─── PVWatts Types ───

export interface PVWattsRequest {
  lat: number;
  lon: number;
  system_capacity: number; // kW
  azimuth?: number; // degrees, default 180 (south)
  tilt?: number; // degrees, default = latitude
  array_type?: number; // 0=fixed open, 1=fixed roof, 2=1-axis, etc.
  module_type?: number; // 0=standard, 1=premium, 2=thin film
  losses?: number; // %, default 14
}

export interface PVWattsResponse {
  outputs: {
    ac_monthly: number[]; // 12 values, kWh per month
    ac_annual: number; // total annual kWh
    solrad_monthly: number[]; // solar radiation per month
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

// ─── Health Score Types ───

export type HealthStatus =
  | "healthy"
  | "overperforming"
  | "underperforming"
  | "problem"
  | "critical"
  | "offline"
  | "no_data";

export interface MonthlyHealthScore {
  month: number; // 1-12
  year: number;
  actualKwh: number;
  expectedKwh: number;
  score: number; // percentage (actual/expected * 100)
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

// ─── Database Types ───

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
