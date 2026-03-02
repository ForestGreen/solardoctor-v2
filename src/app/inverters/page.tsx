import Link from "next/link";
import type { Metadata } from "next";
import { inverterModels } from "@/lib/inverter-models";

export const metadata: Metadata = {
  title: "SolarEdge Inverter Troubleshooting Guides | SolarDoctor",
  description:
    "Free troubleshooting guides for every SolarEdge inverter model. Find your model, check common issues, error codes, and get a free health score.",
  openGraph: {
    title: "SolarEdge Inverter Troubleshooting Guides",
    description:
      "Free troubleshooting guides for every SolarEdge inverter model.",
    url: "https://www.getsolardoctor.com/inverters",
  },
  alternates: {
    canonical: "https://www.getsolardoctor.com/inverters",
  },
};

export default function InvertersPage() {
  const hdWave = inverterModels.filter((m) => m.series === "HD-Wave");
  const setApp = inverterModels.filter((m) => m.series === "SetApp");

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-bold text-green-700">
            SolarDoctor
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-gray-500 hover:text-gray-700">
              Blog
            </Link>
            <Link
              href="/check"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Free Health Score
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          SolarEdge Inverter Guides
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Find your inverter model for troubleshooting tips, common issues,
          error codes, and specifications. Works with any SolarEdge system —{" "}
          <Link href="/check" className="text-green-700 underline hover:text-green-900">
            get a free health score in 30 seconds
          </Link>
          .
        </p>

        {/* HD-Wave Series */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          HD-Wave Series (Current Generation)
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 mb-10">
          {hdWave.map((model) => (
            <Link
              key={model.slug}
              href={`/inverters/${model.slug}`}
              className="block border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:bg-green-50/30 transition-colors"
            >
              <div className="font-semibold text-gray-900">{model.model}</div>
              <div className="text-sm text-gray-500">
                {model.powerRating} · {model.phase} Phase ·{" "}
                {model.commonIssues.length} common issues
              </div>
            </Link>
          ))}
        </div>

        {/* SetApp Series */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          SetApp Series (Older Generation)
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 mb-10">
          {setApp.map((model) => (
            <Link
              key={model.slug}
              href={`/inverters/${model.slug}`}
              className="block border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:bg-green-50/30 transition-colors"
            >
              <div className="font-semibold text-gray-900">{model.model}</div>
              <div className="text-sm text-gray-500">
                {model.powerRating} · {model.phase} Phase ·{" "}
                {model.commonIssues.length} common issues
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mb-2">
            Not sure which inverter you have?
          </h3>
          <p className="text-green-700 mb-4">
            Run a free health check — we auto-detect your system model, size,
            and location.
          </p>
          <Link
            href="/check"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
          >
            Check Your System Now &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
