import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ServiceCTA from "@/components/sections/ServiceCTA";
import FAQ, { FAQJsonLd } from "@/components/sections/FAQ";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import CountUp from "@/components/motion/CountUp";
import TiltCard from "@/components/ui/TiltCard";
import { aeoFaqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "AEO: Answer Engine Optimization — The Complete Guide",
  description:
    "Get cited inside ChatGPT, Perplexity, Claude, and Google AI Overviews. The complete guide to AEO from a boutique studio that ships citations, not slide decks.",
  openGraph: {
    title: "AEO: Answer Engine Optimization — The Complete Guide",
    description:
      "How LLMs decide what to cite, the 7 AEO levers we pull, and what to expect in your first 90 days.",
  },
};

const aeoLevers = [
  {
    name: "Entity optimization",
    what: "Make sure ChatGPT, Claude, and Perplexity know what your business actually does, who you serve, and what you specialize in — across the canonical web.",
    we: "Audit your entity graph, fix Wikidata + Wikipedia presence, align your About / Services pages with the entity definition LLMs already have.",
  },
  {
    name: "Schema markup",
    what: "Structured data is the most reliable signal you can send to an LLM. Organization, LocalBusiness, Service, FAQ, HowTo, Article — each one is a quotable hook.",
    we: "Implement the full schema stack across every page that matters, validate it, and monitor it for drift.",
  },
  {
    name: "llms.txt strategy",
    what: "A growing convention — a markdown index of your site optimized for LLM ingestion. We design yours to surface the answers you want quoted.",
    we: "Build, host, and maintain llms.txt and llms-full.txt with the precise content blocks we want LLMs to pull from.",
  },
  {
    name: "Citation harvesting",
    what: "LLMs cite sources they trust. Trusted sources are mostly other people's content that quotes you. So we get you quoted.",
    we: "Outreach for guest contributions, podcasts, expert quotes, and listicle inclusion across high-authority publications.",
  },
  {
    name: "Content structure",
    what: "LLMs chunk and quote. They reward clear definitions, TL;DR boxes, numbered lists, and unambiguous prose. We write so we get pulled.",
    we: "Restructure existing content and produce new content engineered for quotability — explicit entity anchors, clean Q&A formatting, comparative tables.",
  },
  {
    name: "Freshness signals",
    what: "LLMs increasingly prefer recent content, especially for queries with a time dimension. Stale = invisible.",
    we: "Regular content refresh cadence, datestamping, public changelogs on key pages, and freshness-pinging via sitemaps.",
  },
  {
    name: "Authority graph",
    what: "The web of links, citations, and brand mentions that LLMs use to triangulate trust. Bigger and cleaner = more cited.",
    we: "Targeted link building, digital PR, brand-mention monitoring, and disavowal of anything that's pulling you down.",
  },
];

const mechanisms = [
  {
    label: "Training data",
    desc: "LLMs are trained on a snapshot of the public web. If your content existed at training time and was indexed in a quotable shape, it lives inside the model permanently. Best for foundational entity work.",
  },
  {
    label: "RAG / live search",
    desc: "ChatGPT, Perplexity, and Google AI Overviews increasingly do live retrieval before answering. They re-rank the live web in real time. Freshness and structure win here.",
  },
  {
    label: "Structured data",
    desc: "FAQ schema, HowTo schema, and Organization schema act as direct quotable blocks. LLMs preferentially pull from structured data because it's pre-parsed.",
  },
];

const aeoSteps = [
  { num: "01", name: "Audit", desc: "Map current citation footprint, entity definition, and schema coverage. (Week 1)" },
  { num: "02", name: "Roadmap", desc: "Prioritize the 7 levers by impact and shipping speed. (Week 2)" },
  { num: "03", name: "Execute", desc: "Ship schema, llms.txt, entity content, and outreach in parallel. (Weeks 3–12)" },
  { num: "04", name: "Monitor", desc: "Monthly prompt-suite check across ChatGPT, Perplexity, Claude. (Ongoing)" },
];

export default function AEOPage() {
  return (
    <>
      <FAQJsonLd items={aeoFaqs} />
      <PageHero
        eyebrow="ANSWER ENGINE OPTIMIZATION"
        title="The complete guide to getting cited by AI."
        subtitle="In 18 months, half of consumer search will happen inside AI answer boxes. If your business isn't cited in those answers, you're invisible. Here's the full playbook we use to fix that."
        stats={[
          { value: "1B+", label: "ChatGPT users" },
          { value: "47%", label: "Google AI Overview coverage" },
          { value: "4–6wk", label: "first new citations" },
          { value: "8 / 8", label: "AEO levers we ship" },
        ]}
      />

      {/* What is AEO */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-5xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-4">01 · DEFINITION</p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-8"
          >
            What is AEO?
          </TextReveal>
          <div className="grid md:grid-cols-2 gap-12 text-body-lg text-[var(--smoke)] leading-relaxed">
            <p>
              <strong className="text-[var(--ink)]">Plain English:</strong> AEO is the
              discipline of getting your business cited and quoted inside AI answers —
              ChatGPT, Claude, Perplexity, Google AI Overviews. It&rsquo;s SEO&rsquo;s
              younger sibling, optimizing for a layer of search that didn&rsquo;t exist
              two years ago.
            </p>
            <p>
              <strong className="text-[var(--ink)]">Technical:</strong> AEO is the
              practice of structuring, distributing, and signaling your content so that
              large language models — both at training time and at retrieval time — can
              identify, parse, and quote your business as an authoritative source for a
              query.
            </p>
          </div>

          {/* SEO vs AEO comparison */}
          <Reveal className="mt-12 rounded-2xl border border-[var(--mist)]/40 overflow-hidden">
            <table className="w-full text-body-sm">
              <thead className="bg-[var(--paper)]">
                <tr>
                  <th className="text-left p-4 font-mono uppercase tracking-widest text-caption text-[var(--smoke)]">
                    Dimension
                  </th>
                  <th className="text-left p-4 font-display font-bold text-body text-[var(--ink)]">
                    SEO
                  </th>
                  <th className="text-left p-4 font-display font-bold text-body text-[var(--lime-deep)]">
                    AEO
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--mist)]/30">
                {[
                  ["Surface", "Google's 10 blue links", "AI answer boxes (ChatGPT, Perplexity, AI Overviews)"],
                  ["Outcome", "Clicks to your site", "Citations + brand mentions in AI answers"],
                  ["Signal", "Backlinks, content, technical health", "Entity definition, schema, structured quotable content"],
                  ["Speed", "60–90 days first movement", "4–6 weeks first citations"],
                  ["Measurement", "Rankings + organic traffic", "Citation rate + share-of-voice in AI answers"],
                ].map(([dim, seo, aeo]) => (
                  <tr key={dim} className="bg-[var(--off-white)]">
                    <td className="p-4 font-mono text-caption text-[var(--smoke)] uppercase">{dim}</td>
                    <td className="p-4 text-[var(--ink)]">{seo}</td>
                    <td className="p-4 text-[var(--ink)]">{aeo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* How LLMs decide */}
      <section className="bg-[var(--paper)] py-24">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-4">02 · MECHANICS</p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-12 max-w-3xl"
          >
            How LLMs decide what to cite.
          </TextReveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-6">
            {mechanisms.map((m, i) => (
              <div key={m.label} className="bg-[var(--off-white)] rounded-2xl p-8 border border-[var(--mist)]/30">
                <p className="font-mono text-caption tracking-widest text-[var(--smoke)] mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-display font-bold text-display-sm text-[var(--ink)] mb-4">{m.label}</h3>
                <p className="text-body text-[var(--smoke)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 7 levers */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-4">03 · THE WORK</p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-12 max-w-3xl"
          >
            The 7 AEO levers we pull.
          </TextReveal>
          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {aeoLevers.map((l, i) => (
              <TiltCard
                key={l.name}
                maxTilt={3}
                className="rounded-2xl bg-[var(--paper)] border border-[var(--mist)]/30 p-8 h-full"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-caption tracking-widest text-[var(--smoke)]">
                      LEVER 0{i + 1}
                    </span>
                    <span className="font-display font-bold text-display-sm text-[var(--lime-deep)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-display-sm text-[var(--ink)]">{l.name}</h3>
                  <p className="text-body text-[var(--smoke)] leading-relaxed">{l.what}</p>
                  <div className="mt-2 pt-4 border-t border-[var(--mist)]/40">
                    <p className="font-mono text-caption uppercase tracking-widest text-[var(--lime-deep)] mb-2">
                      What we do
                    </p>
                    <p className="text-body-sm text-[var(--ink)] leading-relaxed">{l.we}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--paper)] py-24">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-4">04 · TIMELINE</p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-12 max-w-3xl"
          >
            Our AEO process.
          </TextReveal>
          <Reveal stagger className="grid md:grid-cols-4 gap-6">
            {aeoSteps.map((s) => (
              <div key={s.num} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--ink)] flex items-center justify-center text-[var(--lime-acid)] font-mono text-body-sm font-bold">
                  {s.num}
                </div>
                <h3 className="font-display font-bold text-display-sm text-[var(--ink)]">{s.name}</h3>
                <p className="text-body-sm text-[var(--smoke)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Case study highlight */}
      <section className="bg-[var(--deep-night)] text-[var(--off-white)] py-32">
        <div className="max-w-5xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-acid)] mb-6">
            CASE STUDY
          </p>
          <h2 className="font-display font-black text-[clamp(2rem,5vw,3.75rem)] leading-tight mb-8 tracking-tight">
            Mori Medical: 47 AI citations in 6 weeks.
          </h2>
          <p className="text-body-lg text-[var(--mist)] mb-12 max-w-2xl leading-relaxed">
            We started with an empty AI footprint and a clean schema deficit. Six weeks
            in, Mori Medical appears in ChatGPT and Perplexity for{" "}
            <strong className="text-[var(--off-white)]">47 distinct queries</strong>{" "}
            across their service lines.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12 border-t border-white/15 pt-10">
            <div>
              <p className="font-display font-black text-display-lg leading-none text-[var(--lime-acid)]">
                <CountUp to={47} />
              </p>
              <p className="text-caption font-mono uppercase tracking-widest text-[var(--mist)] mt-2">
                citations
              </p>
            </div>
            <div>
              <p className="font-display font-black text-display-lg leading-none text-[var(--lime-acid)]">
                <CountUp to={6} suffix="wk" />
              </p>
              <p className="text-caption font-mono uppercase tracking-widest text-[var(--mist)] mt-2">
                time to first
              </p>
            </div>
            <div>
              <p className="font-display font-black text-display-lg leading-none text-[var(--lime-acid)]">
                <CountUp to={8} suffix="/8" />
              </p>
              <p className="text-caption font-mono uppercase tracking-widest text-[var(--mist)] mt-2">
                schema types shipped
              </p>
            </div>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-body font-semibold text-[var(--lime-acid)] hover:text-[var(--off-white)] transition-colors"
          >
            View all case studies →
          </Link>
        </div>
      </section>

      <FAQ
        eyebrow="AEO QUESTIONS"
        headline="What people ask before signing up for AEO."
        items={aeoFaqs}
        background="paper"
      />

      <ServiceCTA
        headline="Want to be cited inside the next ChatGPT answer about your industry?"
        sub="Free AEO audit. 60 seconds. No credit card. PDF in your inbox."
        primaryLabel="Run my AEO audit →"
        primaryHref="/contact"
      />
    </>
  );
}
