import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/auth/callback"],
      },
    ],
    sitemap: "https://www.getsolardoctor.com/sitemap.xml",
  };
}
