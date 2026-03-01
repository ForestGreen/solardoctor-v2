import Link from "next/link";
import type { Metadata } from "next";
import { createServiceRoleClient } from "@/lib/supabase/server";

// Blog content is stored in Supabase blog_posts table (from the existing schema)
// This page fetches and renders blog content server-side for SEO

interface BlogPostPageProps {
  params: { slug: string };
}

// Static blog content for initial launch (can be migrated to Supabase later)
const staticPosts: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    content: string;
    metaDescription: string;
  }
> = {
  "is-my-solar-system-working": {
    title: "Is My Solar System Actually Working? 5 Signs It's Not",
    category: "Monitoring",
    date: "2025-03-01",
    readTime: "6 min read",
    metaDescription:
      "Most homeowners have no idea their solar panels are underperforming. Here are 5 warning signs you're losing money every month, and what to do about it.",
    content: `
      <p class="text-lg text-gray-600 mb-8">You spent $25,000 or more on solar panels. Your installer promised you'd save hundreds every month on electricity. But how do you actually know if that's happening?</p>

      <p class="mb-4">The uncomfortable truth is that most homeowners have no idea whether their solar system is performing well. The monitoring apps from SolarEdge and Enphase show you kilowatt-hours produced — but they never tell you if that number is <em>good</em> or <em>bad</em> for your system.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #1: Your Electric Bills Are Higher Than Expected</h2>
      <p class="mb-4">This seems obvious, but many homeowners chalk up higher bills to changing utility rates or increased usage. If your bills are consistently higher than what your installer projected, your system may be underperforming.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #2: Your Production Drops Suddenly</h2>
      <p class="mb-4">A sudden drop in production — say 30% or more from one month to the next — usually indicates a hardware failure, like a microinverter going out or a string inverter error. These failures often go unnoticed for months.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #3: Summer Production Isn't Much Higher Than Winter</h2>
      <p class="mb-4">In most of the US, solar production should be 2-3x higher in summer than winter. If your summer and winter numbers are similar, something is likely wrong — shading from new tree growth, a failed panel, or an inverter issue.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #4: Your Monitoring App Shows Error Codes</h2>
      <p class="mb-4">Most homeowners ignore the notifications from their inverter app. But error codes like "DC voltage too low" or "isolation fault" mean your system isn't producing at full capacity. Every day you ignore these alerts costs you money.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sign #5: Your System Produces Zero on Sunny Days</h2>
      <p class="mb-4">If your monitoring shows zero production on a clear sunny day, your system has a critical failure. This could be a tripped breaker, a failed inverter, or a wiring issue. The longer this goes unaddressed, the more money you lose.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What Can You Do About It?</h2>
      <p class="mb-4">The first step is knowing whether your system is actually performing well. SolarDoctor compares your actual production against what your system <em>should</em> produce based on its size, location, and time of year. It gives you a simple health score from 0-100, so you instantly know if something needs attention.</p>

      <p class="mb-4">It's free, takes 2 minutes to set up, and works with any SolarEdge system.</p>
    `,
  },
  "solar-installer-went-out-of-business": {
    title: "My Solar Installer Went Out of Business — Now What?",
    category: "Solar Orphans",
    date: "2025-02-15",
    readTime: "8 min read",
    metaDescription:
      "Over 100 solar companies filed for bankruptcy in 2024, leaving thousands of homeowners without support. Here's what to do if you're a solar orphan.",
    content: `
      <p class="text-lg text-gray-600 mb-8">If your solar installer went out of business, you're not alone. Over 100 solar companies filed for bankruptcy or closed in 2024 alone, leaving thousands of homeowners — sometimes called "solar orphans" — without anyone to call when something goes wrong.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Your System Still Works — Probably</h2>
      <p class="mb-4">The good news: your solar panels and inverter don't need your installer to keep running. They'll continue producing electricity as long as the hardware is functioning. The bad news: if something breaks, you need to find help on your own.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 1: Check Your Equipment Warranties</h2>
      <p class="mb-4">Your installer may be gone, but your equipment warranties likely aren't. Most solar panels have 25-year manufacturer warranties, and inverters typically have 12-25 year warranties. These are with the equipment manufacturer (like SunPower, LG, SolarEdge, Enphase), not your installer.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 2: Set Up Independent Monitoring</h2>
      <p class="mb-4">Many homeowners relied on their installer to monitor their system. Without them, you need to set up your own monitoring. If you have a SolarEdge or Enphase system, you can use SolarDoctor to get a free health score that tells you if your system is performing as expected.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 3: Find a Local Solar Maintenance Company</h2>
      <p class="mb-4">You don't need your original installer to service your system. Any licensed solar contractor can perform maintenance, diagnose issues, and make repairs. Look for companies that specifically advertise maintenance services — they're used to working on systems they didn't install.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 4: Know the Warning Signs</h2>
      <p class="mb-4">The biggest risk for solar orphans isn't that something will break — it's that something will break and you won't notice for months. A failing inverter or cracked panel can silently cost you hundreds of dollars per month in lost production. This is exactly why monitoring matters.</p>

      <p class="mb-4">SolarDoctor was built specifically to solve this problem. We give you a simple health score so you always know how your system is doing — no installer required.</p>
    `,
  },
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = staticPosts[params.slug];
  if (!post) {
    return { title: "Post Not Found - SolarDoctor" };
  }
  return {
    title: `${post.title} - SolarDoctor`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = staticPosts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h1>
          <Link href="/blog" className="text-green-600 hover:text-green-700">
            &larr; Back to blog
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
              href="/auth"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Free Health Score
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            &larr; All posts
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-4">
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

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {post.title}
        </h1>

        <div
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mb-2">
            Wondering if your solar system is working properly?
          </h3>
          <p className="text-green-700 mb-6">
            Get a free health score in 2 minutes. No credit card, no
            commitment.
          </p>
          <Link
            href="/auth"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
          >
            Check Your System Now &rarr;
          </Link>
        </div>
      </article>
    </div>
  );
}
