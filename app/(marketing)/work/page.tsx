import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WorkGrid from "@/components/sections/WorkGrid";
import ServiceCTA from "@/components/sections/ServiceCTA";

export const metadata: Metadata = {
  title: "Work — Case Studies",
  description:
    "See how Fresh Lime Media has helped service businesses rank on Google, get cited by AI, and grow MRR through automation.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="THE WORK"
        title="Receipts, not rhetoric. Real businesses. Real results."
        subtitle="A small selection of recent case studies. We work with a handful of clients at a time — these are the ones we can share."
      />
      <section className="bg-[var(--off-white)] py-16">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <WorkGrid />
        </div>
      </section>
      <ServiceCTA />
    </>
  );
}
