import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Fresh Lime Media",
  description: "Fresh Lime Media is a boutique SEO + AEO + AI automation agency founded by Ethan Peterson in Saratoga Springs, Utah.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 px-[var(--page-gutter)] max-w-7xl mx-auto">
      <h1 className="font-display text-display-lg font-black text-[var(--ink)]">About</h1>
      <p className="mt-6 text-body-lg text-[var(--smoke)]">More coming soon.</p>
    </div>
  );
}
