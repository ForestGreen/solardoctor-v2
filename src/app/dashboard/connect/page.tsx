"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function ConnectSystemPage() {
  const router = useRouter();
  const [brand, setBrand] = useState<"solaredge" | "enphase">("solaredge");
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
      const endpoint =
        brand === "solaredge"
          ? "/api/solaredge/validate"
          : "/api/enphase/validate";

      const payload =
        brand === "solaredge"
          ? { siteId: siteId.trim(), apiKey: apiKey.trim() }
          : { systemId: siteId.trim(), accessToken: apiKey.trim() };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.valid) {
        setError(data.error || "Could not connect to your inverter.");
        setStep("credentials");
        return;
      }

      setSystemDetails(data.details);

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
        type: brand,
        site_id: siteId.trim(),
        api_key: apiKey.trim(),
        status: "active",
        system_capacity_kw:
          brand === "solaredge" ? data.details?.peakPower : data.system?.capacity,
        latitude:
          brand === "solaredge"
            ? data.details?.location?.latitude
            : data.system?.latitude,
        longitude:
          brand === "solaredge"
            ? data.details?.location?.longitude
            : data.system?.longitude,
        zip_code:
          brand === "solaredge"
            ? data.details?.location?.zip
            : data.system?.postalCode,
        city:
          brand === "solaredge" ? data.details?.location?.city : data.details?.city,
        state:
          brand === "solaredge" ? data.details?.location?.state : data.details?.state,
        install_date:
          brand === "solaredge" ? data.details?.installationDate : null,
      });

      if (dbError) {
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
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">System Connected!</h2>
        {systemDetails && (
          <div className="bg-green-50 rounded-xl p-4 mb-6 text-left">
            <p className="font-medium text-green-900">
              {systemDetails.name || systemDetails.system_name || systemDetails.system_public_name}
            </p>
            <p className="text-sm text-green-700">
              {(systemDetails.peakPower || systemDetails.system_size / 1000)} kW
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
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-8">
        <Link href="/dashboard" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          &larr; Back to Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Connect Your Solar System</h1>
        <p className="text-gray-500 mb-8">
          Enter your inverter credentials. We&apos;ll use these to pull your production data and calculate your health score.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            type="button"
            onClick={() => setBrand("solaredge")}
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
            onClick={() => setBrand("enphase")}
            className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-colors ${
              brand === "enphase"
                ? "border-orange-500 bg-orange-50 text-orange-700"
                : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
            }`}
          >
            Enphase Beta
          </button>
        </div>

        <form onSubmit={handleValidate} className="space-y-6">
          <div>
            <label htmlFor="siteId" className="block text-sm font-medium text-gray-700 mb-1">
              {brand === "solaredge" ? "SolarEdge Site ID" : "Enphase System ID"}
            </label>
            <input
              id="siteId"
              type="text"
              value={siteId}
              onChange={(e) => setSiteId(e.target.value)}
              placeholder={brand === "solaredge" ? "e.g. 1389112" : "e.g. 9876543"}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900"
            />
            <p className="mt-1 text-xs text-gray-400">
              {brand === "solaredge"
                ? "Found in your SolarEdge monitoring portal under Admin > Site Access"
                : "Use the Enphase system ID associated with the homeowner account"}
            </p>
          </div>

          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
              {brand === "solaredge" ? "SolarEdge API Key" : "Enphase Access Token"}
            </label>
            <input
              id="apiKey"
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={brand === "solaredge" ? "e.g. AEME1A9NVQ..." : "Paste your Enphase access token"}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900"
            />
            <p className="mt-1 text-xs text-gray-400">
              {brand === "solaredge"
                ? "Found in your SolarEdge monitoring portal under Admin > Site Access > API Access"
                : "This beta flow currently requires a valid Enphase access token"}
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
            {step === "validating" ? "Connecting..." : "Connect System"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">How to find your credentials</h3>
          <ol className="text-sm text-gray-500 space-y-2">
            {brand === "solaredge" ? (
              <>
                <li><span className="font-medium text-gray-600">1.</span> Log into monitoring.solaredge.com</li>
                <li><span className="font-medium text-gray-600">2.</span> Open Admin, then Site Access</li>
                <li><span className="font-medium text-gray-600">3.</span> Open API Access and copy the key</li>
                <li><span className="font-medium text-gray-600">4.</span> Paste your Site ID and API key here</li>
              </>
            ) : (
              <>
                <li><span className="font-medium text-gray-600">1.</span> Get a valid Enphase access token from your Enphase workflow</li>
                <li><span className="font-medium text-gray-600">2.</span> Copy the matching Enphase system ID</li>
                <li><span className="font-medium text-gray-600">3.</span> Paste both values here to connect the system</li>
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
