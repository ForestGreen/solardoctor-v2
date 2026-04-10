"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SiteFooter } from "@/components/SiteFooter";

// Average peak sun hours by US region (hours/day annual average)
const REGIONS: Record<string, { label: string; sunHours: number; states: string }> = {
  southwest: { label: "Southwest (AZ, NV, NM, UT)", sunHours: 6.5, states: "Arizona, Nevada, New Mexico, Utah" },
  california: { label: "California", sunHours: 5.8, states: "California" },
  southeast: { label: "Southeast (FL, GA, SC, NC, TX)", sunHours: 5.2, states: "Florida, Georgia, South Carolina, North Carolina, Texas" },
  hawaii: { label: "Hawaii", sunHours: 5.5, states: "Hawaii" },
  midwest: { label: "Midwest (OH, IL, IN, MI, MO)", sunHours: 4.2, states: "Ohio, Illinois, Indiana, Michigan, Missouri" },
  midatlantic: { label: "Mid-Atlantic (NY, NJ, PA, MD, VA)", sunHours: 4.5, states: "New York, New Jersey, Pennsylvania, Maryland, Virginia" },
  newengland: { label: "New England (MA, CT, VT, NH, ME)", sunHours: 4.0, states: "Massachusetts, Connecticut, Vermont, New Hampshire, Maine" },
  northwest: { label: "Pacific Northwest (OR, WA)", sunHours: 3.8, states: "Oregon, Washington" },
  mountain: { label: "Mountain (CO, ID, MT, WY)", sunHours: 5.0, states: "Colorado, Idaho, Montana, Wyoming" },
};

// Monthly production distribution (fraction of annual total)
const MONTHLY_DIST = [0.055, 0.065, 0.085, 0.095, 0.105, 0.110, 0.110, 0.105, 0.090, 0.080, 0.055, 0.045];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function SolarProductionCalculator() {
  const [region, setRegion] = useState("southeast");
  const [systemSize, setSystemSize] = useState("7");
  const [systemAge, setSystemAge] = useState("0");

  const size = parseFloat(systemSize) || 0;
  const age = parseInt(systemAge) || 0;
  const sunHours = REGIONS[region]?.sunHours || 5.0;

  // Calculate expected production
  const degradation = Math.pow(0.995, age); // 0.5% per year
  const systemLoss = 0.86; // 14% typical system losses
  const dailyKwh = size * sunHours * systemLoss * degradation;
  const annualKwh = Math.round(dailyKwh * 365);
  const monthlyKwh = MONTHLY_DIST.map(f => Math.round(annualKwh * f));
  const monthlyAvg = Math.round(annualKwh / 12);

  // Cost estimates
  const avgRate = 0.16; // National average
  const annualSavings = Math.round(annualKwh * avgRate);
  const lost10 = Math.round(annualKwh * 0.10 * avgRate);
  const lost25 = Math.round(annualKwh * 0.25 * avgRate);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{label: "Home", href: "/"}, {label: "Guides", href: "/blog"}, {label: "Production Calculator"}]} />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How Much Should My Solar Panels Produce?
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Enter your system size and location to see how much electricity your solar panels should generate each month. Then compare it to your actual production to see if something is wrong.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          By Rich, SolarDoctor founder &middot; 20 years in solar energy
        </p>

        {/* Calculator */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Region
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white"
              >
                {Object.entries(REGIONS).map(([key, { label }]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                System Size (kW)
              </label>
              <input
                type="number"
                value={systemSize}
                onChange={(e) => setSystemSize(e.target.value)}
                min="1"
                max="50"
                step="0.1"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
                placeholder="e.g. 7.6"
              />
              <p className="text-xs text-gray-400 mt-1">Average US home: 6-10 kW</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                System Age (years)
              </label>
              <input
                type="number"
                value={systemAge}
                onChange={(e) => setSystemAge(e.target.value)}
                min="0"
                max="30"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
                placeholder="e.g. 3"
              />
              <p className="text-xs text-gray-400 mt-1">Panels degrade ~0.5%/year</p>
            </div>
          </div>
        </div>

        {/* Results */}
        {size > 0 && (
          <>
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              <div className="bg-green-50 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-green-700">{annualKwh.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1">kWh per year</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-blue-700">{monthlyAvg.toLocaleString()}</p>
                <p className="text-sm text-blue-600 mt-1">kWh avg per month</p>
              </div>
              <div className="bg-brand-50 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-brand-700">${annualSavings.toLocaleString()}</p>
                <p className="text-sm text-brand-600 mt-1">annual savings (est.)</p>
              </div>
            </div>

            {/* Monthly breakdown chart */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Expected Monthly Production</h2>
              <div className="flex items-end justify-between gap-1 h-40">
                {monthlyKwh.map((kwh, i) => {
                  const maxKwh = Math.max(...monthlyKwh);
                  const height = maxKwh > 0 ? (kwh / maxKwh) * 100 : 0;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-xs text-gray-500 font-medium">{kwh}</span>
                      <div
                        className="w-full bg-green-400 rounded-t"
                        style={{ height: `${Math.max(height, 4)}%` }}
                      />
                      <span className="text-xs text-gray-400">{MONTH_NAMES[i]}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Based on {sunHours} peak sun hours/day for {REGIONS[region]?.label}. Assumes south-facing panels, 14% system losses{age > 0 ? `, ${(100 - degradation * 100).toFixed(1)}% degradation` : ""}.
              </p>
            </div>

            {/* What if underperforming */}
            <div className="bg-amber-50 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-amber-900 mb-3">What If Your System Is Underperforming?</h2>
              <div className="grid gap-3 sm:grid-cols-2 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-amber-800"><strong>10% underperformance</strong></p>
                  <p className="text-amber-700">You&apos;d lose ~{Math.round(annualKwh * 0.1).toLocaleString()} kWh/year</p>
                  <p className="text-amber-600 font-semibold">= ~${lost10}/year in lost savings</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-orange-800"><strong>25% underperformance</strong></p>
                  <p className="text-orange-700">You&apos;d lose ~{Math.round(annualKwh * 0.25).toLocaleString()} kWh/year</p>
                  <p className="text-orange-600 font-semibold">= ~${lost25}/year in lost savings</p>
                </div>
              </div>
              <p className="text-xs text-amber-700 mt-3">
                Studies suggest unmonitored systems can operate at 70-80% efficiency for extended periods before detection.
                That&apos;s ${Math.round(annualKwh * 0.25 * avgRate)}-${Math.round(annualKwh * 0.30 * avgRate)} lost every year you don&apos;t check.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-brand-600 rounded-2xl p-8 text-center mb-10">
              <h2 className="text-xl font-bold text-white mb-2">
                Is your system actually producing {annualKwh.toLocaleString()} kWh?
              </h2>
              <p className="text-brand-100 mb-6">
                Run a free health check to compare your actual production against this estimate.
                Takes 2 minutes. No account required.
              </p>
              <Link
                href="/check"
                className="inline-flex items-center bg-white text-brand-700 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
              >
                Check My System Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </>
        )}

        {/* SEO content */}
        <div className="prose prose-gray max-w-none">
          <h2>How We Calculate Expected Solar Production</h2>
          <p>
            This calculator uses the same methodology as the National Renewable Energy Laboratory&apos;s
            PVWatts tool, simplified for homeowners. We multiply your system size (kW) by your
            region&apos;s average peak sun hours, then apply a 14% system loss factor (the industry
            standard accounting for wiring, inverter efficiency, and temperature effects).
          </p>
          <p>
            For systems older than one year, we apply a 0.5% annual degradation factor. This is
            the industry-accepted rate — most tier-1 panels guarantee at least 80% output after
            25 years, which works out to about 0.5% per year.
          </p>

          <h2>Why Your Actual Production May Differ</h2>
          <p>This calculator provides a baseline estimate. Your actual production depends on:</p>
          <ul>
            <li><strong>Panel orientation:</strong> South-facing panels produce the most. East or west-facing systems produce 10-20% less.</li>
            <li><strong>Tilt angle:</strong> Panels tilted at your latitude produce the most annually. Flat or steep roofs reduce output.</li>
            <li><strong>Shading:</strong> Even partial shading from trees, chimneys, or neighboring buildings can reduce output by 10-40%.</li>
            <li><strong>Weather:</strong> Unusually cloudy years will produce less. This calculator uses long-term averages.</li>
            <li><strong>Equipment quality:</strong> Premium panels (SunPower, LG, REC) typically outperform budget panels.</li>
          </ul>

          <h2>How to Check Your Actual Production</h2>
          <p>
            Log into your SolarEdge or Enphase monitoring app and look at your monthly kWh totals.
            Compare them to the estimates above. If your actual production is consistently 15% or
            more below the estimate, something may be wrong with your system.
          </p>
          <p>
            <Link href="/check" className="text-green-700 font-semibold">
              Run a free SolarDoctor health check
            </Link>{" "}
            to get an exact comparison of your actual vs. expected production based on your specific
            system size, location, and local weather data.
          </p>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Solar Panel Production Calculator",
            description: "Free calculator to estimate how much electricity your solar panels should produce based on system size, location, and age. Compare to actual production to detect problems.",
            url: "https://www.getsolardoctor.com/tools/solar-production-calculator",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            author: { "@type": "Person", name: "Rich", jobTitle: "Founder & Solar Energy Expert" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much should my solar panels produce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A typical residential solar system produces about 1,200-1,800 kWh per kW of capacity per year, depending on location. A 7 kW system in the Southeast US should produce approximately 9,500-10,500 kWh per year.",
                },
              },
              {
                "@type": "Question",
                name: "How do I know if my solar panels are underperforming?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Compare your actual monthly production (from your SolarEdge or Enphase app) to the expected output for your system size and location. If you're consistently 15% or more below expectations, your system may have an issue. Use a free tool like SolarDoctor to get an exact comparison.",
                },
              },
            ],
          }),
        }}
      />

      <SiteFooter />
    </div>
  );
}
