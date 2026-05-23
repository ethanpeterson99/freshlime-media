import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://freshlimemedia.com";

  return {
    rules: [
      {
        // All crawlers including AI bots
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Explicitly allow major AI crawlers
      { userAgent: "GPTBot",        allow: "/" },
      { userAgent: "ClaudeBot",     allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended",allow: "/" },
      { userAgent: "Applebot",      allow: "/" },
      { userAgent: "anthropic-ai",  allow: "/" },
      { userAgent: "CCBot",         allow: "/" },
      { userAgent: "cohere-ai",     allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
