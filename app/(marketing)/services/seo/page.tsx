import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ServiceCTA from "@/components/sections/ServiceCTA";
import FAQ, { FAQJsonLd } from "@/components/sections/FAQ";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import CountUp from "@/components/motion/CountUp";
import { seoFaqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "SEO for Service Businesses — Organic That Compounds",
  description:
    "Technical SEO, content strategy, authority link building, and local SEO from a boutique studio. Real deliverables. Honest timelines. No vanity metrics.",
};

const deliverables = [
  ["Technical SEO audit & fixes", "Site speed, Core Web Vitals, crawlability, indexation, schema hygiene."],
  ["Keyword & content strategy", "Quarterly content roadmap based on commercial intent, not search volume vanity."],
  ["Content production", "2–4 long-form articles per month, written by humans, optimized for entities and intent."],
  ["On-page optimization", "Title tags, meta descriptions, internal linking, structured data on every page."],
  ["Authority link building", "Targeted outreach, digital PR, guest contributions, broken-link reclamation."],
  ["Local SEO", "Google Business Profile, citations, reviews, local landing pages — all included for local clients."],
  ["Monthly reporting", "Live dashboard + 30-min review with the human who did the work. No agency theater."],
];

const kpis = [
  ["Organic traffic (sessions, %)", "The headline number — but always reported alongside intent and conversion."],
  ["Keyword visibility share", "What % of your target keyword universe ranks where? Tracked weekly."],
  ["Pages indexed & crawl health", "Foundational. We monitor and fix monthly."],
  ["Qualified leads from organic", "We pipe organic traffic to your CRM and report leads + revenue, not just traffic."],
  ["Domain authority signals", "Referring domains, link velocity, brand mention growth."],
];

export default function SEOPage() {
  return (
    <>
      <FAQJsonLd items={seoFaqs} />
      <PageHero
        eyebrow="SEO STRATEGY"
        title="Organic visibility that compounds — not rented attention."
        subtitle="Classic SEO done properly: technical foundations, content that ranks, links that count, and reporting that doesn't insult your intelligence."
        stats={[
          { value: "+312%", label: "best client traffic lift" },
          { value: "60–90d", label: "first movement" },
          { value: "4–6mo", label: "meaningful results" },
          { value: "$1.5K", label: "starting retainer" },
        ]}
      />

      {/* What's included */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-5xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-4">
            DELIVERABLES
          </p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-12"
          >
            What&rsquo;s included — every month.
          </TextReveal>
          <Reveal stagger className="flex flex-col">
            {deliverables.map(([name, desc]) => (
              <div
                key={name}
                className="grid md:grid-cols-[1fr_2fr] gap-6 py-6 border-b border-[var(--mist)]/40 last:border-b-0"
              >
                <p className="font-display font-bold text-body-lg text-[var(--ink)]">{name}</p>
                <p className="text-body text-[var(--smoke)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* KPIs */}
      <section className="bg-[var(--paper)] py-24">
        <div className="max-w-5xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-4">
            MEASUREMENT
          </p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-12"
          >
            How we measure it.
          </TextReveal>
          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {kpis.map(([k, d]) => (
              <div key={k} className="bg-[var(--off-white)] rounded-2xl p-6 border border-[var(--mist)]/30">
                <p className="font-display font-bold text-body-lg text-[var(--ink)] mb-2">{k}</p>
                <p className="text-body-sm text-[var(--smoke)] leading-relaxed">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured case study */}
      <section className="bg-[var(--deep-night)] text-[var(--off-white)] py-32">
        <div className="max-w-5xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-acid)] mb-6">
            FEATURED CASE
          </p>
          <h2 className="font-display font-black text-[clamp(2rem,5vw,3.75rem)] leading-tight mb-8 tracking-tight">
            Utah Sauna Company: +312% organic traffic in 11 weeks.
          </h2>
          <p className="text-body-lg text-[var(--mist)] mb-12 max-w-2xl leading-relaxed">
            We inherited a 4-page WordPress site with no schema and a thin content
            footprint. Eleven weeks later, organic sessions were up 312% and qualified
            quote requests were the #1 lead source.
          </p>
          <div className="grid md:grid-cols-3 gap-8 border-t border-white/15 pt-10 mb-10">
            <div>
              <p className="font-display font-black text-display-lg leading-none text-[var(--lime-acid)]">
                +<CountUp to={312} suffix="%" />
              </p>
              <p className="text-caption font-mono uppercase tracking-widest text-[var(--mist)] mt-2">
                organic sessions
              </p>
            </div>
            <div>
              <p className="font-display font-black text-display-lg leading-none text-[var(--lime-acid)]">
                <CountUp to={11} suffix="wk" />
              </p>
              <p className="text-caption font-mono uppercase tracking-widest text-[var(--mist)] mt-2">
                to result
              </p>
            </div>
            <div>
              <p className="font-display font-black text-display-lg leading-none text-[var(--lime-acid)]">
                #<CountUp to={1} />
              </p>
              <p className="text-caption font-mono uppercase tracking-widest text-[var(--mist)] mt-2">
                lead source by month 3
              </p>
            </div>
          </div>
          <Link
            href="/work/utah-sauna-company"
            className="inline-flex items-center gap-2 text-body font-semibold text-[var(--lime-acid)] hover:text-[var(--off-white)] transition-colors"
          >
            Read the full case study →
          </Link>
        </div>
      </section>

      <FAQ
        eyebrow="SEO QUESTIONS"
        headline="What people ask before signing up for SEO."
        items={seoFaqs}
        background="paper"
      />

      <ServiceCTA />
    </>
  );
}
