"use client";

import { getStatusColor, getStatusLabel } from "@/lib/health-score";
import type { HealthStatus } from "@/types";

interface HealthScoreGaugeProps {
  score: number;
  status: HealthStatus;
  size?: "sm" | "md" | "lg";
}

export function HealthScoreGauge({
  score,
  status,
  size = "lg",
}: HealthScoreGaugeProps) {
  const color = getStatusColor(status);
  const label = getStatusLabel(status);

  const dimensions = {
    sm: { width: 100, fontSize: "text-xl", labelSize: "text-xs" },
    md: { width: 140, fontSize: "text-3xl", labelSize: "text-sm" },
    lg: { width: 200, fontSize: "text-5xl", labelSize: "text-base" },
  };

  const dim = dimensions[size];
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(score, 0), 120); // Cap at 120%
  const offset = circumference - (progress / 120) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: dim.width, height: dim.width }} className="relative">
        <svg
          viewBox="0 0 100 100"
          className="transform -rotate-90"
          style={{ width: "100%", height: "100%" }}
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="score-gauge transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${dim.fontSize} font-bold`} style={{ color }}>
            {Math.round(score)}
          </span>
          <span className="text-gray-400 text-xs">/ 100</span>
        </div>
      </div>
      <div
        className={`mt-2 ${dim.labelSize} font-semibold px-3 py-1 rounded-full`}
        style={{ color, backgroundColor: `${color}15` }}
      >
        {label}
      </div>
    </div>
  );
}
