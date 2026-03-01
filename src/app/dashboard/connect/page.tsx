"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function ConnectSystemPage() {
  const router = useRouter();
  const [step, setStep] = useState<"credentials" | "validating" | "success">(
    "credentials"
  );
  const [siteId, setSiteId] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [systemDetails, setSystemDetails] = useState<any>(null);

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStep("validating");

    try {
      // Validate credentials via API
      const res = await fetch("/api/solaredge/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteId: siteId.trim(), apiKey: apiKey.trim() }),
      });

      const data = await res.json();

      if (!res.ok || !data.valid) {
        setError(
          data.error || "Could not connect to SolarEdge. Please check your credentials."
        );
        setStep("credentials");
        return;
      }

      setSystemDetails(data.details);

      // Save to database
      const supabase = createBrowserSupabaseClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("You must be logged in");
        setStep("credentials");
        return;
      }

      const { error: dbError } = await supabase.from("solar_systems").insert({
        user_id: user.id,
        type: "solaredge",
        site_id: siteId.trim(),
        api_key: apiKey.trim(),
        status: "active",
        system_capacity_kw: data.details?.peakPower,
        latitude: data.details?.location?.latitude,
        longitude: data.details?.location?.longitude,
        zip_code: data.details?.location?.zip,
        city: data.details?.location?.city,
        state: data.details?.location?.state,
        install_date: data.details?.installationDate,
      });

      if (dbError) {
        // Check for duplicate
        if (dbError.code === "23505") {
          setError("This system is already connected to your account.");
        } else {
          setError("Failed to save system. Please try again.");
        }
        setStep("credentials");
        return;
      }

      setStep("success");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setStep("credentials");
    }
  };

  if (step === "success") {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">System Connected!</h2>
        {systemDetails && (
          <div className="bg-green-50 rounded-xl p-4 mb-6 text-left">
            <p className="font-medium text-green-900">{systemDetails.name}</p>
            <p className="text-sm text-green-700">
              {systemDetails.peakPower} kW &middot;{" "}
              {systemDetails.location?.city}, {systemDetails.location?.state}
            </p>
            <p className="text-sm text-green-600 mt-1">
              Installed {systemDetails.installationDate}
            </p>
          </div>
        )}
        <p className="text-gray-500 mb-6">
          We&apos;re now calculating your health score. This compares your actual
          production against what your system should produce based on its size
          and location.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
        >
          View Your Health Score
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          &larr; Back to Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Connect Your Solar System
        </h1>
        <p className="text-gray-500 mb-8">
          Enter your SolarEdge monitoring credentials. We&apos;ll use these to
          pull your production data and calculate your health score.
        </p>

        <form onSubmit={handleValidate} className="space-y-6">
          {/* Site ID */}
          <div>
            <label
              htmlFor="siteId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              SolarEdge Site ID
            </label>
            <input
              id="siteId"
              type="text"
              value={siteId}
              onChange={(e) => setSiteId(e.target.value)}
              placeholder="e.g. 1389112"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900"
            />
            <p className="mt-1 text-xs text-gray-400">
              Found in your SolarEdge monitoring portal under Admin &rarr; Site
              Access
            </p>
          </div>

          {/* API Key */}
          <div>
            <label
              htmlFor="apiKey"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              SolarEdge API Key
            </label>
            <input
              id="apiKey"
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="e.g. AEME1A9NVQ..."
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900"
            />
            <p className="mt-1 text-xs text-gray-400">
              Found in your SolarEdge monitoring portal under Admin &rarr; Site
              Access &rarr; API Access
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-700 rounded-lg p-4 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={step === "validating"}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === "validating" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Connecting...
              </span>
            ) : (
              "Connect System"
            )}
          </button>
        </form>

        {/* Help section */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            How to find your credentials
          </h3>
          <ol className="text-sm text-gray-500 space-y-2">
            <li>
              <span className="font-medium text-gray-600">1.</span> Log into{" "}
              <a
                href="https://monitoring.solaredge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 underline"
              >
                monitoring.solaredge.com
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-600">2.</span> Click Admin
              (gear icon) in the left sidebar
            </li>
            <li>
              <span className="font-medium text-gray-600">3.</span> Click
              &quot;Site Access&quot; tab
            </li>
            <li>
              <span className="font-medium text-gray-600">4.</span> Your Site ID
              is shown at the top. The API Key is under &quot;API Access&quot;
              section.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
