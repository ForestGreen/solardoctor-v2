import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Savings Calculator - How Much Should Your Solar Panels Produce? | SolarDoctor",
  description:
    "Free solar savings calculator. Enter your system size and location to see expected production, annual savings, and what underperformance costs you over 25 years.",
  keywords: [
    "solar savings calculator",
    "solar panel production calculator",
    "how much should my solar panels produce",
    "solar system performance calculator",
    "solar panel output calculator",
    "solar ROI calculator",
  ],
  openGraph: {
    title: "Solar Savings Calculator | SolarDoctor",
    description:
      "Calculate your solar system's expected production, savings, and the hidden cost of underperformance.",
    url: "https://www.getsolardoctor.com/tools/solar-savings-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://www.getsolardoctor.com/tools/solar-savings-calculator",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
