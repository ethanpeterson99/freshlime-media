import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import Reveal from "@/components/motion/Reveal";

const options = [
  {
    title: "Free AEO Audit",
    desc: "No commitment. 60 seconds. PDF + recommendation in your inbox.",
    cta: "Run my audit",
    href: "/services/aeo",
    accent: "bg-[var(--lime-acid)] text-[var(--ink)]",
  },
  {
    title: "Strategy Call",
    desc: "20 minutes. No pitch. Just a real conversation about your situation.",
    cta: "Book a call",
    href: "/contact",
    accent: "bg-[var(--ink)] text-[var(--lime-acid)]",
  },
];

export default function FinalCTA() {
  return (
    <section className="bg-[var(--paper)] py-32">
      <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
        <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
          READY?
        </p>
        <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[var(--ink)] mb-16">
          Two ways to start.
        </h2>

        <Reveal stagger className="grid md:grid-cols-2 gap-6">
          {options.map((o) => (
            <TiltCard
              key={o.title}
              className="rounded-3xl bg-[var(--off-white)] border border-[var(--mist)]/30 p-10 h-full"
            >
              <div className="flex flex-col gap-6 h-full">
                <h3 className="font-display font-bold text-display-md text-[var(--ink)]">
                  {o.title}
                </h3>
                <p className="text-body-lg text-[var(--smoke)] leading-relaxed">{o.desc}</p>
                <Link
                  href={o.href}
                  className={`mt-auto inline-flex items-center self-start gap-2 px-7 py-4 rounded-full font-semibold text-body ${o.accent} hover:scale-[1.03] transition-transform`}
                >
                  {o.cta} →
                </Link>
              </div>
            </TiltCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
