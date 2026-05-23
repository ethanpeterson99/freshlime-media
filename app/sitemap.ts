import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://freshlimemedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: Array<{
    url: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
    { url: "/services", changeFrequency: "monthly", priority: 0.9 },
    { url: "/services/seo", changeFrequency: "monthly", priority: 0.9 },
    { url: "/services/aeo", changeFrequency: "monthly", priority: 1.0 },
    { url: "/services/ai-automation", changeFrequency: "monthly", priority: 0.9 },
    { url: "/work", changeFrequency: "monthly", priority: 0.8 },
    { url: "/work/utah-sauna-company", changeFrequency: "yearly", priority: 0.7 },
    { url: "/about", changeFrequency: "monthly", priority: 0.7 },
    { url: "/contact", changeFrequency: "monthly", priority: 0.9 },
    { url: "/resources", changeFrequency: "weekly", priority: 0.6 },
    { url: "/legal", changeFrequency: "yearly", priority: 0.2 },
  ];

  return pages.map((p) => ({
    url: `${siteUrl}${p.url === "/" ? "" : p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
