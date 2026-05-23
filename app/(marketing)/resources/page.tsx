import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ServiceCTA from "@/components/sections/ServiceCTA";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Resources — Tools, Guides & Templates",
  description:
    "Free AEO audit, schema generators, and in-depth guides on SEO, AEO, and AI automation for service businesses.",
};

const upcoming = [
  {
    name: "AEO Audit Tool",
    desc: "Drop in your URL — get a structured audit of how AI sees your business across ChatGPT, Perplexity, and Claude.",
    eta: "Available now",
    href: "/services/aeo",
    available: true,
  },
  {
    name: "Schema Generator",
    desc: "Paste your business info — get production-ready LocalBusiness, FAQ, and Service schema for your site.",
    eta: "Q2 2026",
    href: "#",
    available: false,
  },
  {
    name: "Citation Tracker",
    desc: "Track your brand's appearance inside AI answers across the major LLMs. Weekly digest by email.",
    eta: "Q3 2026",
    href: "#",
    available: false,
  },
  {
    name: "llms.txt Builder",
    desc: "Generate a battle-tested llms.txt + llms-full.txt for your site, optimized for LLM ingestion.",
    eta: "Q3 2026",
    href: "#",
    available: false,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="RESOURCES"
        title="Tools, guides, and templates — free, no email gate."
        subtitle="Everything in our toolkit, open to anyone. Use them yourself, or hire us if you want it done."
      />

      <section className="bg-[var(--off-white)] py-16">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {upcoming.map((t) => (
              <Link
                key={t.name}
                href={t.href}
                className="block bg-[var(--paper)] rounded-3xl p-8 border border-[var(--mist)]/30 hover:border-[var(--lime-acid)] transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-display-sm text-[var(--ink)]">
                    {t.name}
                  </h2>
                  <span
                    className={`text-caption font-mono uppercase tracking-widest px-2 py-1 rounded ${
                      t.available
                        ? "bg-[var(--lime-acid)] text-[var(--ink)]"
                        : "bg-[var(--mist)]/30 text-[var(--smoke)]"
                    }`}
                  >
                    {t.eta}
                  </span>
                </div>
                <p className="text-body text-[var(--smoke)] leading-relaxed">{t.desc}</p>
                {t.available && (
                  <p className="mt-6 text-body-sm font-semibold text-[var(--ink)] inline-flex items-center gap-2">
                    Open tool
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                )}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
