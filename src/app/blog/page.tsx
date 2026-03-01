import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, allBlogPosts } from "@/lib/blog-posts";
import { cityBlogPosts } from "@/lib/blog-posts-cities";
import { installerBlogPosts } from "@/lib/blog-posts-installers";
import { problemBlogPosts } from "@/lib/blog-posts-problems";

export const metadata: Metadata = {
  title: "Solar Doctor Blog - Solar System Monitoring Tips & Guides",
  description:
    "Expert guides on solar panel monitoring, troubleshooting SolarEdge and Enphase error codes, and maximizing your solar investment. 200+ guides for every city and installer.",
  openGraph: {
    title: "Solar Doctor Blog - Solar Monitoring Guides",
    description:
      "Expert tips on monitoring your solar investment, catching problems early, and maximizing savings.",
    url: "https://www.getsolardoctor.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://www.getsolardoctor.com/blog",
  },
};

// Group city posts by state
function groupByState(posts: typeof cityBlogPosts) {
  const groups: Record<string, typeof cityBlogPosts> = {};
  posts.forEach((post) => {
    // Extract state from title: "Solar Panels Not Working in City, State?"
    const match = post.title.match(/in .+?, (.+?)\?/);
    const state = match ? match[1] : "Other";
    if (!groups[state]) groups[state] = [];
    groups[state].push(post);
  });
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

export default function BlogPage() {
  const stateGroups = groupByState(cityBlogPosts);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
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

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Solar Monitoring Guides
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          Expert tips on monitoring your solar investment, catching problems
          early, and making sure you get every dollar of savings you were
          promised.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Jump links */}
        <div className="flex flex-wrap gap-2 mb-12 text-sm">
          <a href="#featured" className="px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium hover:bg-green-100">Featured</a>
          <a href="#troubleshooting" className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100">Troubleshooting</a>
          <a href="#installers" className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100">By Installer</a>
          <a href="#cities" className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100">By City</a>
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

        {/* Troubleshooting & Solar Basics Posts */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Troubleshooting & Solar Basics</h2>
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

        {/* Installer-Specific Posts */}
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

        {/* City-Specific Posts */}
        <section id="cities">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Solar Guides by City</h2>
          <p className="text-sm text-gray-500 mb-6">
            Find solar troubleshooting advice specific to your city&apos;s climate, utility, and common issues.
          </p>
          <div className="space-y-6">
            {stateGroups.map(([state, posts]) => (
              <div key={state}>
                <h3 className="text-sm font-bold text-gray-700 mb-2 border-b border-gray-100 pb-1">
                  {state}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {posts.map((post) => {
                    // Extract city name from title
                    const cityMatch = post.title.match(/in (.+?),/);
                    const cityName = cityMatch ? cityMatch[1] : post.slug;
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="text-sm text-green-700 hover:text-green-900 hover:underline px-2 py-1 rounded bg-green-50 hover:bg-green-100 transition-colors"
                      >
                        {cityName}
                      </Link>
                    );
                  })}
                </div>
              </div>
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
