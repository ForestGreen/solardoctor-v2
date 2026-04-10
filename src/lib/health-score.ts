import type {
  HealthStatus,
  MonthlyHealthScore,
  NormalizedSystemInfo,
  SystemHealthSummary,
  SolarEdgeSiteDetails,
  SolarEdgeOverview,
  SolarEdgeEnergyValue,
} from "@/types";
import { getElectricityRate } from "@/lib/electricity-rates";

const SCORE_THRESHOLDS: { min: number; max: number; status: HealthStatus }[] = [
  { min: 110, max: Infinity, status: "overperforming" },
  { min: 90, max: 110, status: "healthy" },
  { min: 75, max: 90, status: "underperforming" },
  { min: 50, max: 75, status: "problem" },
  { min: 0, max: 50, status: "critical" },
];

export function getHealthStatus(score: number): HealthStatus {
  if (score <= 0) return "offline";
  for (const threshold of SCORE_THRESHOLDS) {
    if (score >= threshold.min && score < threshold.max) {
      return threshold.status;
    }
  }
  return "critical";
}

export function getStatusColor(status: HealthStatus): string {
  switch (status) {
    case "overperforming":
      return "#3b82f6";
    case "healthy":
      return "#22c55e";
    case "underperforming":
      return "#eab308";
    case "problem":
      return "#f97316";
    case "critical":
      return "#ef4444";
    case "offline":
      return "#6b7280";
    case "no_data":
      return "#9ca3af";
  }
}

export function getStatusLabel(status: HealthStatus): string {
  switch (status) {
    case "overperforming":
      return "Overperforming";
    case "healthy":
      return "Healthy";
    case "underperforming":
      return "Underperforming";
    case "problem":
      return "Problem Detected";
    case "critical":
      return "Critical";
    case "offline":
      return "Offline";
    case "no_data":
      return "No Data";
  }
}

export function getStatusEmoji(status: HealthStatus): string {
  switch (status) {
    case "overperforming":
      return "UP";
    case "healthy":
      return "OK";
    case "underperforming":
      return "LOW";
    case "problem":
      return "WARN";
    case "critical":
      return "BAD";
    case "offline":
      return "OFF";
    case "no_data":
      return "N/A";
  }
}

export function calculateMonthlyScore(
  actualWh: number,
  expectedKwh: number,
  month: number,
  year: number
): MonthlyHealthScore {
  const actualKwh = actualWh / 1000;
  const score = expectedKwh > 0 ? (actualKwh / expectedKwh) * 100 : 0;
  const status = actualWh === 0 ? "offline" : getHealthStatus(score);

  return {
    month,
    year,
    actualKwh: Math.round(actualKwh * 10) / 10,
    expectedKwh: Math.round(expectedKwh * 10) / 10,
    score: Math.round(score * 10) / 10,
    status,
  };
}

export function buildHealthSummary(
  systemId: string,
  details: SolarEdgeSiteDetails,
  overview: SolarEdgeOverview,
  monthlyEnergy: SolarEdgeEnergyValue[],
  expectedMonthlyKwh: number[]
): SystemHealthSummary {
  return buildNormalizedHealthSummary(
    systemId,
    {
      name: details.name,
      capacityKw: details.peakPower,
      city: details.location.city,
      state: details.location.state,
      postalCode: details.location.zip,
      country: details.location.country,
      currentPowerW: overview.currentPower?.power ?? 0,
      lifetimeEnergyWh: overview.lifeTimeData?.energy ?? 0,
    },
    monthlyEnergy,
    expectedMonthlyKwh
  );
}

export function buildNormalizedHealthSummary(
  systemId: string,
  systemInfo: NormalizedSystemInfo,
  monthlyEnergy: SolarEdgeEnergyValue[],
  expectedMonthlyKwh: number[]
): SystemHealthSummary {
  const monthlyScores: MonthlyHealthScore[] = [];

  for (const entry of monthlyEnergy) {
    if (entry.value === null || entry.value === undefined) continue;

    const date = new Date(entry.date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const expectedKwh = expectedMonthlyKwh[month - 1];

    monthlyScores.push(calculateMonthlyScore(entry.value, expectedKwh, month, year));
  }

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const completeMonths = monthlyScores
    .filter(
      (score) =>
        !(score.month === currentMonth && score.year === currentYear) &&
        score.actualKwh > 0
    )
    .sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return a.month - b.month;
    });

  const latestScore = [...completeMonths].reverse()[0] ?? null;
  const last12 = completeMonths.slice(-12);

  const overallScore =
    last12.length > 0
      ? last12.reduce((sum, score) => sum + score.score, 0) / last12.length
      : 0;

  let totalLostKwh = 0;
  for (const score of monthlyScores) {
    if (score.score < 90 && score.expectedKwh > 0) {
      const lostKwh = score.expectedKwh - score.actualKwh;
      if (lostKwh > 0) totalLostKwh += lostKwh;
    }
  }

  const ratePerKwh = getElectricityRate(systemInfo.state);

  return {
    systemId,
    systemName: systemInfo.name,
    systemCapacityKw: systemInfo.capacityKw,
    location: `${systemInfo.city}, ${systemInfo.state}`,
    currentPowerW: systemInfo.currentPowerW,
    lifetimeKwh: systemInfo.lifetimeEnergyWh / 1000,
    monthlyScores,
    latestScore,
    overallScore: Math.round(overallScore * 10) / 10,
    overallStatus: getHealthStatus(overallScore),
    estimatedLostKwh: Math.round(totalLostKwh),
    estimatedLostDollars: Math.round(totalLostKwh * ratePerKwh),
  };
}

export interface AlertRecommendation {
  shouldAlert: boolean;
  alertType: "offline" | "underperforming" | "critical" | null;
  message: string;
}

export function checkForAlerts(
  summary: SystemHealthSummary
): AlertRecommendation {
  const latest = summary.latestScore;

  if (!latest) {
    return { shouldAlert: false, alertType: null, message: "" };
  }

  if (latest.status === "offline" || latest.status === "critical") {
    return {
      shouldAlert: true,
      alertType: latest.status === "offline" ? "offline" : "critical",
      message: `Your solar system "${summary.systemName}" produced only ${latest.actualKwh} kWh in ${getMonthName(latest.month)} ${latest.year}. Based on your system size and location, it should have produced approximately ${latest.expectedKwh} kWh. That's a ${Math.round(100 - latest.score)}% shortfall. This suggests a significant issue that needs attention.`,
    };
  }

  if (latest.status === "problem" || latest.status === "underperforming") {
    return {
      shouldAlert: true,
      alertType: "underperforming",
      message: `Your solar system "${summary.systemName}" produced ${latest.actualKwh} kWh in ${getMonthName(latest.month)} ${latest.year}, which is ${Math.round(100 - latest.score)}% below the expected ${latest.expectedKwh} kWh. This is worth investigating.`,
    };
  }

  return { shouldAlert: false, alertType: null, message: "" };
}

function getMonthName(month: number): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month - 1];
}
