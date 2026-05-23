import TextReveal from "@/components/motion/TextReveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  stats?: Array<{ label: string; value: string }>;
}

export default function PageHero({ eyebrow, title, subtitle, stats }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-[var(--off-white)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 20%, rgba(200,255,61,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-[var(--page-gutter)] relative">
        <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-8">
          {eyebrow}
        </p>
        <div data-cursor="text">
          <TextReveal
            as="h1"
            className="font-display font-black text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-tight text-[var(--ink)] max-w-5xl"
          >
            {title}
          </TextReveal>
        </div>
        {subtitle && (
          <p className="mt-8 text-body-lg text-[var(--smoke)] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {stats && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--mist)]/40 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-black text-display-md text-[var(--ink)] leading-none">
                  {s.value}
                </p>
                <p className="text-caption font-mono uppercase tracking-widest text-[var(--smoke)] mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
