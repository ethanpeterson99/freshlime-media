import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const steps = [
  {
    num: "01",
    name: "Audit",
    when: "Week 1",
    desc: "We map your current visibility, schema coverage, and AI citation footprint.",
    artifact: "→ 24-page audit + scorecard",
  },
  {
    num: "02",
    name: "Roadmap",
    when: "Week 2",
    desc: "We prioritize the work that will move ranking, citations, and revenue fastest.",
    artifact: "→ 90-day plan with milestones",
  },
  {
    num: "03",
    name: "Execute",
    when: "Weeks 3–12",
    desc: "We ship content, schema, technical fixes, and automation builds — every week.",
    artifact: "→ Weekly progress log",
  },
  {
    num: "04",
    name: "Report",
    when: "Monthly",
    desc: "We show what moved, what didn't, and what we're changing next month.",
    artifact: "→ Live dashboard + 30-min review",
  },
];

export default function Process() {
  return (
    <section className="bg-[var(--off-white)] py-32 relative">
      <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
        <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
          THE PROCESS
        </p>
        <TextReveal
          as="h2"
          className="font-display font-black text-[clamp(2rem,5vw,3.75rem)] leading-tight tracking-tight mb-20 text-[var(--ink)] max-w-3xl"
        >
          Boring on the inside. Boring is what works.
        </TextReveal>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            aria-hidden="true"
            className="absolute top-12 left-0 right-0 hidden md:block h-px bg-gradient-to-r from-transparent via-[var(--lime-acid)] to-transparent opacity-50"
          />

          <Reveal stagger className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col gap-3 relative">
                <div className="relative w-12 h-12 rounded-full bg-[var(--ink)] flex items-center justify-center text-[var(--lime-acid)] font-mono text-body-sm font-bold z-10">
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-display-sm text-[var(--ink)] mt-2">
                  {step.name}
                </h3>
                <p className="text-caption font-mono uppercase tracking-widest text-[var(--lime-deep)]">
                  {step.when}
                </p>
                <p className="text-body-sm text-[var(--smoke)] leading-relaxed mt-2">
                  {step.desc}
                </p>
                <p className="text-caption font-mono text-[var(--smoke)] mt-auto pt-4 border-t border-[var(--mist)]/40">
                  {step.artifact}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
