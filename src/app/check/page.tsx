"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/tracking";
import { DEMO_DATA } from "@/lib/demo-data";

type HealthStatus =
  | "overperforming"
  | "healthy"
  | "underperforming"
  | "problem"
  | "critical"
  | "offline"
  | "no_data";
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

const STATUS_CONFIG: Record<
  HealthStatus,
  { color: string; bg: string; label: string; emoji: string }
> = {
  overperforming: { color: "text-blue-700", bg: "bg-blue-50", label: "Overperforming", emoji: "*" },
  healthy: { color: "text-green-700", bg: "bg-green-50", label: "Healthy", emoji: "*" },
  underperforming: { color: "text-yellow-700", bg: "bg-yellow-50", label: "Underperforming", emoji: "*" },
  problem: { color: "text-orange-700", bg: "bg-orange-50", label: "Problem Detected", emoji: "*" },
  critical: { color: "text-red-700", bg: "bg-red-50", label: "Critical", emoji: "*" },
  offline: { color: "text-gray-700", bg: "bg-gray-50", label: "Offline", emoji: "-" },
  no_data: { color: "text-gray-500", bg: "bg-gray-50", label: "No Data", emoji: "-" },
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

  const searchParams = useSearchParams();

  // Handle Enphase OAuth callback redirect
  useEffect(() => {
    const enphaseConnected = searchParams.get("enphase");
    const oauthSystemId = searchParams.get("systemId");
    const oauthError = searchParams.get("error");

    if (oauthError) {
      const errorMessages: Record<string, string> = {
        enphase_denied: "You declined the Enphase authorization. You can try again or use the manual token flow.",
        enphase_failed: "Something went wrong connecting to Enphase. Please try again.",
        enphase_not_configured: "Enphase OAuth is not available yet. Please use the manual token flow.",
        no_enphase_systems: "No Enphase systems were found on your account.",
        missing_code: "The Enphase authorization was incomplete. Please try again.",
        invalid_state: "The authorization session expired. Please try again.",
      };
      setError(errorMessages[oauthError] || "Something went wrong. Please try again.");
      setBrand("enphase");
      return;
    }

    if (enphaseConnected === "connected" && oauthSystemId) {
      setBrand("enphase");
      setLoading(true);
      trackEvent("enphase_oauth_completed", { systemId: oauthSystemId });

      // Fetch health score using the cookie-stored access token
      fetch(`/api/health-score/preview?systemId=${oauthSystemId}`)
        .then(async (res) => {
          if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error || "Failed to fetch health score");
          }
          return res.json();
        })
        .then((data) => {
          setResult(data);
          trackEvent("check_completed", {
            brand: "enphase",
            score: data.overallScore,
            status: data.overallStatus,
            source: "oauth",
          });
        })
        .catch((err) => {
          setError(err.message || "Failed to fetch health score after Enphase connection.");
        })
        .finally(() => setLoading(false));
    }
  }, [searchParams]);

  const credentialLabel = brand === "solaredge" ? "SolarEdge API Key" : "Enphase Access Token";
  const idLabel = brand === "solaredge" ? "SolarEdge Site ID" : "Enphase System ID";

  const scoreColor = useMemo(
    () => (result ? getScoreColor(result.overallScore) : ""),
    [result]
  );

  function switchBrand(nextBrand: InverterBrand) {
    setBrand(nextBrand);
    setError(null);
    setShowWalkthrough(false);
  }

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    setReportUrl(null);

    trackEvent("check_started", {
      brand,
      hasSiteId: !!siteId.trim(),
      hasApiKey: !!apiKey.trim(),
    });

    try {
      const response = await fetch("/api/health-score/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand,
          siteId: siteId.trim(),
          apiKey: apiKey.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch health score");
      }

      setResult(data);
      trackEvent("check_completed", {
        brand,
        score: data.overallScore,
        status: data.overallStatus,
        location: data.location,
      });

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
        // Report saving is optional.
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      trackEvent("check_error", { error: err.message, brand });
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
      trackEvent("alert_signup", { source: "check_results", brand });
    } catch (err: any) {
      setError(err.message || "Failed to set up alerts. Please try again.");
    }
  }

  async function copyShareLink() {
    if (!reportUrl) return;
    try {
      await navigator.clipboard.writeText(reportUrl);
      setLinkCopied(true);
      trackEvent("report_share", {
        method: "copy_link",
        brand,
        score: result?.overallScore,
        status: result?.overallStatus,
      });
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      setLinkCopied(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
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
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Check Your Solar System Health
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Get a plain-English answer on whether your system is protecting your
                savings, how much money may be at risk, and what to do next.
              </p>
            </div>

            {/* Demo showcase — shows what the product does before asking for credentials */}
            {!loading && (
              <div className="mb-10 relative max-w-lg mx-auto">
                <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-6 opacity-90">
                  <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Real system &middot; Honolulu, HI &middot; 7.6 kW</p>
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full flex flex-col items-center justify-center bg-orange-50 border-4 border-orange-200">
                      <span className="text-2xl font-bold text-orange-600">72</span>
                      <span className="text-[10px] text-gray-500">out of 100</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-xs mb-4">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <p className="font-bold text-gray-900">7.6 kW</p>
                      <p className="text-gray-500">System</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-2">
                      <p className="font-bold text-orange-700">-1,441 kWh</p>
                      <p className="text-gray-500">Lost</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-2">
                      <p className="font-bold text-red-700">-$562</p>
                      <p className="text-gray-500">At Risk</p>
                    </div>
                  </div>
                  <div className="flex gap-1 h-8 items-end justify-center">
                    {[99,103,98,95,18,7].map((score, i) => (
                      <div
                        key={i}
                        className={`w-8 rounded-t ${score > 89 ? 'bg-green-400' : score > 49 ? 'bg-yellow-400' : 'bg-red-400'}`}
                        style={{ height: `${Math.max(score * 0.3, 4)}px` }}
                        title={`${['May','Jun','Jul','Aug','Sep','Oct'][i]}: ${score}%`}
                      />
                    ))}
                  </div>
                  <p className="text-center text-[10px] text-gray-400 mt-1">May - Oct 2024 &middot; System went critical in Sept</p>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-6 bg-gradient-to-t from-white via-white/80 to-transparent rounded-2xl">
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent("demo_viewed", { source: "check_hero" });
                      setResult(DEMO_DATA);
                    }}
                    className="bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-700 transition-colors shadow-lg text-sm"
                  >
                    See the full demo report
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleCheck} className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-lg mx-auto">
              {error && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm mb-5">
                  {error}
                </div>
              )}

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What brand is your inverter?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => switchBrand("solaredge")}
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
                    onClick={() => switchBrand("enphase")}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-colors ${
                      brand === "enphase"
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    Enphase
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {brand === "enphase" && (
                  <div className="space-y-3">
                    <a
                      href="/api/enphase/authorize?returnTo=/check"
                      onClick={() => trackEvent("enphase_oauth_started", { source: "check_page" })}
                      className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                      Connect with Enphase Account
                    </a>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                      <div className="relative flex justify-center text-xs"><span className="px-2 bg-gray-50 text-gray-400">or enter credentials manually</span></div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {idLabel}
                  </label>
                  <input
                    type="text"
                    value={siteId}
                    onChange={(e) => setSiteId(e.target.value)}
                    required
                    placeholder={brand === "solaredge" ? "e.g. 1234567" : "e.g. 9876543"}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    {brand === "solaredge"
                      ? "The number in your SolarEdge monitoring URL, or on your inverter label"
                      : "The system ID tied to your Enphase homeowner account"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {credentialLabel}
                  </label>
                  <input
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    required
                    placeholder={brand === "solaredge" ? "e.g. AEME1A9NVQ..." : "Paste your Enphase access token"}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!showWalkthrough) {
                        trackEvent("walkthrough_opened", { brand });
                      }
                      setShowWalkthrough(!showWalkthrough);
                    }}
                    className="text-xs text-green-600 hover:text-green-700 mt-1 underline"
                  >
                    {showWalkthrough ? "Hide instructions" : "Where do I find this?"}
                  </button>
                </div>

                {showWalkthrough && (
                  <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-4">
                    <p className="text-sm font-semibold text-gray-800">
                      {brand === "solaredge"
                        ? "How to find your SolarEdge Site ID & API Key"
                        : "How to use the Enphase beta flow"}
                    </p>
                    <div className="space-y-4 text-sm text-gray-700">
                      {brand === "solaredge" ? (
                        <>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="font-medium text-gray-900 mb-1">Step 1: Find your Site ID</p>
                            <p>Go to <a href="https://monitoring.solaredge.com" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">monitoring.solaredge.com</a> and log in. Your Site ID is the number in the URL after you log in — it looks like <code className="bg-gray-200 px-1 rounded text-xs">1234567</code>.</p>
                            <p className="text-xs text-gray-500 mt-1">Example URL: monitoring.solaredge.com/solaredge-web/p/site/<strong>1234567</strong>/...</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="font-medium text-gray-900 mb-1">Step 2: Get your API Key</p>
                            <p>In the SolarEdge portal, click <strong>Admin</strong> (top menu) &rarr; <strong>Site Access</strong> &rarr; <strong>API Access</strong>.</p>
                            <p className="mt-1">If API Access is enabled, you&apos;ll see your key. If not, check the box to enable it, then copy the key that appears.</p>
                            <p className="text-xs text-gray-500 mt-1">The key looks like: <code className="bg-gray-200 px-1 rounded">AEME1A9NVQ...</code> (about 32 characters)</p>
                          </div>
                          <div className="bg-amber-50 rounded-lg p-3">
                            <p className="font-medium text-amber-900 mb-1">Don&apos;t have portal access?</p>
                            <p className="text-amber-800">If you can&apos;t log into the SolarEdge portal, your installer may not have given you access. You can:</p>
                            <ul className="list-disc ml-4 mt-1 space-y-1 text-amber-800">
                              <li>Ask your installer to enable your portal account</li>
                              <li>Contact SolarEdge support at <a href="https://www.solaredge.com/service/support" target="_blank" rel="noopener noreferrer" className="underline">solaredge.com/support</a></li>
                              <li>Check your installation paperwork — some installers include the Site ID</li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="font-medium text-gray-900 mb-1">Step 1: Get your Enphase access token</p>
                            <p>You&apos;ll need an active Enphase API access token from your developer or homeowner account workflow.</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="font-medium text-gray-900 mb-1">Step 2: Find your System ID</p>
                            <p>Your System ID is visible in the Enlighten app or at <a href="https://enlighten.enphaseenergy.com" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">enlighten.enphaseenergy.com</a>.</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3 text-blue-800">
                            <p className="font-medium mb-1">Enphase OAuth coming soon</p>
                            <p className="text-xs">We&apos;re working on a simpler flow where you just log in with your Enphase account — no tokens needed. For now, the beta requires a developer access token.</p>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-700">
                      <strong>Your data is stored to power ongoing monitoring.</strong> We keep your credential on file so we can run future checks and alerts for you.
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition-colors"
                >
                  {loading ? "Analyzing your system..." : "Get My Health Score"}
                </button>

              </div>
            </form>

            <div className="mt-10 text-center text-sm text-gray-400 space-y-1">
              <p>No account required. No credit card. Takes about 2 minutes.</p>
              <p>Works with SolarEdge now and Enphase beta with access token.</p>
            </div>

            <div className="mt-12 max-w-lg mx-auto">
              <h2 className="text-sm font-semibold text-gray-800 mb-4 text-center">What you&apos;ll get in your free health report:</h2>
              <div className="grid gap-3 text-sm">
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-600"><strong>Health Score</strong> - see if your system is producing what it should based on location and system size</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-600"><strong>Estimated Dollars At Risk</strong> - how much hidden underperformance may be costing you</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-600"><strong>What To Do Next</strong> - whether to keep monitoring, contact your installer, or share the report</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-600"><strong>Shareable Report</strong> - a unique URL you can send to your installer, compare with a neighbor, or save for a warranty claim</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500 mb-2">{result.systemName} &middot; {result.location}</p>
              <p className="text-sm text-gray-400">{result.systemCapacityKw} kW system &middot; {Math.round(result.lifetimeKwh).toLocaleString()} kWh lifetime</p>
            </div>

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

            <div className="grid gap-4 sm:grid-cols-3 mb-8">
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

            <div className="bg-amber-50 rounded-2xl p-5 mb-8">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">What to do next</h3>
              <div className="space-y-2 text-sm text-amber-900">
                <p>
                  {result.overallScore >= 90
                    ? "Your system looks healthy. Save this report and set alerts so you know if that changes."
                    : "Your score suggests underperformance. Save this report and send it to your installer or service provider."}
                </p>
                <p>
                  {result.estimatedLostDollars > 0
                    ? `Current estimate: about $${Math.round(result.estimatedLostDollars).toLocaleString()} in savings may be at risk.`
                    : "No meaningful savings loss is showing right now, which is a good sign."}
                </p>
              </div>
            </div>

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
                          <div className="absolute top-0 h-full w-0.5 bg-gray-400" style={{ left: "83.3%" }} title="Expected (100%)" />
                        </div>
                        <span className={`w-12 text-right text-xs font-medium ${cfg.color}`}>
                          {Math.round(m.score)}%
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Bar shows actual vs expected production. Gray line = 100% expected.
                </p>
              </div>
            )}

            {reportUrl && (
              <div className="bg-gray-50 rounded-2xl p-5 mb-8">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Share your report</p>
                    <p className="text-xs text-gray-500">Show your installer what to fix, or help a neighbor check their own system</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(reportUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("report_share", { method: "facebook", brand, score: result.overallScore, status: result.overallStatus })}
                      className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-700"
                    >
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`My solar system scored ${Math.round(result.overallScore)}/100 on SolarDoctor! ${STATUS_CONFIG[result.overallStatus].emoji} Check yours free:`)}&url=${encodeURIComponent(reportUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("report_share", { method: "x", brand, score: result.overallScore, status: result.overallStatus })}
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

            {!showEmailCapture && !emailSubmitted && (
              <div className="bg-green-50 rounded-2xl p-6 sm:p-8 text-center mb-8">
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  Want weekly updates on your system&apos;s health?
                </h3>
                <p className="text-sm text-green-700 mb-4">
                  We&apos;ll email you a one-line health report every week and alert you immediately if your score drops.
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

            {/* Account bridge CTA */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 text-center mb-8">
              <h3 className="text-lg font-bold text-brand-900 mb-2">
                Want ongoing monitoring?
              </h3>
              <p className="text-sm text-brand-700 mb-4">
                Create a free account and we&apos;ll save this system so you get automatic health checks and alerts.
              </p>
              <Link
                href="/auth"
                onClick={() => {
                  // Save credentials to sessionStorage for pre-fill on dashboard/connect
                  if (typeof window !== "undefined") {
                    sessionStorage.setItem("sd_prefill", JSON.stringify({ brand, siteId, apiKey }));
                  }
                  trackEvent("account_bridge_click", { source: "check_results", brand, score: result.overallScore });
                }}
                className="inline-flex items-center px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 font-medium transition-colors"
              >
                Create Free Account
              </Link>
            </div>

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

