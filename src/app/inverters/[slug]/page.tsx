import Link from "next/link";
import type { Metadata } from "next";
import {
  inverterModels,
  inverterModelsBySlug,
  getAllInverterSlugs,
} from "@/lib/inverter-models";
import type { InverterModel } from "@/lib/inverter-models";
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";

interface InverterPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all inverter models (SSG)
export async function generateStaticParams() {
  return getAllInverterSlugs().map((slug) => ({ slug }));
}

// Generate SEO metadata for each inverter page
export async function generateMetadata({
  params,
}: InverterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = inverterModelsBySlug[slug];

  if (!model) {
    return { title: "Inverter Not Found - SolarDoctor" };
  }

  const title = `${model.model} Troubleshooting Guide | SolarDoctor`;
  const description = `Complete troubleshooting guide for SolarEdge ${model.model} (${model.series} series). Common issues, error codes, and specifications.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://www.getsolardoctor.com/inverters/${slug}`,
    },
    alternates: {
      canonical: `https://www.getsolardoctor.com/inverters/${slug}`,
    },
  };
}

export default async function InverterPage({ params }: InverterPageProps) {
  const { slug } = await params;
  const model = inverterModelsBySlug[slug];

  if (!model) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Inverter model not found
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t find this SolarEdge inverter model.
          </p>
          <Link href="/inverters" className="text-green-600 hover:text-green-700 font-medium">
            ← View all inverters
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/inverters"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← All Inverters
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-50 text-green-700">
              {model.series} Series
            </span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
              {model.phase}-Phase
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            SolarEdge {model.model}
          </h1>
          <p className="text-xl text-gray-500">
            {model.series} Series · {model.powerRating}
          </p>
        </div>

        {/* Common Issues Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Issues</h2>
          <div className="grid gap-4">
            {model.commonIssues.map((issue, idx) => (
              <div
                key={idx}
                className="border border-gray-100 rounded-lg p-5 hover:border-orange-200 hover:bg-orange-50/30 transition-colors"
              >
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {issue.title}
                    </h3>
                    <p className="text-sm text-gray-600">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {model.specs.map((spec, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">
                      {spec.label}
                    </td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Error Codes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Error Codes</h2>
          <div className="space-y-3">
            {model.errorCodes.map((error, idx) => (
              <div
                key={idx}
                className="border border-gray-100 rounded-lg p-4 flex items-start gap-4"
              >
                <div className="flex items-center gap-2 flex-shrink-0">
                  {error.severity === "critical" ? (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  )}
                  <code className="font-mono font-bold text-gray-900 text-lg">
                    {error.code}
                  </code>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-medium">{error.meaning}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        error.severity === "critical"
                          ? "bg-red-50 text-red-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {error.severity === "critical" ? "Critical" : "Warning"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-green-900 mb-2">
            Check Your {model.model} Health
          </h3>
          <p className="text-green-700 mb-6">
            Works with any SolarEdge inverter — run a free health check in 30 seconds.
          </p>
          <Link
            href="/check"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
          >
            Check Your System Now →
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg text-center text-sm text-gray-600 border border-gray-100">
          <p>
            Works with any SolarEdge inverter — run a free health check in 30 seconds.
          </p>
        </div>
      </article>

      {/* Product Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `SolarEdge ${model.model}`,
            description: `${model.series} series inverter with ${model.powerRating} power rating`,
            brand: {
              "@type": "Brand",
              name: "SolarEdge",
            },
            manufacturer: {
              "@type": "Organization",
              name: "SolarEdge Technologies",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "0",
              url: `https://www.getsolardoctor.com/inverters/${slug}`,
            },
          }),
        }}
      />

      {/* FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: model.commonIssues.map((issue) => ({
              "@type": "Question",
              name: issue.title,
              acceptedAnswer: {
                "@type": "Answer",
                text: issue.description,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
