import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { installerBlogPosts } from "@/lib/blog-posts-installers";
import { problemBlogPosts } from "@/lib/blog-posts-problems";
import { highIntentBlogPosts } from "@/lib/blog-posts-high-intent";

export const metadata: Metadata = {
  title: "Solar Monitoring Guides & Troubleshooting - SolarDoctor",
  description:
    "Expert guides on solar panel monitoring, troubleshooting SolarEdge and Enphase error codes, and protecting your solar investment. Written by a 20-year solar industry veteran.",
  openGraph: {
    title: "Solar Monitoring Guides - SolarDoctor",
    description:
      "Expert guides on monitoring your solar investment, catching problems early, and maximizing savings.",
    url: "https://www.getsolardoctor.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://www.getsolardoctor.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-bold text-green-700">
            SolarDoctor
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-green-700 font-medium">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Solar Monitoring Guides
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          Expert guides on monitoring your solar investment, catching problems
          early, and making sure you get every dollar of savings you were
          promised.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Written by Rich, founder of SolarDoctor &middot; 20 years in the solar industry
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Jump links */}
        <div className="flex flex-wrap gap-2 mb-12 text-sm">
          <a href="#featured" className="px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium hover:bg-green-100">Featured</a>
          <a href="#troubleshooting" className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100">Troubleshooting</a>
          <a href="#high-intent" className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100">Common Questions</a>
          <a href="#installers" className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100">By Installer</a>
        </div>

        {/* Featured / Original Posts */}
        <section id="featured" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Guides</h2>
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="border border-gray-100 rounded-xl p-6 hover:border-green-200 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-50 text-green-700">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500">{post.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Troubleshooting Posts */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Error Codes & Troubleshooting</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {problemBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-gray-100 rounded-lg p-4 hover:border-green-200 transition-colors"
              >
                <span className="text-xs font-medium text-green-700">{post.category}</span>
                <h3 className="text-sm font-semibold text-gray-900 mt-1 group-hover:text-green-700">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* High-Intent Posts */}
        <section id="high-intent" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {highIntentBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-gray-100 rounded-lg p-4 hover:border-green-200 transition-colors"
              >
                <span className="text-xs font-medium text-green-700">{post.category}</span>
                <h3 className="text-sm font-semibold text-gray-900 mt-1 group-hover:text-green-700">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Installer Posts */}
        <section id="installers" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Guides by Solar Installer</h2>
          <p className="text-sm text-gray-500 mb-6">
            Having issues with your specific solar installer? Find troubleshooting guides tailored to your system.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {installerBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-gray-100 rounded-lg p-4 hover:border-green-200 transition-colors"
              >
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-700">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mb-2">
            Not sure if your system is working properly?
          </h3>
          <p className="text-green-700 mb-6">
            Get a free health score in 2 minutes. No credit card, no commitment.
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
