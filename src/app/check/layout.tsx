import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Solar Health Score | Check Your System Now - SolarDoctor",
  description:
    "Get a free instant health score for your SolarEdge solar system. See if your panels are underperforming, how much energy you're losing, and what it's costing you. No account required.",
  keywords: [
    "solar health score",
    "solar system check",
    "is my solar working",
    "solar panel performance check",
    "SolarEdge health check",
    "free solar monitoring",
    "solar panel underperforming",
  ],
  openGraph: {
    title: "Free Solar Health Score | SolarDoctor",
    description: "Check if your solar panels are underperforming in 30 seconds. Free, no account required.",
    url: "https://www.getsolardoctor.com/check",
    type: "website",
  },
  alternates: {
    canonical: "https://www.getsolardoctor.com/check",
  },
};

export default function CheckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
