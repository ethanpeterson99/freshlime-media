import Link from "next/link";
import CountUp from "@/components/motion/CountUp";
import TiltCard from "@/components/ui/TiltCard";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const cases = [
  {
    metric: 312,
    prefix: "+",
    suffix: "%",
    label: "organic traffic",
    client: "Utah Sauna Company",
    timeframe: "11 weeks",
    href: "/work/utah-sauna-company",
    tag: "SEO",
  },
  {
    metric: 47,
    prefix: "",
    suffix: "",
    label: "AI citations — ChatGPT + Perplexity",
    client: "Mori Medical",
    timeframe: "6 weeks",
    href: "/work/mori-medical",
    tag: "AEO",
  },
  {
    metric: 14,
    prefix: "$",
    suffix: "K",
    label: "MRR from automated pipeline",
    client: "Pickled Court",
    timeframe: "90 days",
    href: "/work/pickled-court",
    tag: "Automation",
  },
];

export default function Proof() {
  return (
    <section className="bg-[var(--paper)] py-32">
      <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
        <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
          RECEIPTS
        </p>
        <TextReveal
          as="h2"
          className="font-display font-black text-[clamp(2rem,5vw,3.75rem)] leading-tight tracking-tight mb-16 text-[var(--ink)]"
        >
          Numbers, not promises.
        </TextReveal>

        <Reveal stagger className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <TiltCard
              key={c.client}
              className="rounded-3xl bg-[var(--off-white)] border border-[var(--mist)]/30 p-8 h-full"
            >
              <div className="flex flex-col gap-4 h-full">
                <span className="self-start text-caption font-mono uppercase tracking-widest px-2 py-1 rounded bg-[var(--lime-acid)]/20 text-[var(--lime-deep)]">
                  {c.tag}
                </span>
                <div className="font-display italic font-black text-[clamp(3.5rem,8vw,6rem)] leading-none text-[var(--ink)] tabular-nums">
                  <CountUp
                    to={c.metric}
                    prefix={c.prefix}
                    suffix={c.suffix}
                    duration={1800}
                  />
                </div>
                <p className="text-body text-[var(--smoke)] -mt-2">{c.label}</p>
                <div className="border-t border-[var(--mist)]/40 pt-4 mt-2">
                  <p className="font-medium text-body text-[var(--ink)]">{c.client}</p>
                  <p className="text-caption font-mono uppercase tracking-wider text-[var(--smoke)] mt-1">
                    {c.timeframe}
                  </p>
                </div>
                <Link
                  href={c.href}
                  className="mt-auto pt-6 text-body-sm font-semibold text-[var(--ink)] hover:text-[var(--lime-deep)] transition-colors inline-flex items-center gap-2 group"
                >
                  Read case study
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
