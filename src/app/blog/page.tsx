import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Solar Doctor Blog - Solar System Monitoring Tips & Guides",
  description:
    "Expert guides on solar panel monitoring, troubleshooting SolarEdge and Enphase error codes, and maximizing your solar investment.",
};

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

      {/* Category filters */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(blogPosts.map((p) => p.category))).map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8">
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
