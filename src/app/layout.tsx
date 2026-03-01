import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolarDoctor - Know When Your Solar Investment Stops Working",
  description:
    "Free monitoring alerts and health scores for your rooftop solar system. Catch problems before they cost you thousands in lost savings.",
  keywords: [
    "solar monitoring",
    "solar panel alerts",
    "solar system health",
    "SolarEdge monitoring",
    "Enphase monitoring",
    "solar underperformance",
    "solar orphan",
    "rooftop solar",
  ],
  verification: {
    google: "IRXXsKmHpSjyv_b_cFO6zyQ56GbVj_4opp-Lh5GnmPc",
  },
  openGraph: {
    title: "SolarDoctor - The Doctor Is In",
    description:
      "Free health scores and alerts for your rooftop solar system. Know when your investment stops generating returns.",
    url: "https://getsolardoctor.com",
    siteName: "SolarDoctor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
