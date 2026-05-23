import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book a Strategy Call",
  description: "Book a free 20-minute strategy call with Fresh Lime Media. Talk SEO, AEO, and AI automation for your service business.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 px-[var(--page-gutter)] max-w-7xl mx-auto">
      <h1 className="font-display text-display-lg font-black text-[var(--ink)]">Contact</h1>
      <p className="mt-6 text-body-lg text-[var(--smoke)]">Contact form coming soon.</p>
    </div>
  );
}
