import Link from "next/link";
import type { Metadata } from "next";
import { blogPostsBySlug, getAllSlugs } from "@/lib/blog-posts";

interface BlogPostPageProps {
  params: { slug: string };
}

// Generate static params for all blog posts (SSG)
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPostsBySlug[params.slug];
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
      url: `https://www.getsolardoctor.com/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://www.getsolardoctor.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsBySlug[params.slug];

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
              href="/check"
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

        {/* FAQ Section */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16 border-t border-gray-100 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-5">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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
            href="/check"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
          >
            Check Your System Now &rarr;
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-16 border-t border-gray-100 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {getRelatedPosts(post.slug, post.category).map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="block border border-gray-100 rounded-lg p-4 hover:border-green-200 transition-colors"
              >
                <span className="text-xs font-medium text-green-700">{related.category}</span>
                <h4 className="text-sm font-semibold text-gray-900 mt-1">{related.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Schema.org Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "SolarDoctor",
              url: "https://www.getsolardoctor.com",
            },
            publisher: {
              "@type": "Organization",
              name: "SolarDoctor",
              url: "https://www.getsolardoctor.com",
            },
          }),
        }}
      />

      {/* FAQ Schema.org structured data for rich snippets */}
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </div>
  );
}

// Get 2-4 related posts based on category match
function getRelatedPosts(currentSlug: string, category: string) {
  const { allBlogPosts } = require("@/lib/blog-posts");
  const sameCat = allBlogPosts.filter(
    (p: any) => p.slug !== currentSlug && p.category === category
  );
  const otherPosts = allBlogPosts.filter(
    (p: any) => p.slug !== currentSlug && p.category !== category
  );
  const related = [...sameCat.slice(0, 3), ...otherPosts.slice(0, 2)];
  return related.slice(0, 4);
}
