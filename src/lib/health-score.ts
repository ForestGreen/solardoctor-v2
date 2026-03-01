import type {
  HealthStatus,
  MonthlyHealthScore,
  SystemHealthSummary,
  SolarEdgeSiteDetails,
  SolarEdgeOverview,
  SolarEdgeEnergyValue,
} from "@/types";

// ─── Constants ───

const ELECTRICITY_RATE_PER_KWH = 0.32; // Hawaii average, can be made configurable

const SCORE_THRESHOLDS: { min: number; max: number; status: HealthStatus }[] = [
  { min: 110, max: Infinity, status: "overperforming" },
  { min: 90, max: 110, status: "healthy" },
  { min: 75, max: 90, status: "underperforming" },
  { min: 50, max: 75, status: "problem" },
  { min: 0, max: 50, status: "critical" },
];

// ─── Score Calculation ───

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
      return "#3b82f6"; // blue
    case "healthy":
      return "#22c55e"; // green
    case "underperforming":
      return "#eab308"; // yellow
    case "problem":
      return "#f97316"; // orange
    case "critical":
      return "#ef4444"; // red
    case "offline":
      return "#6b7280"; // gray
    case "no_data":
      return "#9ca3af"; // light gray
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
      return "🔵";
    case "healthy":
      return "🟢";
    case "underperforming":
      return "🟡";
    case "problem":
      return "🟠";
    case "critical":
      return "🔴";
    case "offline":
      return "⚫";
    case "no_data":
      return "⚪";
  }
}

// ─── Monthly Score Calculation ───

export function calculateMonthlyScore(
  actualWh: number,
  expectedKwh: number,
  month: number,
  year: number
): MonthlyHealthScore {
  const actualKwh = actualWh / 1000; // SolarEdge returns Wh
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

// ─── Full System Health Summary ───

export function buildHealthSummary(
  systemId: string,
  details: SolarEdgeSiteDetails,
  overview: SolarEdgeOverview,
  monthlyEnergy: SolarEdgeEnergyValue[],
  expectedMonthlyKwh: number[] // 12 values, Jan=index 0
): SystemHealthSummary {
  // Calculate monthly health scores
  const monthlyScores: MonthlyHealthScore[] = [];

  for (const entry of monthlyEnergy) {
    if (entry.value === null || entry.value === undefined) continue;

    const date = new Date(entry.date);
    const month = date.getMonth() + 1; // 1-12
    const year = date.getFullYear();
    const expectedKwh = expectedMonthlyKwh[month - 1]; // 0-indexed array

    const score = calculateMonthlyScore(entry.value, expectedKwh, month, year);
    monthlyScores.push(score);
  }

  // Latest complete month score
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  // Find most recent complete month (not the current partial month)
  const latestScore =
    monthlyScores
      .filter(
        (s) =>
          !(s.month === currentMonth && s.year === currentYear) &&
          s.actualKwh > 0
      )
      .sort((a, b) => {
        if (a.year !== b.year) return b.year - a.year;
        return b.month - a.month;
      })[0] ?? null;

  // Overall score: average of last 12 months (excluding current partial month)
  const last12 = monthlyScores
    .filter(
      (s) =>
        !(s.month === currentMonth && s.year === currentYear) &&
        s.actualKwh > 0
    )
    .slice(-12);

  const overallScore =
    last12.length > 0
      ? last12.reduce((sum, s) => sum + s.score, 0) / last12.length
      : 0;

  // Estimate lost production and dollars
  let totalLostKwh = 0;
  for (const score of monthlyScores) {
    if (score.score < 90 && score.expectedKwh > 0) {
      const lostKwh = score.expectedKwh - score.actualKwh;
      if (lostKwh > 0) totalLostKwh += lostKwh;
    }
  }

  return {
    systemId,
    systemName: details.name,
    systemCapacityKw: details.peakPower,
    location: `${details.location.city}, ${details.location.state}`,
    currentPowerW: overview.currentPower?.power ?? 0,
    lifetimeKwh: (overview.lifeTimeData?.energy ?? 0) / 1000,
    monthlyScores,
    latestScore,
    overallScore: Math.round(overallScore * 10) / 10,
    overallStatus: getHealthStatus(overallScore),
    estimatedLostKwh: Math.round(totalLostKwh),
    estimatedLostDollars: Math.round(totalLostKwh * ELECTRICITY_RATE_PER_KWH),
  };
}

// ─── Alert Logic ───

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

  if (latest.status === "problem") {
    return {
      shouldAlert: true,
      alertType: "underperforming",
      message: `Your solar system "${summary.systemName}" produced ${latest.actualKwh} kWh in ${getMonthName(latest.month)} ${latest.year}, which is ${Math.round(100 - latest.score)}% below the expected ${latest.expectedKwh} kWh. This could indicate shading, soiling, or a hardware issue worth investigating.`,
    };
  }

  if (latest.status === "underperforming") {
    return {
      shouldAlert: true,
      alertType: "underperforming",
      message: `Your solar system "${summary.systemName}" produced ${latest.actualKwh} kWh in ${getMonthName(latest.month)} ${latest.year}, which is ${Math.round(100 - latest.score)}% below the expected ${latest.expectedKwh} kWh. This is slightly below normal and worth keeping an eye on.`,
    };
  }

  return { shouldAlert: false, alertType: null, message: "" };
}

function getMonthName(month: number): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return months[month - 1];
}
