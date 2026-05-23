import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — Blog, Tools & Guides",
  description: "Free SEO and AEO tools, in-depth guides, and the Fresh Lime Media blog for service business owners.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-32 px-[var(--page-gutter)] max-w-7xl mx-auto">
      <h1 className="font-display text-display-lg font-black text-[var(--ink)]">Resources</h1>
      <p className="mt-6 text-body-lg text-[var(--smoke)]">Tools and blog coming soon.</p>
    </div>
  );
}
