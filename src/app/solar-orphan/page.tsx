import Link from "next/link";
import type { Metadata } from "next";
import { Sun, Shield, AlertTriangle, ChevronRight } from "lucide-react";
import { installers } from "@/lib/solar-orphan-data";

export const metadata: Metadata = {
  title: "Solar Installer Went Out of Business? Here's What to Do - SolarDoctor",
  description:
    "Your solar installer closed or went bankrupt. Your panels still work. Here's how to protect your investment, check your system health, and find help — free.",
  openGraph: {
    title: "Solar Installer Went Out of Business? Here's What to Do",
    description:
      "Over 100 solar installers went bankrupt in 2024 alone. If you're a solar orphan, here's your step-by-step guide to protecting your investment.",
    url: "https://www.getsolardoctor.com/solar-orphan",
    type: "website",
  },
  alternates: {
    canonical: "https://www.getsolardoctor.com/solar-orphan",
  },
};

export default function SolarOrphanPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-solar-yellow" />
            <span className="text-lg font-bold text-green-700">SolarDoctor</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
            <Link href="/check" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Free Health Check
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="h-4 w-4" />
            100+ installer bankruptcies in 2024
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Solar Installer Went Out of Business.
            <br />
            <span className="text-brand-600">Your Panels Still Work.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over 100 solar companies went bankrupt in 2024 alone, leaving hundreds of thousands
            of homeowners without warranty support or monitoring. Here&apos;s what you need to know — and what to do right now.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="bg-amber-50 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-amber-900 mb-3">The Good News First</h2>
          <div className="space-y-3 text-sm text-amber-900">
            <div className="flex gap-3">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p><strong>Your panels still produce electricity.</strong> Solar panels have no moving parts and typically last 25-30 years regardless of who installed them.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p><strong>Your manufacturer warranty survives.</strong> Panel warranties (25 years) and inverter warranties (12-25 years) are with the manufacturer, not your installer.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p><strong>Your utility agreement is unaffected.</strong> Net metering, feed-in tariffs, and your utility connection don&apos;t depend on your installer.</p>
            </div>
          </div>
        </div>

        {/* What You Lost */}
        <div className="bg-red-50 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-red-900 mb-3">What You Did Lose</h2>
          <div className="space-y-3 text-sm text-red-900">
            <div className="flex gap-3">
              <span className="text-red-500 font-bold mt-0.5">&times;</span>
              <p><strong>Workmanship warranty</strong> — covers installation defects like roof leaks, wiring issues, or improper mounting. Usually 10 years.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-500 font-bold mt-0.5">&times;</span>
              <p><strong>Monitoring & alerts</strong> — if your installer was watching your system, no one is watching it now. Problems can go unnoticed for months.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-500 font-bold mt-0.5">&times;</span>
              <p><strong>Service relationship</strong> — no one to call when something goes wrong or when you need maintenance.</p>
            </div>
          </div>
        </div>

        {/* 5 Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5 Steps Every Solar Orphan Should Take</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Check if your system is producing", desc: "Run a free SolarDoctor health check to compare your actual production against what your system should be generating based on its size and location." },
              { num: "2", title: "Find your warranty documents", desc: "Locate your panel manufacturer warranty (check the panel labels for the brand) and inverter warranty. These are still valid and are your most important documents." },
              { num: "3", title: "Get a physical inspection", desc: "Hire a local licensed solar installer to inspect your roof penetrations, wiring, and mounting hardware. Budget $150-400. This catches the issues your workmanship warranty would have covered." },
              { num: "4", title: "Set up independent monitoring", desc: "Don't rely on anyone else to watch your system. SolarDoctor gives you free health scores and email alerts when your system underperforms." },
              { num: "5", title: "Keep paying attention", desc: "The biggest risk for solar orphans is \"set it and forget it\" — months of lost production that you don't notice until your electric bill spikes." },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-600 rounded-2xl p-8 text-center mb-12">
          <Shield className="h-10 w-10 text-white mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Start protecting your investment — free
          </h2>
          <p className="text-brand-100 mb-6">
            Run a health check in 2 minutes. See if your system is producing what it should.
          </p>
          <Link
            href="/check"
            className="inline-flex items-center bg-white text-brand-700 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            Run Free Health Check
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Installer-Specific Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Your Installer</h2>
          <p className="text-gray-600 mb-6">
            Select your installer below for specific guidance on what warranties you still have and what steps to take.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {installers.map((installer) => (
              <Link
                key={installer.slug}
                href={`/solar-orphan/${installer.slug}`}
                className="border border-gray-200 rounded-xl p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-brand-700">{installer.name}</h3>
                    <p className="text-xs text-red-600 font-medium mt-0.5">{installer.status} ({installer.year})</p>
                    <p className="text-xs text-gray-500 mt-1">{installer.estimatedCustomers} customers affected</p>
                    <p className="text-xs text-gray-400 mt-0.5">{installer.statesAffected.join(", ")}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-brand-600 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* More Installers Coming */}
        <div className="text-center text-sm text-gray-400 mb-12">
          <p>Don&apos;t see your installer? <Link href="/check" className="text-brand-600 hover:text-brand-700 underline">Run a free health check</Link> — it works regardless of who installed your system.</p>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What happens to my solar panels if my installer goes out of business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your solar panels continue to work and generate electricity. Panel manufacturer warranties (typically 25 years) and inverter warranties (12-25 years) survive installer bankruptcies. You lose your workmanship warranty and monitoring services.",
                },
              },
              {
                "@type": "Question",
                name: "Is my solar warranty still valid if my installer went bankrupt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your equipment manufacturer warranties (panel and inverter) are still valid — they're with the manufacturer, not your installer. Your workmanship warranty (covering installation quality) is likely voided by the bankruptcy.",
                },
              },
              {
                "@type": "Question",
                name: "How do I monitor my solar system without my installer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use your inverter manufacturer's app (SolarEdge Monitoring or Enphase Enlighten), or use a free independent tool like SolarDoctor that compares your actual production to expected output and sends you alerts when something is wrong.",
                },
              },
            ],
          }),
        }}
      />

      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-solar-yellow" />
            <span className="text-white font-bold">SolarDoctor</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/inverters" className="hover:text-white transition-colors">Inverter Guides</Link>
            <Link href="/check" className="hover:text-white transition-colors">Free Health Score</Link>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} SolarDoctor</div>
        </div>
      </footer>
    </div>
  );
}
