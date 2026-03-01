"use client";

import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { HealthScoreGauge } from "@/components/HealthScoreGauge";
import { MonthlyChart, ScoreTrendChart } from "@/components/MonthlyChart";
import { formatKwh, formatPower, formatDollars, getMonthName } from "@/lib/utils";
import { getStatusLabel, getStatusEmoji, getStatusColor } from "@/lib/health-score";
import type { SystemHealthSummary } from "@/types";
import Link from "next/link";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [systems, setSystems] = useState<any[]>([]);
  const [summary, setSummary] = useState<SystemHealthSummary | null>(null);
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);

  const supabase = createBrowserSupabaseClient();

  // Load user's solar systems
  useEffect(() => {
    async function loadSystems() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("solar_systems")
        .select("*")
        .eq("user_id", user.id)
        .order("dateadded", { ascending: false });

      if (error) {
        setError("Failed to load your systems");
        setLoading(false);
        return;
      }

      setSystems(data || []);

      if (data && data.length > 0) {
        // Auto-select first system with SolarEdge credentials
        const solarEdge = data.find((s: any) => s.site_id && s.api_key);
        if (solarEdge) {
          setSelectedSystem(solarEdge.id);
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
    loadSystems();
  }, []);

  // Fetch health score when system selected
  useEffect(() => {
    if (!selectedSystem) return;

    async function fetchHealthScore() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/health-score?systemId=${selectedSystem}`);
        if (!res.ok) {
          const body = await res.json();
          throw new Error(body.error || "Failed to fetch health score");
        }
        const data = await res.json();
        setSummary(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchHealthScore();
  }, [selectedSystem]);

  // No systems connected
  if (!loading && systems.length === 0) {
    return <EmptyState />;
  }

  // No SolarEdge systems
  if (!loading && !selectedSystem && systems.length > 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 mb-4">
          None of your systems have SolarEdge credentials configured yet.
        </p>
        <Link
          href="/dashboard/connect"
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Connect a System
        </Link>
      </div>
    );
  }

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-4">
          <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Something went wrong</h3>
        <p className="text-gray-500 mb-4">{error}</p>
        <button
          onClick={() => setSelectedSystem(selectedSystem)}
          className="text-green-600 hover:text-green-700 font-medium"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!summary) return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{summary.systemName}</h1>
          <p className="text-gray-500">
            {summary.location} &middot; {summary.systemCapacityKw} kW system
          </p>
        </div>
        {systems.length > 1 && (
          <select
            value={selectedSystem || ""}
            onChange={(e) => setSelectedSystem(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white"
          >
            {systems
              .filter((s) => s.site_id && s.api_key)
              .map((s) => (
                <option key={s.id} value={s.id}>
                  Site {s.site_id}
                </option>
              ))}
          </select>
        )}
      </div>

      {/* Score + Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Health Score Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
          <h2 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
            Overall Health Score
          </h2>
          <HealthScoreGauge
            score={summary.overallScore}
            status={summary.overallStatus}
            size="lg"
          />
          <p className="mt-4 text-sm text-gray-400 text-center">
            Based on last 12 months of production data
          </p>
        </div>

        {/* Key Metrics */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <MetricCard
            title="Current Power"
            value={formatPower(summary.currentPowerW)}
            subtitle={summary.currentPowerW > 0 ? "System is producing" : "Not producing right now"}
            color={summary.currentPowerW > 0 ? "green" : "gray"}
          />
          <MetricCard
            title="Lifetime Production"
            value={formatKwh(summary.lifetimeKwh)}
            subtitle="Total energy generated"
            color="blue"
          />
          <MetricCard
            title="Estimated Lost Energy"
            value={formatKwh(summary.estimatedLostKwh)}
            subtitle={`${formatDollars(summary.estimatedLostDollars)} in lost savings`}
            color={summary.estimatedLostKwh > 100 ? "orange" : "green"}
          />
          {summary.latestScore && (
            <MetricCard
              title={`${getMonthName(summary.latestScore.month)} ${summary.latestScore.year}`}
              value={`${Math.round(summary.latestScore.score)}%`}
              subtitle={`${getStatusEmoji(summary.latestScore.status)} ${getStatusLabel(summary.latestScore.status)}`}
              color={
                summary.latestScore.score >= 90
                  ? "green"
                  : summary.latestScore.score >= 75
                  ? "yellow"
                  : "red"
              }
            />
          )}
        </div>
      </div>

      {/* Monthly Production Chart */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Monthly Production: Actual vs Expected
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Gray bars show expected output (PVWatts estimate). Colored bars show actual production.
        </p>
        <MonthlyChart scores={summary.monthlyScores} />
      </div>

      {/* Score Trend */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Health Score Trend
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Green line: healthy threshold (90%). Yellow line: underperforming threshold (75%).
        </p>
        <ScoreTrendChart scores={summary.monthlyScores} />
      </div>

      {/* Monthly Breakdown Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 pb-0">
          <h2 className="text-lg font-semibold text-gray-900">Monthly Breakdown</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-3 font-medium text-gray-500">Month</th>
                <th className="text-right px-6 py-3 font-medium text-gray-500">Actual</th>
                <th className="text-right px-6 py-3 font-medium text-gray-500">Expected</th>
                <th className="text-right px-6 py-3 font-medium text-gray-500">Score</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {[...summary.monthlyScores].reverse().map((score, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-6 py-3 text-gray-900">
                    {getMonthName(score.month)} {score.year}
                  </td>
                  <td className="px-6 py-3 text-right text-gray-700">
                    {formatKwh(score.actualKwh)}
                  </td>
                  <td className="px-6 py-3 text-right text-gray-400">
                    {formatKwh(score.expectedKwh)}
                  </td>
                  <td className="px-6 py-3 text-right font-semibold" style={{ color: getStatusColor(score.status) }}>
                    {Math.round(score.score)}%
                  </td>
                  <td className="px-6 py-3">
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        color: getStatusColor(score.status),
                        backgroundColor: `${getStatusColor(score.status)}15`,
                      }}
                    >
                      {getStatusEmoji(score.status)} {getStatusLabel(score.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ───

function MetricCard({
  title,
  value,
  subtitle,
  color,
}: {
  title: string;
  value: string;
  subtitle: string;
  color: "green" | "blue" | "orange" | "red" | "gray" | "yellow";
}) {
  const colorMap = {
    green: "bg-green-50 text-green-700",
    blue: "bg-blue-50 text-blue-700",
    orange: "bg-orange-50 text-orange-700",
    red: "bg-red-50 text-red-700",
    gray: "bg-gray-50 text-gray-500",
    yellow: "bg-yellow-50 text-yellow-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
        {title}
      </p>
      <p className={`text-2xl font-bold ${colorMap[color].split(" ")[1]}`}>{value}</p>
      <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
        <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Welcome to SolarDoctor
      </h2>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        Connect your solar monitoring system to get a free health score and see
        if your panels are performing as expected.
      </p>
      <Link
        href="/dashboard/connect"
        className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors shadow-sm"
      >
        Connect Your System
        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-5 w-32 bg-gray-100 rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 h-72 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-40 h-40 rounded-full border-8 border-gray-100 animate-pulse" />
            <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="h-3 w-20 bg-gray-100 rounded animate-pulse mb-3" />
              <div className="h-7 w-24 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-3 w-32 bg-gray-100 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 h-96 flex items-center justify-center">
        <p className="text-gray-400 animate-pulse">Loading production data...</p>
      </div>
    </div>
  );
}
