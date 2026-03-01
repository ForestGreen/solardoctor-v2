import { Metadata } from "next";
import Link from "next/link";
import { createServiceRoleClient } from "@/lib/supabase/server";

type HealthStatus =
  | "overperforming"
  | "healthy"
  | "underperforming"
  | "problem"
  | "critical"
  | "offline"
  | "no_data";

interface MonthlyScore {
  month: number;
  year: number;
  actualKwh: number;
  expectedKwh: number;
  score: number;
  status: HealthStatus;
}

interface ReportData {
  id: string;
  system_name: string;
  system_capacity_kw: number;
  location: string;
  overall_score: number;
  overall_status: HealthStatus;
  estimated_lost_kwh: number;
  estimated_lost_dollars: number;
  current_power_w: number;
  lifetime_kwh: number;
  recent_months: MonthlyScore[];
  created_at: string;
}

const STATUS_CONFIG: Record<
  HealthStatus,
  { color: string; bg: string; label: string; emoji: string }
> = {
  overperforming: {
    color: "text-blue-700",
    bg: "bg-blue-50",
    label: "Overperforming",
    emoji: "🔵",
  },
  healthy: {
    color: "text-green-700",
    bg: "bg-green-50",
    label: "Healthy",
    emoji: "🟢",
  },
  underperforming: {
    color: "text-yellow-700",
    bg: "bg-yellow-50",
    label: "Underperforming",
    emoji: "🟡",
  },
  problem: {
    color: "text-orange-700",
    bg: "bg-orange-50",
    label: "Problem Detected",
    emoji: "🟠",
  },
  critical: {
    color: "text-red-700",
    bg: "bg-red-50",
    label: "Critical",
    emoji: "🔴",
  },
  offline: {
    color: "text-gray-700",
    bg: "bg-gray-50",
    label: "Offline",
    emoji: "⚫",
  },
  no_data: {
    color: "text-gray-500",
    bg: "bg-gray-50",
    label: "No Data",
    emoji: "⚪",
  },
};

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

async function getReport(id: string): Promise<ReportData | null> {
  try {
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from("health_reports")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) return null;
    return data as ReportData;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const report = await getReport(params.id);

  if (!report) {
    return {
      title: "Report Not Found - SolarDoctor",
    };
  }

  const status = STATUS_CONFIG[report.overall_status];
  const score = Math.round(report.overall_score);
  const title = `Solar Health Score: ${score}/100 ${status.emoji} - ${report.location}`;
  const description =
    report.estimated_lost_dollars > 0
      ? `This ${report.system_capacity_kw}kW solar system in ${report.location} scored ${score}/100. Estimated $${report.estimated_lost_dollars} in lost savings detected. Get your free score at SolarDoctor.`
      : `This ${report.system_capacity_kw}kW solar system in ${report.location} scored ${score}/100 — ${status.label}. Get your free solar health score at SolarDoctor.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.getsolardoctor.com/report/${params.id}`,
      siteName: "SolarDoctor",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Solar Health Score: ${score}/100 ${status.emoji}`,
      description,
    },
  };
}

export default async function ReportPage({
  params,
}: {
  params: { id: string };
}) {
  const report = await getReport(params.id);

  if (!report) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
            <Link href="/" className="text-lg font-bold text-green-700">
              SolarDoctor
            </Link>
            <Link
              href="/check"
              className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-green-700"
            >
              Free Health Score
            </Link>
          </div>
        </nav>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Report Not Found
          </h1>
          <p className="text-gray-500 mb-6">
            This report may have expired or the link may be incorrect.
          </p>
          <Link
            href="/check"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
          >
            Get Your Free Health Score
          </Link>
        </div>
      </div>
    );
  }

  const statusCfg = STATUS_CONFIG[report.overall_status];
  const score = Math.round(report.overall_score);
  const shareUrl = `https://www.getsolardoctor.com/report/${report.id}`;
  const shareText = `My solar system scored ${score}/100 on SolarDoctor! ${statusCfg.emoji} Check yours free:`;

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-bold text-green-700">
            SolarDoctor
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/blog"
              className="text-gray-500 hover:text-gray-700"
            >
              Blog
            </Link>
            <Link
              href="/check"
              className="bg-green-600 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-green-700"
            >
              Free Health Score
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-2">
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">
            Solar Health Report
          </p>
          <p className="text-sm text-gray-500 mb-1">
            {report.system_name} &middot; {report.location}
          </p>
          <p className="text-sm text-gray-400">
            {report.system_capacity_kw} kW system &middot;{" "}
            {Math.round(report.lifetime_kwh).toLocaleString()} kWh lifetime
          </p>
        </div>

        {/* Score Circle */}
        <div className="flex flex-col items-center my-10">
          <div
            className={`w-40 h-40 rounded-full flex flex-col items-center justify-center ${statusCfg.bg} border-4 ${getBorderColor(report.overall_status)}`}
          >
            <span
              className={`text-5xl font-bold ${getScoreColor(report.overall_score)}`}
            >
              {score}
            </span>
            <span className="text-xs text-gray-500 mt-1">out of 100</span>
          </div>
          <span
            className={`mt-3 text-sm font-semibold ${statusCfg.color}`}
          >
            {statusCfg.label}
          </span>
        </div>

        {/* Key Stats */}
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">
              {report.current_power_w > 0
                ? `${(report.current_power_w / 1000).toFixed(1)} kW`
                : "0 kW"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Power at time of check
            </p>
          </div>
          <div
            className={`rounded-xl p-4 text-center ${report.estimated_lost_kwh > 0 ? "bg-orange-50" : "bg-green-50"}`}
          >
            <p
              className={`text-2xl font-bold ${report.estimated_lost_kwh > 0 ? "text-orange-700" : "text-green-700"}`}
            >
              {report.estimated_lost_kwh > 0
                ? `-${report.estimated_lost_kwh.toLocaleString()} kWh`
                : "0 kWh"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Estimated lost production
            </p>
          </div>
          <div
            className={`rounded-xl p-4 text-center ${report.estimated_lost_dollars > 0 ? "bg-red-50" : "bg-green-50"}`}
          >
            <p
              className={`text-2xl font-bold ${report.estimated_lost_dollars > 0 ? "text-red-700" : "text-green-700"}`}
            >
              {report.estimated_lost_dollars > 0
                ? `-$${report.estimated_lost_dollars.toLocaleString()}`
                : "$0"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Estimated lost savings
            </p>
          </div>
        </div>

        {/* Monthly Performance */}
        {report.recent_months && report.recent_months.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Recent Monthly Performance
            </h3>
            <div className="space-y-2">
              {report.recent_months.map(
                (m: MonthlyScore, i: number) => {
                  const pct =
                    m.expectedKwh > 0
                      ? Math.min(
                          (m.actualKwh / m.expectedKwh) * 100,
                          120
                        )
                      : 0;
                  const cfg = STATUS_CONFIG[m.status];
                  return (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="w-16 text-gray-500 text-xs">
                        {MONTH_NAMES[m.month - 1]} {m.year}
                      </span>
                      <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden relative">
                        <div
                          className={`h-full rounded-full ${getBarColor(m.status)} transition-all`}
                          style={{
                            width: `${Math.max(pct, 2)}%`,
                          }}
                        />
                        <div
                          className="absolute top-0 h-full w-0.5 bg-gray-400"
                          style={{ left: "83.3%" }}
                          title="Expected (100%)"
                        />
                      </div>
                      <span
                        className={`w-12 text-right text-xs font-medium ${cfg.color}`}
                      >
                        {Math.round(m.score)}%
                      </span>
                    </div>
                  );
                }
              )}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Bar shows actual vs expected production. Gray line = 100%
              (expected).
            </p>
          </div>
        )}

        {/* Share Section */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Share This Report
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Know a neighbor with solar? Help them check their system too.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Share on Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-600"
            >
              Share on X
            </a>
            <a
              href={`https://nextdoor.com/sharekit/?source=sharer&body=${encodeURIComponent(shareText + " " + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
            >
              Share on Nextdoor
            </a>
          </div>
          <button
            onClick={() => {}}
            className="mt-3 text-sm text-gray-500 hover:text-gray-700 underline"
            id="copy-link-btn"
          >
            Copy link
          </button>
          {/* Client-side copy script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              document.getElementById('copy-link-btn')?.addEventListener('click', function() {
                navigator.clipboard.writeText('${shareUrl}').then(function() {
                  var btn = document.getElementById('copy-link-btn');
                  if (btn) { btn.textContent = 'Link copied!'; setTimeout(function() { btn.textContent = 'Copy link'; }, 2000); }
                });
              });
            `,
            }}
          />
        </div>

        {/* CTA */}
        <div className="bg-green-50 rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-lg font-bold text-green-900 mb-2">
            Is your solar system performing?
          </h3>
          <p className="text-sm text-green-700 mb-4">
            Get your own free health score in 30 seconds. No account required.
          </p>
          <Link
            href="/check"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Get My Free Health Score
          </Link>
        </div>

        {/* Timestamp */}
        <p className="text-xs text-gray-300 text-center mt-8">
          Report generated{" "}
          {new Date(report.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Solar Health Score: ${score}/100 - ${report.location}`,
            description: `Health report for a ${report.system_capacity_kw}kW solar system in ${report.location}`,
            url: shareUrl,
            publisher: {
              "@type": "Organization",
              name: "SolarDoctor",
              url: "https://www.getsolardoctor.com",
            },
          }),
        }}
      />
    </div>
  );
}

function getScoreColor(score: number): string {
  if (score >= 110) return "text-blue-600";
  if (score >= 90) return "text-green-600";
  if (score >= 75) return "text-yellow-600";
  if (score >= 50) return "text-orange-600";
  return "text-red-600";
}

function getBorderColor(status: HealthStatus): string {
  const map: Record<HealthStatus, string> = {
    overperforming: "border-blue-200",
    healthy: "border-green-200",
    underperforming: "border-yellow-200",
    problem: "border-orange-200",
    critical: "border-red-200",
    offline: "border-gray-200",
    no_data: "border-gray-200",
  };
  return map[status];
}

function getBarColor(status: HealthStatus): string {
  const map: Record<HealthStatus, string> = {
    overperforming: "bg-blue-400",
    healthy: "bg-green-400",
    underperforming: "bg-yellow-400",
    problem: "bg-orange-400",
    critical: "bg-red-400",
    offline: "bg-gray-300",
    no_data: "bg-gray-200",
  };
  return map[status];
}
