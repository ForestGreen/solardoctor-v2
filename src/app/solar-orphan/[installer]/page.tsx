import Link from "next/link";
import type { Metadata } from "next";
import { Shield, ChevronRight } from "lucide-react";
import { getInstallerBySlug, getAllInstallerSlugs } from "@/lib/solar-orphan-data";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

interface InstallerPageProps {
  params: { installer: string };
}

export async function generateStaticParams() {
  return getAllInstallerSlugs().map((installer) => ({ installer }));
}

export async function generateMetadata({ params }: InstallerPageProps): Promise<Metadata> {
  const data = getInstallerBySlug(params.installer);
  if (!data) return { title: "Installer Not Found - SolarDoctor" };

  return {
    title: `${data.headline} - SolarDoctor`,
    description: data.summary,
    openGraph: {
      title: data.headline,
      description: data.summary,
      url: `https://www.getsolardoctor.com/solar-orphan/${data.slug}`,
      type: "article",
    },
    alternates: {
      canonical: `https://www.getsolardoctor.com/solar-orphan/${data.slug}`,
    },
  };
}

export default function InstallerPage({ params }: InstallerPageProps) {
  const data = getInstallerBySlug(params.installer);

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Installer not found</h1>
          <Link href="/solar-orphan" className="text-green-600 hover:text-green-700">
            &larr; View all installers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/solar-orphan" className="text-sm text-gray-400 hover:text-gray-600">
            &larr; All bankrupt installers
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-50 text-red-700">
            {data.status}
          </span>
          <span className="text-xs text-gray-400">
            {data.estimatedCustomers} customers affected
          </span>
          <span className="text-xs text-gray-400">
            {data.statesAffected.join(", ")}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {data.headline}
        </h1>

        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          {data.summary}
        </p>

        {/* What Happened */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Happened</h2>
          <p className="text-gray-700 leading-relaxed">{data.whatHappened}</p>
        </section>

        {/* What Still Works */}
        <section className="bg-green-50 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3">What Still Works</h2>
          <p className="text-green-800 leading-relaxed">{data.whatStillWorks}</p>
        </section>

        {/* What You Lost */}
        <section className="bg-red-50 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-red-900 mb-3">What You Lost</h2>
          <p className="text-red-800 leading-relaxed">{data.whatYouLost}</p>
        </section>

        {/* Steps */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What to Do Right Now
          </h2>
          <div className="space-y-4">
            {data.steps.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-brand-600 rounded-2xl p-8 text-center mb-10">
          <Shield className="h-10 w-10 text-white mx-auto mb-3" />
          <h2 className="text-xl font-bold text-white mb-2">
            Check your system health — free
          </h2>
          <p className="text-brand-100 mb-6 text-sm">
            See if your {data.name} installation is still producing what it should.
            Takes 2 minutes. No account required.
          </p>
          <Link
            href="/check"
            className="inline-flex items-center bg-white text-brand-700 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            Run Free Health Check
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Related Blog Post */}
        {data.blogSlug && (
          <div className="border border-gray-200 rounded-xl p-5 mb-10">
            <p className="text-xs text-gray-400 mb-1">Related Article</p>
            <Link
              href={`/blog/${data.blogSlug}`}
              className="text-brand-600 hover:text-brand-700 font-semibold"
            >
              Read our detailed guide on {data.name} system problems &rarr;
            </Link>
          </div>
        )}

        {/* Other Installers */}
        <div className="border-t border-gray-100 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Other Bankrupt Installers</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {getAllInstallerSlugs()
              .filter((slug) => slug !== data.slug)
              .map((slug) => {
                const other = getInstallerBySlug(slug)!;
                return (
                  <Link
                    key={slug}
                    href={`/solar-orphan/${slug}`}
                    className="border border-gray-100 rounded-lg p-4 hover:border-brand-200 transition-colors"
                  >
                    <span className="text-xs text-red-600 font-medium">{other.status}</span>
                    <h4 className="text-sm font-semibold text-gray-900 mt-1">{other.name}</h4>
                  </Link>
                );
              })}
          </div>
        </div>
      </article>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: data.headline,
            description: data.summary,
            author: { "@type": "Organization", name: "SolarDoctor", url: "https://www.getsolardoctor.com" },
            publisher: { "@type": "Organization", name: "SolarDoctor", url: "https://www.getsolardoctor.com" },
          }),
        }}
      />

      <SiteFooter />
    </div>
  );
}
