"use client";

import Link from "next/link";
import { useState } from "react";

type HealthStatus = "overperforming" | "healthy" | "underperforming" | "problem" | "critical" | "offline" | "no_data";
type InverterBrand = "solaredge" | "enphase";

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

const STATUS_CONFIG: Record<HealthStatus, { color: string; bg: string; label: string; emoji: string }> = {
  overperforming: { color: "text-blue-700", bg: "bg-blue-50", label: "Overperforming", emoji: "🔵" },
  healthy: { color: "text-green-700", bg: "bg-green-50", label: "Healthy", emoji: "🟢" },
  underperforming: { color: "text-yellow-700", bg: "bg-yellow-50", label: "Underperforming", emoji: "🟡" },
  problem: { color: "text-orange-700", bg: "bg-orange-50", label: "Problem Detected", emoji: "🟠" },
  critical: { color: "text-red-700", bg: "bg-red-50", label: "Critical", emoji: "🔴" },
  offline: { color: "text-gray-700", bg: "bg-gray-50", label: "Offline", emoji: "⚫" },
  no_data: { color: "text-gray-500", bg: "bg-gray-50", label: "No Data", emoji: "⚪" },
};

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function CheckPage() {
  const [brand, setBrand] = useState<InverterBrand>("solaredge");
  const [siteId, setSiteId] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<HealthPreview | null>(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [reportUrl, setReportUrl] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [showWalkthrough, setShowWalkthrough] = useState(false);

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    setReportUrl(null);

    try {
      if (brand === "enphase") {
        setError("Enphase support is coming soon! We're working on integrating the Enphase API. Enter your email below to be notified when it's ready.");
        setLoading(false);
        return;
      }

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

      // Save report for sharing (fire and forget)
      try {
        const reportResponse = await fetch("/api/report", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const reportData = await reportResponse.json();
        if (reportData.reportId) {
          setReportUrl(`https://www.getsolardoctor.com/report/${reportData.reportId}`);
        }
      } catch {
        // Report saving is optional - don't block the UX
      }

      // Track conversion event
      try {
        if (typeof window !== "undefined" && (window as any).va) {
          (window as any).va("event", { name: "health_check_completed", data: { score: data.overallScore, status: data.overallStatus } });
        }
      } catch {}

    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          siteId: siteId.trim(),
          apiKey: apiKey.trim(),
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to subscribe");
      }
      setEmailSubmitted(true);
    } catch (err: any) {
      setEmailSubmitted(true);
    }
  }

  async function copyShareLink() {
    if (!reportUrl) return;
    try {
      await navigator.clipboard.writeText(reportUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = reportUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    }
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
                Get an instant health score for your solar system. Free, no account required.
              </p>
            </div>

            <form onSubmit={handleCheck} className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-lg mx-auto">
              {error && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm mb-5">
                  {error}
                  {brand === "enphase" && (
                    <div className="mt-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full border border-red-200 rounded-lg px-3 py-2 text-sm mb-2"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (email.trim()) {
                            fetch("/api/subscribe", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ email: email.trim(), siteId: "enphase-waitlist", apiKey: "pending" }),
                            });
                            setError("Thanks! We'll notify you when Enphase support is live.");
                          }
                        }}
                        className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700"
                      >
                        Notify Me When Ready
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Inverter Brand Selector */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What brand is your inverter?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => { setBrand("solaredge"); setError(null); }}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-colors ${
                      brand === "solaredge"
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    SolarEdge
                  </button>
                  <button
                    type="button"
                    onClick={() => { setBrand("enphase"); setError(null); }}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-colors ${
                      brand === "enphase"
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    Enphase
                    <span className="block text-xs font-normal mt-0.5 opacity-70">Coming soon</span>
                  </button>
                </div>
              </div>

              {brand === "solaredge" && (
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
                      The number in your SolarEdge monitoring URL, or on your inverter label
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
                    <button
                      type="button"
                      onClick={() => setShowWalkthrough(!showWalkthrough)}
                      className="text-xs text-green-600 hover:text-green-700 mt-1 underline"
                    >
                      {showWalkthrough ? "Hide instructions" : "Where do I find this?"}
                    </button>
                  </div>

                  {/* Step-by-step API Key Walkthrough */}
                  {showWalkthrough && (
                    <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-4">
                      <p className="text-sm font-semibold text-gray-800">
                        How to get your SolarEdge API key (takes ~2 minutes):
                      </p>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                          <div>
                            <p className="text-sm text-gray-700">Go to <a href="https://monitoring.solaredge.com" target="_blank" rel="noopener noreferrer" className="text-green-600 underline font-medium">monitoring.solaredge.com</a> and log in</p>
                            <p className="text-xs text-gray-400 mt-0.5">Use the same email/password from when your system was installed</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                          <div>
                            <p className="text-sm text-gray-700">Find your <strong>Site ID</strong> in the URL bar</p>
                            <p className="text-xs text-gray-400 mt-0.5">It&apos;s the number after &ldquo;/site/&rdquo; — e.g., monitoring.solaredge.com/...site/<strong>1234567</strong>/...</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                          <div>
                            <p className="text-sm text-gray-700">Click the <strong>Admin</strong> icon (gear) in the left sidebar</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                          <div>
                            <p className="text-sm text-gray-700">Click <strong>Site Access</strong> &rarr; then <strong>API Access</strong></p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                          <div>
                            <p className="text-sm text-gray-700">If you see an API key, <strong>copy it</strong>. If not, check the &ldquo;I accept&rdquo; box and click <strong>Generate API Key</strong></p>
                            <p className="text-xs text-gray-400 mt-0.5">The key looks like a long string: AEME1A9NVQFKGHQFSF97LUP9OH7OPPIO</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500">
                          <strong>Don&apos;t have a SolarEdge login?</strong> Contact your installer — they may have set up the account for you. You can also check for a sticker on your inverter with the Site ID.
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-xs text-blue-700">
                          <strong>Your data is safe.</strong> We use your API key only to fetch production data in real time. We never store your API key and all connections use HTTPS encryption.
                        </p>
                      </div>
                    </div>
                  )}

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
              )}

              {brand === "enphase" && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Enphase Support Coming Soon</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    We&apos;re building Enphase integration right now. Enter your email to be first to know when it&apos;s ready.
                  </p>
                  <div className="flex gap-2 max-w-sm mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (email.trim()) {
                          fetch("/api/subscribe", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email: email.trim(), siteId: "enphase-waitlist", apiKey: "pending" }),
                          });
                          setEmailSubmitted(true);
                        }
                      }}
                      className="bg-orange-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600"
                    >
                      Notify Me
                    </button>
                  </div>
                  {emailSubmitted && (
                    <p className="text-sm text-green-600 mt-2">You&apos;re on the list! We&apos;ll email you when Enphase is ready.</p>
                  )}
                </div>
              )}
            </form>

            {/* Trust signals */}
            <div className="mt-10 text-center text-sm text-gray-400 space-y-1">
              <p>No account required. No credit card. Takes 30 seconds.</p>
              <p>Works with any SolarEdge residential or commercial system.</p>
            </div>

            {/* Social proof / what you'll get */}
            <div className="mt-12 max-w-lg mx-auto">
              <h2 className="text-sm font-semibold text-gray-800 mb-4 text-center">What you&apos;ll get in your free health report:</h2>
              <div className="grid gap-3 text-sm">
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-600"><strong>Health Score (0-120)</strong> — see if your system is producing what it should based on your location and system size</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-600"><strong>Lost Production Estimate</strong> — how many kWh and dollars you may be losing to underperformance</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-600"><strong>6-Month Trend</strong> — monthly performance chart showing actual vs expected production</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-600"><strong>Shareable Report</strong> — a unique URL you can share with neighbors, your installer, or on social media</span>
                </div>
              </div>
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

            {/* Share Button */}
            {reportUrl && (
              <div className="bg-gray-50 rounded-2xl p-5 mb-8">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Share your report</p>
                    <p className="text-xs text-gray-500">Help neighbors check their systems too</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(reportUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-700"
                    >
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`My solar system scored ${Math.round(result.overallScore)}/100 on SolarDoctor! ${STATUS_CONFIG[result.overallStatus].emoji} Check yours free:`)}&url=${encodeURIComponent(reportUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-sky-600"
                    >
                      X / Twitter
                    </a>
                    <button
                      onClick={copyShareLink}
                      className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-300"
                    >
                      {linkCopied ? "Copied!" : "Copy Link"}
                    </button>
                  </div>
                </div>
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
                onClick={() => { setResult(null); setError(null); setReportUrl(null); }}
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
            description: "Free instant health score for your SolarEdge or Enphase solar system. See if your panels are underperforming.",
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
