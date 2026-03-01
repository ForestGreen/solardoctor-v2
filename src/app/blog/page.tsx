import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Doctor Blog - Solar System Monitoring Tips & Guides",
  description:
    "Expert guides on solar panel monitoring, troubleshooting underperforming systems, understanding SolarEdge error codes, and maximizing your solar investment.",
};

// Static blog posts for SEO - these will drive organic traffic
const posts = [
  {
    slug: "is-my-solar-system-working",
    title: "Is My Solar System Actually Working? 5 Signs It's Not",
    excerpt:
      "Most homeowners have no idea their solar panels are underperforming. Here are the warning signs you're losing money every month.",
    category: "Monitoring",
    date: "2025-03-01",
    readTime: "6 min read",
  },
  {
    slug: "solar-installer-went-out-of-business",
    title: "My Solar Installer Went Out of Business - Now What?",
    excerpt:
      "Over 100 solar companies filed for bankruptcy in 2024. If your installer is gone, here's how to keep your system running and monitored.",
    category: "Solar Orphans",
    date: "2025-02-15",
    readTime: "8 min read",
  },
  {
    slug: "solaredge-error-codes-explained",
    title: "SolarEdge Error Codes Explained in Plain English",
    excerpt:
      "A homeowner-friendly guide to every SolarEdge inverter error code, what they mean, and what to do about them.",
    category: "Troubleshooting",
    date: "2025-02-01",
    readTime: "10 min read",
  },
  {
    slug: "how-much-should-solar-panels-produce",
    title: "How Much Should My Solar Panels Produce Each Month?",
    excerpt:
      "Your system size, location, and time of year all affect production. Here's how to calculate if you're getting what you paid for.",
    category: "Education",
    date: "2025-01-15",
    readTime: "5 min read",
  },
  {
    slug: "solar-panel-cleaning-worth-it",
    title: "Is Solar Panel Cleaning Worth It? What the Data Says",
    excerpt:
      "Dirty panels can lose 5-25% of their output. We break down when cleaning makes financial sense and when it doesn't.",
    category: "Maintenance",
    date: "2025-01-01",
    readTime: "4 min read",
  },
  {
    slug: "solar-monitoring-apps-compared",
    title: "Solar Monitoring Apps Compared: SolarEdge vs Enphase vs SolarDoctor",
    excerpt:
      "Inverter apps show you data. SolarDoctor tells you what that data means. Here's how they differ.",
    category: "Comparison",
    date: "2024-12-15",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
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
              href="/auth"
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

      {/* Posts grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8">
          {posts.map((post) => (
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
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
