import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Case Studies",
  description: "See how Fresh Lime Media has helped service businesses rank on Google and get cited by AI answer engines.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-32 px-[var(--page-gutter)] max-w-7xl mx-auto">
      <h1 className="font-display text-display-lg font-black text-[var(--ink)]">Work</h1>
      <p className="mt-6 text-body-lg text-[var(--smoke)]">Case studies coming soon.</p>
    </div>
  );
}
