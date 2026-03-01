"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { getMonthName } from "@/lib/utils";
import { getStatusColor, getHealthStatus } from "@/lib/health-score";
import type { MonthlyHealthScore } from "@/types";

interface MonthlyChartProps {
  scores: MonthlyHealthScore[];
}

export function MonthlyChart({ scores }: MonthlyChartProps) {
  const chartData = scores.map((s) => ({
    name: `${getMonthName(s.month, true)} ${String(s.year).slice(2)}`,
    actual: s.actualKwh,
    expected: s.expectedKwh,
    score: s.score,
    fill: getStatusColor(s.status),
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            tickLine={false}
            axisLine={{ stroke: "#e5e7eb" }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v}`}
            label={{
              value: "kWh",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: 11, fill: "#9ca3af" },
            }}
          />
          <Tooltip
            formatter={(value: number, name: string) => [
              `${Math.round(value)} kWh`,
              name === "actual" ? "Actual" : "Expected",
            ]}
            labelStyle={{ fontWeight: 600 }}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
          <Legend
            formatter={(value) =>
              value === "expected" ? "Expected (PVWatts)" : "Actual Production"
            }
          />
          <Bar
            dataKey="expected"
            fill="#e5e7eb"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="actual"
            radius={[4, 4, 0, 0]}
            barSize={20}
          >
            {chartData.map((entry, index) => (
              <rect key={index} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Simpler version: score trend line
export function ScoreTrendChart({ scores }: MonthlyChartProps) {
  const chartData = scores.map((s) => ({
    name: `${getMonthName(s.month, true)} ${String(s.year).slice(2)}`,
    score: s.score,
    fill: getStatusColor(s.status),
  }));

  return (
    <div className="w-full h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            tickLine={false}
            axisLine={{ stroke: "#e5e7eb" }}
          />
          <YAxis
            domain={[0, 120]}
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            formatter={(value: number) => [`${Math.round(value)}%`, "Health Score"]}
          />
          <ReferenceLine y={90} stroke="#22c55e" strokeDasharray="3 3" />
          <ReferenceLine y={75} stroke="#eab308" strokeDasharray="3 3" />
          <Bar dataKey="score" radius={[3, 3, 0, 0]} barSize={16}>
            {chartData.map((entry, index) => (
              <rect key={index} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
