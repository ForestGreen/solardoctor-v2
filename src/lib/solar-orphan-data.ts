export interface InstallerData {
  slug: string;
  name: string;
  status: string;
  year: number;
  statesAffected: string[];
  estimatedCustomers: string;
  headline: string;
  summary: string;
  whatHappened: string;
  whatStillWorks: string;
  whatYouLost: string;
  steps: string[];
  blogSlug?: string;
}

export const installers: InstallerData[] = [
  {
    slug: "titan-solar-power",
    name: "Titan Solar Power",
    status: "Bankrupt (Chapter 7)",
    year: 2024,
    statesAffected: ["AZ", "CA", "CO", "FL", "NV", "TX", "UT"],
    estimatedCustomers: "150,000+",
    headline: "Titan Solar Power Went Out of Business — Here's What to Do",
    summary: "Titan Solar Power filed for Chapter 7 bankruptcy in 2024, affecting over 150,000 customers across 7 states. Your system still works, but your workmanship warranty and monitoring relationship are gone.",
    whatHappened: "Titan Solar Power was one of the largest residential solar installers in the US before filing for Chapter 7 liquidation in 2024. Unlike Chapter 11 (restructuring), Chapter 7 means the company is permanently closing. No one is coming back to honor warranties or service calls.",
    whatStillWorks: "Your solar panels and inverter are still covered by the manufacturer's equipment warranty (typically 25 years for panels, 12-25 years for inverters). This warranty is with the manufacturer (like SunPower, LG, SolarEdge, Enphase) — not with Titan. Your equipment doesn't care who installed it.",
    whatYouLost: "Your 10-year workmanship warranty covered installation defects — things like roof leaks, wiring issues, or improperly mounted panels. That warranty died with Titan. You also lost your monitoring relationship — Titan was supposed to be watching your system for issues.",
    steps: [
      "Check if your system is still producing. Log into your SolarEdge or Enphase app, or run a free SolarDoctor health check to see if your panels are performing as expected.",
      "Find your equipment warranty documents. Your panel manufacturer warranty (usually 25 years) is still valid. Look for your original contract or the manufacturer's website to confirm coverage.",
      "Get a local solar company to do a physical inspection. Have them check roof penetrations, wiring, and mounting. Budget $150-300 for a full inspection.",
      "Set up independent monitoring. Don't rely on anyone else to watch your investment. SolarDoctor gives you a free health score and alerts when something goes wrong.",
      "Document everything. Save your original Titan contract, any correspondence, and your system specs. You may need these for manufacturer warranty claims.",
    ],
    blogSlug: "titan-solar-power-system-problems",
  },
  {
    slug: "sunpower-maxeon",
    name: "SunPower / Maxeon",
    status: "Bankruptcy (Chapter 11)",
    year: 2024,
    statesAffected: ["CA", "AZ", "NV", "CO", "TX", "FL", "NY", "NJ", "MA", "CT", "HI"],
    estimatedCustomers: "500,000+",
    headline: "SunPower Filed for Bankruptcy — What SunPower Customers Should Do Now",
    summary: "SunPower, once the largest residential solar company in the US, filed for Chapter 11 bankruptcy in 2024. While some operations may continue under new ownership, customers should take steps to protect their investment now.",
    whatHappened: "SunPower filed for Chapter 11 bankruptcy protection in 2024 after years of financial struggles. The company had previously spun off its panel manufacturing into Maxeon Solar Technologies. The bankruptcy affects SunPower's installation and monitoring services, but panel warranties through Maxeon may still be honored depending on the outcome.",
    whatStillWorks: "Your SunPower panels likely carry a 25-year warranty from Maxeon Solar Technologies (the manufacturing spinoff). SunPower inverters or third-party inverters (SolarEdge, Enphase) have their own manufacturer warranties. Your system will continue producing power regardless of SunPower's corporate status.",
    whatYouLost: "The SunPower Complete Confidence warranty (which bundled equipment, workmanship, and monitoring) may not be fully honored. If SunPower was your monitoring provider, that service may be interrupted. Production guarantees in your contract may be unenforceable if the company liquidates.",
    steps: [
      "Verify your system is still producing by running a free SolarDoctor health check or checking your inverter monitoring app.",
      "Determine your panel manufacturer. If you have Maxeon panels, contact Maxeon directly about warranty coverage. If you have SunPower-branded panels made before the Maxeon spinoff, warranty status may be uncertain.",
      "Check if your SunPower monitoring app still works. If it stops, switch to your inverter manufacturer's app (SolarEdge or Enphase) and set up SolarDoctor for independent health monitoring.",
      "Contact a local certified solar installer for a physical inspection — especially if your system is more than 5 years old.",
      "Set up SolarDoctor for free ongoing health monitoring and alerts so you have an independent watchdog on your investment.",
    ],
    blogSlug: "sunpower-solar-problems",
  },
  {
    slug: "pink-energy",
    name: "Pink Energy (formerly PowerHome Solar)",
    status: "Closed / Under Investigation",
    year: 2022,
    statesAffected: ["NC", "SC", "VA", "OH", "GA", "TN", "IN", "PA"],
    estimatedCustomers: "40,000+",
    headline: "Pink Energy (PowerHome Solar) Shut Down — What You Need to Know",
    summary: "Pink Energy, formerly known as PowerHome Solar, abruptly closed in 2022 amid lawsuits, complaints, and state AG investigations. Tens of thousands of customers were left with no warranty support and ongoing loan payments.",
    whatHappened: "Pink Energy (rebranded from PowerHome Solar in 2022, reportedly to escape its reputation) shut down abruptly in October 2022. The company faced multiple state attorney general investigations, a class-action lawsuit, and thousands of BBB complaints about defective installations, roof damage, and misleading sales practices.",
    whatStillWorks: "Your panel and inverter manufacturer warranties are unaffected by Pink Energy's closure. If you have Generac inverters or other branded equipment, contact the manufacturer directly. Your solar loan is unfortunately still active — the loan company (Mosaic, GoodLeap, etc.) is separate from the installer.",
    whatYouLost: "Your workmanship warranty, monitoring services, and any promises Pink Energy made about production guarantees or system performance. Many Pink Energy customers also report substandard installations that need remediation.",
    steps: [
      "Get a physical roof inspection immediately. Pink Energy had a high rate of installation complaints — roof leaks, improper mounting, and wiring issues. Budget $200-400 for a thorough inspection by a local roofer and electrician.",
      "Run a SolarDoctor health check to see if your system is producing what it should. Many Pink Energy customers discover significant underperformance.",
      "File a complaint with your state attorney general if you haven't already. Several states have active investigations.",
      "Contact your loan company if your system isn't performing as promised. Some customers have successfully negotiated with lenders based on documented underperformance.",
      "Set up SolarDoctor for ongoing free monitoring so you catch future issues before they cost you money.",
    ],
  },
  {
    slug: "momentum-solar",
    name: "Momentum Solar",
    status: "Closed",
    year: 2024,
    statesAffected: ["NJ", "NY", "CT", "PA", "FL", "CA", "TX"],
    estimatedCustomers: "100,000+",
    headline: "Momentum Solar Closed — Steps to Protect Your Solar Investment",
    summary: "Momentum Solar ceased operations in 2024, leaving approximately 100,000 customers without warranty support or monitoring services across multiple states.",
    whatHappened: "Momentum Solar, once one of the top 10 residential solar installers in the US, closed its doors in 2024. The company had been facing financial difficulties and regulatory scrutiny in multiple states. Customers were left with active loan payments but no installer support.",
    whatStillWorks: "Your equipment manufacturer warranties (panels, inverters, optimizers) remain valid. Your solar panels continue to generate electricity. Your net metering agreement with your utility is unaffected.",
    whatYouLost: "Your workmanship warranty covering installation quality, your monitoring service if Momentum provided it, and your point of contact for system issues or warranty claims related to installation.",
    steps: [
      "Check your system is still producing by logging into your inverter app (SolarEdge, Enphase, or SolarEdge Home) or run a free SolarDoctor health check.",
      "Locate your original contract and equipment warranty documents. These are critical for any future manufacturer warranty claims.",
      "Have a local licensed solar installer inspect your system, especially roof penetrations and electrical connections.",
      "Set up independent monitoring with SolarDoctor — free health scores and alerts so you're never caught off guard again.",
      "Contact your loan provider if you're experiencing system issues that affect your ability to generate the savings you were promised.",
    ],
  },
];

export function getInstallerBySlug(slug: string): InstallerData | undefined {
  return installers.find((i) => i.slug === slug);
}

export function getAllInstallerSlugs(): string[] {
  return installers.map((i) => i.slug);
}
