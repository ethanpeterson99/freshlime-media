import type { Metadata } from "next";

export const metadata: Metadata = { title: "Legal" };

export default function LegalPage() {
  return (
    <div className="min-h-screen pt-32 px-[var(--page-gutter)] max-w-7xl mx-auto">
      <h1 className="font-display text-display-lg font-black text-[var(--ink)]">Legal</h1>
    </div>
  );
}
