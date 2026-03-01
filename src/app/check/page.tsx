"use client";

import Link from "next/link";
import { useState } from "react";

type HealthStatus = "overperforming" | "healthy" | "underperforming" | "problem" | "critical" | "offline" | "no_data";

interface MonthlyScore {
  month: number;
  year: number;
  actualKwh: number;
  expectedKwh: number;
  score: number;
  status: HealthStatus;
}

interface HealthPreview {
  systemName: string;
  systemCapacityKw: number;
  location: string;
  currentPowerW: number;
  lifetimeKwh: number;
  overallScore: number;
  overallStatus: HealthStatus;
  latestScore: MonthlyScore | null;
  estimatedLostKwh: number;
  estimatedLostDollars: number;
  recentMonths: MonthlyScore[];
}

const STATUS_CONFIG: Record<HealthStatus, { color: string; bg: string; label: string }> = {
  overperforming: { color: "text-blue-700", bg: "bg-blue-50", label: "Overperforming" },
  healthy: { color: "text-green-700", bg: "bg-green-50", label: "Healthy" },
  underperforming: { color: "text-yellow-700", bg: "bg-yellow-50", label: "Underperforming" },
  problem: { color: "text-orange-700", bg: "bg-orange-50", label: "Problem Detected" },
  critical: { color: "text-red-700", bg: "bg-red-50", label: "Critical" },
  offline: { color: "text-gray-700", bg: "bg-gray-50", label: "Offline" },
  no_data: { color: "text-gray-500", bg: "bg-gray-50", label: "No Data" },
};

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function CheckPage() {
  const [siteId, setSiteId] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<HealthPreview | null>(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/health-score/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteId: siteId.trim(), apiKey: apiKey.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch health score");
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now, store email intent — will be wired to Supabase/Resend in next iteration
    setEmailSubmitted(true);
  }

  const scoreColor = result ? getScoreColor(result.overallScore) : "";

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-bold text-green-700">SolarDoctor</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
            <Link href="/auth" className="text-gray-500 hover:text-gray-700">Log In</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!result ? (
          <>
            {/* Input Form */}
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Check Your Solar System Health
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Enter your SolarEdge Site ID and API key to get an instant health score. Free, no account required.
              </p>
            </div>

            <form onSubmit={handleCheck} className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-lg mx-auto">
              {error && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm mb-5">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SolarEdge Site ID
                  </label>
                  <input
                    type="text"
                    value={siteId}
                    onChange={(e) => setSiteId(e.target.value)}
                    required
                    placeholder="e.g. 1234567"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Found in your SolarEdge monitoring app under Site Admin, or on the inverter label
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SolarEdge API Key
                  </label>
                  <input
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    required
                    placeholder="e.g. AEME1A9NVQ..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Go to monitoring.solaredge.com &rarr; Admin &rarr; Site Access &rarr; API Access
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition-colors"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Analyzing your system...
                    </span>
                  ) : (
                    "Get My Health Score"
                  )}
                </button>
              </div>

              <div className="mt-6 text-center">
                <details className="text-left">
                  <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                    How do I find my Site ID and API Key?
                  </summary>
                  <div className="mt-3 text-sm text-gray-600 space-y-3 bg-white rounded-lg p-4">
                    <p><strong>Site ID:</strong> Log into monitoring.solaredge.com. Your Site ID is the number in the URL (e.g., monitoring.solaredge.com/solaredge-web/p/site/<strong>1234567</strong>/...). It&apos;s also shown on the Site Admin page.</p>
                    <p><strong>API Key:</strong> In the SolarEdge monitoring portal, go to Admin &rarr; Site Access &rarr; API Access. Click &quot;Generate API Key&quot; if you don&apos;t have one. It looks like a long string of letters and numbers.</p>
                    <p className="text-xs text-gray-400">Your credentials are sent securely and never stored. We only use them to fetch your production data in real time.</p>
                  </div>
                </details>
              </div>
            </form>

            {/* Trust signals */}
            <div className="mt-10 text-center text-sm text-gray-400 space-y-1">
              <p>No account required. No credit card. Takes 30 seconds.</p>
              <p>Works with any SolarEdge residential or commercial system.</p>
            </div>
          </>
        ) : (
          <>
            {/* Results */}
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500 mb-2">{result.systemName} &middot; {result.location}</p>
              <p className="text-sm text-gray-400">{result.systemCapacityKw} kW system &middot; {Math.round(result.lifetimeKwh).toLocaleString()} kWh lifetime</p>
            </div>

            {/* Score Circle */}
            <div className="flex flex-col items-center mb-10">
              <div className={`w-36 h-36 rounded-full flex flex-col items-center justify-center ${STATUS_CONFIG[result.overallStatus].bg} border-4 ${getBorderColor(result.overallStatus)}`}>
                <span className={`text-4xl font-bold ${scoreColor}`}>
                  {Math.round(result.overallScore)}
                </span>
                <span className="text-xs text-gray-500 mt-1">out of 100</span>
              </div>
              <span className={`mt-3 text-sm font-semibold ${STATUS_CONFIG[result.overallStatus].color}`}>
                {STATUS_CONFIG[result.overallStatus].label}
              </span>
            </div>

            {/* Key Stats */}
            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {result.currentPowerW > 0 ? `${(result.currentPowerW / 1000).toFixed(1)} kW` : "0 kW"}
                </p>
                <p className="text-xs text-gray-500 mt-1">Producing right now</p>
              </div>
              <div className={`rounded-xl p-4 text-center ${result.estimatedLostKwh > 0 ? "bg-orange-50" : "bg-green-50"}`}>
                <p className={`text-2xl font-bold ${result.estimatedLostKwh > 0 ? "text-orange-700" : "text-green-700"}`}>
                  {result.estimatedLostKwh > 0 ? `-${result.estimatedLostKwh.toLocaleString()} kWh` : "0 kWh"}
                </p>
                <p className="text-xs text-gray-500 mt-1">Estimated lost production</p>
              </div>
              <div className={`rounded-xl p-4 text-center ${result.estimatedLostDollars > 0 ? "bg-red-50" : "bg-green-50"}`}>
                <p className={`text-2xl font-bold ${result.estimatedLostDollars > 0 ? "text-red-700" : "text-green-700"}`}>
                  {result.estimatedLostDollars > 0 ? `-$${result.estimatedLostDollars.toLocaleString()}` : "$0"}
                </p>
                <p className="text-xs text-gray-500 mt-1">Estimated lost savings</p>
              </div>
            </div>

            {/* Monthly Chart */}
            {result.recentMonths.length > 0 && (
              <div className="mb-10">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Recent Monthly Performance</h3>
                <div className="space-y-2">
                  {result.recentMonths.map((m, i) => {
                    const pct = m.expectedKwh > 0 ? Math.min((m.actualKwh / m.expectedKwh) * 100, 120) : 0;
                    const cfg = STATUS_CONFIG[m.status];
                    return (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <span className="w-16 text-gray-500 text-xs">{MONTH_NAMES[m.month - 1]} {m.year}</span>
                        <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden relative">
                          <div
                            className={`h-full rounded-full ${getBarColor(m.status)} transition-all`}
                            style={{ width: `${Math.max(pct, 2)}%` }}
                          />
                          <div
                            className="absolute top-0 h-full w-0.5 bg-gray-400"
                            style={{ left: "83.3%" }}
                            title="Expected (100%)"
                          />
                        </div>
                        <span className={`w-12 text-right text-xs font-medium ${cfg.color}`}>
                          {Math.round(m.score)}%
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Bar shows actual vs expected production. Gray line = 100% (expected).
                </p>
              </div>
            )}

            {/* Email Capture CTA */}
            {!showEmailCapture && !emailSubmitted && (
              <div className="bg-green-50 rounded-2xl p-6 sm:p-8 text-center mb-8">
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  Want weekly updates on your system&apos;s health?
                </h3>
                <p className="text-sm text-green-700 mb-4">
                  We&apos;ll email you a one-line health report every week — and alert you immediately if your score drops.
                </p>
                <button
                  onClick={() => setShowEmailCapture(true)}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Set Up Free Alerts
                </button>
              </div>
            )}

            {showEmailCapture && !emailSubmitted && (
              <form onSubmit={handleEmailSubmit} className="bg-green-50 rounded-2xl p-6 sm:p-8 text-center mb-8">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Enter your email for weekly health reports
                </h3>
                <div className="flex gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                  >
                    Start Alerts
                  </button>
                </div>
                <p className="text-xs text-green-600 mt-2">No spam. Unsubscribe anytime. Just your solar health score.</p>
              </form>
            )}

            {emailSubmitted && (
              <div className="bg-green-50 rounded-2xl p-6 text-center mb-8">
                <p className="text-green-800 font-medium">
                  You&apos;re all set! We&apos;ll send your first weekly health report soon.
                </p>
                <p className="text-sm text-green-600 mt-1">Check your email for a confirmation.</p>
              </div>
            )}

            {/* Try Again */}
            <div className="text-center">
              <button
                onClick={() => { setResult(null); setError(null); }}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Check another system
              </button>
            </div>
          </>
        )}
      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Solar Health Score Checker",
            description: "Free instant health score for your SolarEdge solar system. See if your panels are underperforming.",
            url: "https://www.getsolardoctor.com/check",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
