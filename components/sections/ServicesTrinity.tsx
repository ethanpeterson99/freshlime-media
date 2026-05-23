import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const services = [
  {
    num: "01",
    name: "SEO",
    tagline: "Classic organic visibility that compounds over time.",
    bullets: [
      "Technical audits & fixes",
      "Content strategy & creation",
      "Authority link building",
      "Local SEO & Google Business",
    ],
    href: "/services/seo",
  },
  {
    num: "02",
    name: "AEO",
    tagline: "Get cited inside ChatGPT, Perplexity, and Google AI Overviews.",
    bullets: [
      "Entity recognition optimization",
      "Schema markup implementation",
      "llms.txt strategy",
      "Citation harvesting & monitoring",
    ],
    href: "/services/aeo",
  },
  {
    num: "03",
    name: "AI Automation",
    tagline: "Lead capture and nurture on autopilot.",
    bullets: [
      "GoHighLevel workflow builds",
      "AI receptionist & chat agents",
      "Automated reporting dashboards",
      "CRM integration & setup",
    ],
    href: "/services/ai-automation",
  },
];

export default function ServicesTrinity() {
  return (
    <section className="bg-[var(--off-white)] py-32 relative">
      <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
        <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
          WHAT WE DO
        </p>
        <TextReveal
          as="h2"
          className="font-display font-black text-[clamp(2rem,5vw,3.75rem)] leading-tight tracking-tight max-w-3xl mb-16 text-[var(--ink)]"
        >
          Three disciplines. One outcome: more revenue.
        </TextReveal>

        <Reveal stagger className="grid md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <TiltCard
              key={svc.num}
              className="rounded-3xl bg-[var(--paper)] border border-[var(--mist)]/30 p-8 h-full"
            >
              <div className="flex flex-col gap-6 h-full">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-caption text-[var(--smoke)] tracking-widest">
                    {svc.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[var(--lime-acid)]" />
                </div>
                <h3 className="font-display font-bold text-display-md leading-none text-[var(--ink)]">
                  {svc.name}
                </h3>
                <p className="text-body text-[var(--smoke)] leading-relaxed">
                  {svc.tagline}
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                  {svc.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-body-sm text-[var(--ink)] flex gap-2 items-start"
                    >
                      <span className="text-[var(--lime-deep)] mt-1.5">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={svc.href}
                  className="mt-auto pt-6 text-body-sm font-semibold text-[var(--ink)] hover:text-[var(--lime-deep)] transition-colors inline-flex items-center gap-2 group"
                >
                  Learn more
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </TiltCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
