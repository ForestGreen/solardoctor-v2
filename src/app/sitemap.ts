import { MetadataRoute } from "next";
import { allBlogPosts } from "@/lib/blog-posts";
import { inverterModels } from "@/lib/inverter-models";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.getsolardoctor.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/check`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/inverters`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/auth`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tools/solar-savings-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Inverter model pages
  const inverterPages: MetadataRoute.Sitemap = inverterModels.map((model) => ({
    url: `${baseUrl}/inverters/${model.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Note: /report/[id] pages are dynamic and will be discovered by crawlers
  // via share links. We don't include them in the sitemap since they're
  // user-generated and could number in the thousands.

  return [...staticPages, ...blogPages, ...inverterPages];
}
