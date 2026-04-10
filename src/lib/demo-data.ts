// Real anonymized data from a 7.6 kW SunPower system in Honolulu, HI
// Shows the dramatic Sep/Oct 2024 production failure — the founding story

import type { HealthStatus } from "@/types";

interface DemoMonthlyScore {
  month: number;
  year: number;
  actualKwh: number;
  expectedKwh: number;
  score: number;
  status: HealthStatus;
}

export interface DemoHealthPreview {
  systemName: string;
  systemCapacityKw: number;
  location: string;
  currentPowerW: number;
  lifetimeKwh: number;
  overallScore: number;
  overallStatus: HealthStatus;
  latestScore: DemoMonthlyScore | null;
  estimatedLostKwh: number;
  estimatedLostDollars: number;
  recentMonths: DemoMonthlyScore[];
}

const recentMonths: DemoMonthlyScore[] = [
  { month: 5, year: 2024, actualKwh: 812, expectedKwh: 820, score: 99, status: "healthy" },
  { month: 6, year: 2024, actualKwh: 876, expectedKwh: 850, score: 103, status: "overperforming" },
  { month: 7, year: 2024, actualKwh: 845, expectedKwh: 860, score: 98, status: "healthy" },
  { month: 8, year: 2024, actualKwh: 791, expectedKwh: 830, score: 95, status: "healthy" },
  { month: 9, year: 2024, actualKwh: 137, expectedKwh: 780, score: 18, status: "critical" },
  { month: 10, year: 2024, actualKwh: 52, expectedKwh: 750, score: 7, status: "critical" },
];

export const DEMO_DATA: DemoHealthPreview = {
  systemName: "Demo: Honolulu Residence",
  systemCapacityKw: 7.6,
  location: "Honolulu, HI",
  currentPowerW: 0,
  lifetimeKwh: 28450,
  overallScore: 72,
  overallStatus: "problem",
  latestScore: recentMonths[recentMonths.length - 1],
  estimatedLostKwh: 1441,
  estimatedLostDollars: 562,
  recentMonths,
};
