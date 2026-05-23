import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ServiceCTA from "@/components/sections/ServiceCTA";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

export const metadata: Metadata = {
  title: "About — Fresh Lime Media",
  description:
    "Founded by Ethan Peterson in Saratoga Springs, UT. Fresh Lime Media is a boutique SEO, AEO, and AI automation studio for service businesses.",
};

const values = [
  {
    name: "Receipts over rhetoric",
    desc: "Every promise has a metric attached. Every retainer has shipped deliverables. We report what moved, what didn't, and what we're changing — every month.",
  },
  {
    name: "Honest timelines",
    desc: "SEO takes months. AEO takes weeks. Automation takes a quarter. We say so up front, and we hit the dates we set.",
  },
  {
    name: "No vanity work",
    desc: "We don't measure impressions or run reports nobody reads. If a metric doesn't connect to revenue, calls, or pipeline, we don't track it.",
  },
];

const ventures = [
  {
    name: "Pickled Court",
    role: "Founder / CEO",
    desc: "Pickleball court resurfacing franchise. We use our own automation playbook here — the proof that the stack works.",
    href: "https://pickledcourt.com",
  },
  {
    name: "EBP Designs",
    role: "Founder",
    desc: "Custom web design and brand identity for small businesses. Where the design eye gets sharpened.",
    href: "https://ebpdesigns.com",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ethan Peterson",
  jobTitle: "Founder, Fresh Lime Media",
  worksFor: {
    "@type": "Organization",
    name: "Fresh Lime Media",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saratoga Springs",
    addressRegion: "UT",
    addressCountry: "US",
  },
  sameAs: [
    "https://linkedin.com/in/ethanpeterson",
    "https://pickledcourt.com",
    "https://ebpdesigns.com",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PageHero
        eyebrow="ABOUT"
        title="A boutique studio. Not an agency. Built for service businesses that want their phone to ring."
        subtitle="Fresh Lime Media is a one-and-some studio out of Saratoga Springs, Utah. We work with a handful of clients at a time so the work stays sharp and the relationships stay close."
      />

      {/* Founder photo + story */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <Reveal>
              <div
                data-cursor="pointer"
                className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[var(--paper)] to-[var(--mist)]/30 border-2 border-[var(--lime-acid)] relative overflow-hidden flex items-end p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,255,61,0.15),transparent_60%)]" />
                <div className="relative">
                  <p className="font-display font-bold text-display-sm text-[var(--ink)] leading-none">
                    Ethan Peterson
                  </p>
                  <p className="font-mono text-caption text-[var(--smoke)] uppercase tracking-widest mt-2">
                    Founder · Saratoga Springs, UT
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
                THE ORIGIN
              </p>
              <TextReveal
                as="h2"
                className="font-display font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-[var(--ink)] mb-10"
              >
                Built because the agency I needed didn&rsquo;t exist.
              </TextReveal>
              <Reveal stagger className="flex flex-col gap-6 text-body-lg text-[var(--smoke)] leading-relaxed">
                <p>
                  Fresh Lime Media was born from a simple frustration: watching good
                  businesses get outranked by worse ones because they didn&rsquo;t know
                  how to speak Google&rsquo;s language — let alone ChatGPT&rsquo;s.
                  I&rsquo;ve built SEO strategies for local businesses, launched a
                  pickleball court surfacing franchise, and run digital marketing for
                  clients across industries since 2016.
                </p>
                <p>
                  Most agencies sell you a process and pad the retainer with vanity
                  reporting. I built Fresh Lime to be the opposite: a small studio with
                  a small client roster, where every retainer maps to deliverables you
                  can see, and every metric we track connects to revenue.
                </p>
                <p>
                  I work the work myself, or with one of two trusted collaborators.
                  When you hire Fresh Lime, you get a senior practitioner — not a
                  rotating cast of account managers.
                </p>
              </Reveal>
              <p className="mt-10 font-display italic text-body-lg text-[var(--ink)]">
                — Ethan Peterson
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--paper)] py-24">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
            HOW WE THINK
          </p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-12 max-w-3xl"
          >
            Three rules we don&rsquo;t break.
          </TextReveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.name} className="bg-[var(--off-white)] rounded-2xl p-8 border border-[var(--mist)]/30 h-full">
                <p className="font-mono text-caption tracking-widest text-[var(--smoke)] mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-display font-bold text-display-sm text-[var(--ink)] mb-4">{v.name}</h3>
                <p className="text-body text-[var(--smoke)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Other ventures */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
            OTHER VENTURES
          </p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-12 max-w-3xl"
          >
            What else I&rsquo;m building.
          </TextReveal>
          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {ventures.map((v) => (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[var(--paper)] rounded-2xl p-8 border border-[var(--mist)]/30 hover:border-[var(--lime-acid)] transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-display-sm text-[var(--ink)]">
                    {v.name}
                  </h3>
                  <span className="text-[var(--smoke)] group-hover:text-[var(--lime-deep)] transition-colors">
                    ↗
                  </span>
                </div>
                <p className="font-mono text-caption uppercase tracking-widest text-[var(--lime-deep)] mb-3">
                  {v.role}
                </p>
                <p className="text-body text-[var(--smoke)] leading-relaxed">{v.desc}</p>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Contact methods */}
      <section className="bg-[var(--paper)] py-24">
        <div className="max-w-4xl mx-auto px-[var(--page-gutter)] text-center">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
            GET IN TOUCH
          </p>
          <h2 className="font-display font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-[var(--ink)] mb-8">
            The easiest way to reach me.
          </h2>
          <p className="text-body-lg text-[var(--smoke)] mb-8">
            Email is best.{" "}
            <a
              href="mailto:ethan@freshlimemedia.com"
              className="text-[var(--ink)] font-semibold underline decoration-[var(--lime-acid)] decoration-2 underline-offset-4 hover:text-[var(--lime-deep)] transition-colors"
            >
              ethan@freshlimemedia.com
            </a>
          </p>
          <p className="text-caption font-mono text-[var(--smoke)]">
            Or book a 20-min call.{" "}
            <Link
              href="/contact"
              className="text-[var(--ink)] hover:text-[var(--lime-deep)] transition-colors underline decoration-[var(--lime-acid)] decoration-2 underline-offset-4"
            >
              Calendar →
            </Link>
          </p>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
