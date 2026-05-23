import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ServiceCTA from "@/components/sections/ServiceCTA";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import CountUp from "@/components/motion/CountUp";

export const metadata: Metadata = {
  title: "Utah Sauna Company — +312% Organic Traffic Case Study",
  description:
    "How we took Utah Sauna Company from a 4-page brochure site to the #1 organic source for sauna installation in the Mountain West in 11 weeks.",
};

export default function UtahSaunaCasePage() {
  return (
    <>
      <PageHero
        eyebrow="CASE STUDY · SEO"
        title="Utah Sauna Company: +312% organic traffic in 11 weeks."
        subtitle="A 4-page WordPress site, no schema, thin content. Eleven weeks later, the #1 organic source for sauna installation searches across the Mountain West and qualified quote requests as the #1 lead source."
        stats={[
          { value: "+312%", label: "organic sessions" },
          { value: "11wk", label: "to result" },
          { value: "#1", label: "lead source by month 3" },
          { value: "$0", label: "ad spend" },
        ]}
      />

      {/* 1. Problem */}
      <Section eyebrow="01 · THE PROBLEM" title="A category leader that was invisible online.">
        <p>
          Utah Sauna Company had built a strong word-of-mouth reputation across the
          Mountain West but their site was a 4-page WordPress brochure with zero
          schema, no blog, and three meta titles. They were losing every Google
          search to lower-quality competitors with louder SEO.
        </p>
        <p>
          The owner had been quoted $5K/month by a national agency for a 12-month
          contract. He wanted to see results before signing anything.
        </p>
      </Section>

      {/* 2. Strategy */}
      <Section eyebrow="02 · THE STRATEGY" title="Schema, intent-led content, and the local pack." bg="paper">
        <p>
          We mapped the keyword universe by commercial intent — not by search volume —
          and identified 18 priority searches that mapped to qualified quote-request
          intent. Then we attacked three things in parallel: technical SEO (schema
          + crawlability), purpose-built content (one cornerstone page per intent
          cluster), and the local pack (GBP + citations + reviews).
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3 text-body text-[var(--smoke)]">
          <li>18 commercial-intent keyword targets across 4 service categories</li>
          <li>LocalBusiness, Service, FAQ, and BreadcrumbList schema on every page</li>
          <li>One cornerstone article per intent cluster, plus 8 supporting pieces</li>
          <li>GBP rebuild, citation cleanup across 32 directories, review-acquisition flow</li>
        </ul>
      </Section>

      {/* 3. Execution */}
      <Section eyebrow="03 · THE EXECUTION" title="What we shipped, week by week.">
        <ol className="flex flex-col gap-5 list-none">
          {[
            ["Week 1", "Audit + GA4 + Search Console + schema baseline"],
            ["Week 2", "Sitemap, robots, internal-link map, GBP rebuild"],
            ["Weeks 3–4", "Service-page rewrites + schema rollout (all pages)"],
            ["Weeks 5–8", "Cornerstone content (4 pieces) + supporting articles"],
            ["Weeks 9–10", "Citation cleanup + review-acquisition automation"],
            ["Week 11", "Reporting + month-2 roadmap"],
          ].map(([w, what]) => (
            <li key={w} className="grid grid-cols-[auto_1fr] gap-6 items-baseline">
              <span className="font-mono text-caption uppercase tracking-widest text-[var(--lime-deep)] min-w-[80px]">
                {w}
              </span>
              <span className="text-body text-[var(--ink)]">{what}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4. Results */}
      <section className="bg-[var(--deep-night)] text-[var(--off-white)] py-32">
        <div className="max-w-5xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-acid)] mb-6">
            04 · THE RESULTS
          </p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight tracking-tight mb-16"
          >
            Three numbers that mattered.
          </TextReveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-8">
            {[
              { v: 312, prefix: "+", suffix: "%", label: "organic sessions" },
              { v: 18, suffix: "/18", label: "target keywords on page 1" },
              { v: 1, prefix: "#", label: "lead source (org > paid > referral)" },
            ].map((r, i) => (
              <div key={i} className="border-l-2 border-[var(--lime-acid)] pl-6">
                <p className="font-display font-black text-[clamp(3rem,6vw,5rem)] leading-none text-[var(--lime-acid)] tabular-nums">
                  <CountUp to={r.v} prefix={r.prefix ?? ""} suffix={r.suffix ?? ""} duration={1800} />
                </p>
                <p className="mt-3 text-body text-[var(--mist)]">{r.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 5. Client quote */}
      <section className="bg-[var(--paper)] py-32">
        <div className="max-w-4xl mx-auto px-[var(--page-gutter)] text-center">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
            05 · IN THEIR WORDS
          </p>
          <blockquote className="font-display italic text-[clamp(1.75rem,4vw,3rem)] leading-snug text-[var(--ink)]">
            &ldquo;We&rsquo;re booking jobs we used to chase. The phone rings. The form
            fills. We stopped paying for ads three months in.&rdquo;
          </blockquote>
          <p className="mt-8 font-mono text-caption uppercase tracking-widest text-[var(--smoke)]">
            — Owner, Utah Sauna Company
          </p>
        </div>
      </section>

      {/* 6. What we'd do differently */}
      <Section eyebrow="06 · WHAT WE'D DO DIFFERENTLY" title="The one thing we'd repeat.">
        <p>
          We waited until week 8 to layer in AEO work (schema, llms.txt, entity
          definition) because the focus was on classic organic. Today we&rsquo;d ship
          AEO and SEO in parallel from week 1 — the work overlaps so heavily there&rsquo;s
          no reason not to.
        </p>
      </Section>

      {/* 7. CTA */}
      <ServiceCTA
        headline="Want results like this for your service business?"
        sub="Free audit. 60 seconds. Real recommendation."
        primaryLabel="Run my audit →"
        primaryHref="/contact"
      />

      <section className="bg-[var(--paper)] py-12">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)] flex justify-between items-center">
          <Link
            href="/work"
            className="text-body-sm font-semibold text-[var(--ink)] hover:text-[var(--lime-deep)] transition-colors"
          >
            ← All case studies
          </Link>
          <p className="text-caption font-mono uppercase tracking-widest text-[var(--smoke)]">
            CASE STUDY · 01 / 03
          </p>
        </div>
      </section>
    </>
  );
}

function Section({
  eyebrow,
  title,
  children,
  bg = "off-white",
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  bg?: "off-white" | "paper";
}) {
  const cls = bg === "paper" ? "bg-[var(--paper)]" : "bg-[var(--off-white)]";
  return (
    <section className={`${cls} py-24`}>
      <div className="max-w-4xl mx-auto px-[var(--page-gutter)]">
        <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-4">
          {eyebrow}
        </p>
        <TextReveal
          as="h2"
          className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-8"
        >
          {title}
        </TextReveal>
        <div className="flex flex-col gap-6 text-body-lg text-[var(--smoke)] leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
