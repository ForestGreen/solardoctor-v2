"use client";

import Link from "next/link";
import { useState } from "react";

// Average solar irradiance by US region (kWh/kW/year from PVWatts typical values)
const REGION_DATA: Record<string, { label: string; irradiance: number; avgRate: number }> = {
  southwest: { label: "Southwest (AZ, NV, NM, UT)", irradiance: 1750, avgRate: 0.14 },
  california: { label: "California", irradiance: 1650, avgRate: 0.30 },
  southeast: { label: "Southeast (FL, GA, SC, NC, TX)", irradiance: 1500, avgRate: 0.13 },
  midwest: { label: "Midwest (OH, MI, IN, IL, MO)", irradiance: 1300, avgRate: 0.15 },
  northeast: { label: "Northeast (NY, NJ, PA, MA, CT)", irradiance: 1250, avgRate: 0.22 },
  northwest: { label: "Northwest (WA, OR, ID, MT)", irradiance: 1200, avgRate: 0.11 },
  hawaii: { label: "Hawaii", irradiance: 1700, avgRate: 0.43 },
};

// Year 1 degradation is typically 2%, then 0.5%/year after
function calcAnnualProduction(systemSizeKw: number, irradiance: number, age: number): number {
  const year1Loss = 0.02;
  const annualLoss = 0.005;
  const degradation = age <= 1 ? (1 - year1Loss) : (1 - year1Loss) * Math.pow(1 - annualLoss, age - 1);
  return systemSizeKw * irradiance * degradation * 0.86; // 86% system efficiency (inverter, wiring, soiling)
}

export default function SolarSavingsCalculator() {
  const [region, setRegion] = useState("southeast");
  const [systemSize, setSystemSize] = useState(8);
  const [systemAge, setSystemAge] = useState(3);
  const [utilityRate, setUtilityRate] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const regionInfo = REGION_DATA[region];
  const effectiveRate = utilityRate !== null ? utilityRate : regionInfo.avgRate;

  // Calculate results
  const expectedAnnual = calcAnnualProduction(systemSize, regionInfo.irradiance, systemAge);
  const expectedMonthly = expectedAnnual / 12;
  const annualSavings = expectedAnnual * effectiveRate;
  const monthlySavings = annualSavings / 12;

  // Underperformance scenarios
  const lostAt10Pct = annualSavings * 0.10;
  const lostAt25Pct = annualSavings * 0.25;
  const lostAt50Pct = annualSavings * 0.50;

  // 25-year cumulative with degradation
  let cumulative25yr = 0;
  for (let y = 1; y <= 25; y++) {
    cumulative25yr += calcAnnualProduction(systemSize, regionInfo.irradiance, y) * effectiveRate;
  }

  function handleCalculate() {
    setShowResults(true);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-bold text-green-700">
            SolarDoctor
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
            <Link href="/auth" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Free Health Score
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Solar Savings Calculator
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Find out how much electricity your solar system should produce, what that&apos;s worth in savings, and how much underperformance could be costing you.
        </p>

        {/* Calculator Form */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Region */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Region</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {Object.entries(REGION_DATA).map(([key, val]) => (
                  <option key={key} value={key}>{val.label}</option>
                ))}
              </select>
            </div>

            {/* System Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                System Size (kW)
              </label>
              <input
                type="number"
                min="1"
                max="50"
                step="0.5"
                value={systemSize}
                onChange={(e) => setSystemSize(parseFloat(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g. 8"
              />
              <p className="text-xs text-gray-400 mt-1">Average US home: 6-10 kW</p>
            </div>

            {/* System Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                System Age (years)
              </label>
              <input
                type="number"
                min="0"
                max="30"
                step="1"
                value={systemAge}
                onChange={(e) => setSystemAge(parseInt(e.target.value) || 0)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g. 3"
              />
            </div>

            {/* Utility Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Electricity Rate ($/kWh)
              </label>
              <input
                type="number"
                min="0.01"
                max="1.00"
                step="0.01"
                value={utilityRate !== null ? utilityRate : ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setUtilityRate(val ? parseFloat(val) : null);
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder={`Regional avg: $${regionInfo.avgRate.toFixed(2)}`}
              />
              <p className="text-xs text-gray-400 mt-1">
                Leave blank to use ${regionInfo.avgRate.toFixed(2)}/kWh regional average
              </p>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="mt-6 w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Calculate My Savings
          </button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-8">
            {/* Expected Production */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Expected Production</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="bg-green-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-green-700">{Math.round(expectedMonthly).toLocaleString()}</p>
                  <p className="text-sm text-green-600 mt-1">kWh / month</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-green-700">{Math.round(expectedAnnual).toLocaleString()}</p>
                  <p className="text-sm text-green-600 mt-1">kWh / year</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-green-700">${Math.round(annualSavings).toLocaleString()}</p>
                  <p className="text-sm text-green-600 mt-1">savings / year</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Based on {systemSize}kW system, {systemAge} years old, in {regionInfo.label} at ${effectiveRate.toFixed(2)}/kWh. Includes panel degradation and system losses.
              </p>
            </div>

            {/* What Underperformance Costs */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">What Underperformance Costs You</h2>
              <p className="text-sm text-gray-600 mb-4">
                Most homeowners don&apos;t know their system is underperforming until they see a higher electric bill months later. Here&apos;s what hidden problems cost:
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-5 text-center">
                  <p className="text-xs font-medium text-yellow-700 mb-1">10% underperformance</p>
                  <p className="text-2xl font-bold text-yellow-800">${Math.round(lostAt10Pct)}/yr</p>
                  <p className="text-xs text-yellow-600 mt-1">dirty panels, minor shading</p>
                </div>
                <div className="border border-orange-200 bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-xs font-medium text-orange-700 mb-1">25% underperformance</p>
                  <p className="text-2xl font-bold text-orange-800">${Math.round(lostAt25Pct)}/yr</p>
                  <p className="text-xs text-orange-600 mt-1">failed optimizer, inverter errors</p>
                </div>
                <div className="border border-red-200 bg-red-50 rounded-xl p-5 text-center">
                  <p className="text-xs font-medium text-red-700 mb-1">50% underperformance</p>
                  <p className="text-2xl font-bold text-red-800">${Math.round(lostAt50Pct)}/yr</p>
                  <p className="text-xs text-red-600 mt-1">inverter failure, string down</p>
                </div>
              </div>
            </div>

            {/* 25-Year Projection */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">25-Year Lifetime Value</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">Accounting for normal panel degradation (~0.5%/year), your system should generate:</p>
                <p className="text-4xl font-bold text-gray-900">${Math.round(cumulative25yr).toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-1">in total electricity savings over 25 years</p>
                <p className="text-sm text-gray-600 mt-4">
                  Even 10% undetected underperformance means losing <strong>${Math.round(cumulative25yr * 0.10).toLocaleString()}</strong> over the system&apos;s lifetime. This is why monitoring matters.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                Is your system actually producing what it should?
              </h3>
              <p className="text-green-700 mb-6">
                SolarDoctor compares your real production data against these expectations and alerts you when something&apos;s off. Free setup, no credit card.
              </p>
              <Link
                href="/auth"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
              >
                Get Your Free Health Score &rarr;
              </Link>
            </div>

            {/* SEO Content */}
            <div className="prose prose-gray max-w-none mt-8">
              <h2 className="text-xl font-bold text-gray-900">How This Calculator Works</h2>
              <p>This calculator estimates your solar system&apos;s expected electricity production and financial savings based on regional solar irradiance data from the National Renewable Energy Laboratory (NREL), your system size, age-related panel degradation, and your local utility rate.</p>
              <p>Panel degradation follows industry-standard curves: approximately 2% in the first year, then 0.5% per year thereafter. System efficiency accounts for inverter conversion losses, wiring losses, and typical soiling at 86% overall.</p>
              <p>The underperformance scenarios show real costs of common solar problems — from dirty panels (10% loss) to a failed string inverter or multiple dead microinverters (50% loss). Many homeowners don&apos;t discover these issues for months because they don&apos;t have independent monitoring.</p>

              <h2 className="text-xl font-bold text-gray-900 mt-8">Common Causes of Solar Underperformance</h2>
              <p>Soiling and debris account for 5-15% production losses in many regions. Inverter faults — like <Link href="/blog/solaredge-isolation-fault" className="text-green-600 hover:text-green-700">SolarEdge isolation faults</Link> or <Link href="/blog/enphase-microinverter-not-reporting" className="text-green-600 hover:text-green-700">Enphase microinverters not reporting</Link> — can cause partial or complete system shutdowns that go unnoticed.</p>
              <p>Tree growth and new construction can introduce shading that didn&apos;t exist when your system was installed. And as systems age, individual components like optimizers and microinverters can fail silently.</p>
            </div>
          </div>
        )}
      </div>

      {/* Calculator Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Solar Savings Calculator",
            description: "Calculate how much electricity your solar system should produce and what underperformance is costing you.",
            url: "https://www.getsolardoctor.com/tools/solar-savings-calculator",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </div>
  );
}
