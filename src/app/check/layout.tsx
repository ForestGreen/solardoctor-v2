import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Free Solar Panel Health Check — Are My Panels Working? | SolarDoctor",
  description:
    "Free online solar panel health check. Find out if your solar panels are working properly, how much energy you're losing, and what it's costing you. Works with SolarEdge and Enphase. No account required.",
  keywords: [
    "solar panel health check",
    "are my solar panels working properly",
    "check solar panel performance online",
    "free solar monitoring tool",
    "solar panel not producing",
    "solar system health check",
    "is my solar working",
    "SolarEdge health check",
    "Enphase health check",
  ],
  openGraph: {
    title: "Free Solar Panel Health Check | SolarDoctor",
    description: "Are your solar panels working properly? Find out in 2 minutes with a free health check. No account required.",
    url: "https://www.getsolardoctor.com/check",
    type: "website",
  },
  alternates: {
    canonical: "https://www.getsolardoctor.com/check",
  },
};

export default function CheckLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
