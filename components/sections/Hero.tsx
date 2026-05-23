import Link from "next/link";
import ScrollCanvas from "@/components/motion/ScrollCanvas";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/motion/TextReveal";

const trustLogos = [
  "Pickled Court",
  "Utah Sauna Co.",
  "Mori Medical",
  "Legacy Wholesale Flooring",
  "EBP Designs",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Scroll-driven flow field canvas — full bleed */}
      <ScrollCanvas />

      {/* Subtle vignette + lime accent */}
      <div
        className="absolute inset-0 -z-[5] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(200,255,61,0.03) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-[var(--page-gutter)] w-full relative z-10">
        <div className="flex flex-col gap-8 max-w-5xl">
          {/* Eyebrow */}
          <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-acid)]">
            <span data-cursor="text">SEO · AEO · AI AUTOMATION</span>
          </p>

          {/* Headline */}
          <div data-cursor="text">
            <TextReveal
              as="h1"
              className="font-display font-black text-[clamp(2.5rem,7vw,5.5rem)] text-[var(--off-white)] leading-[0.95] tracking-tight"
            >
              Get found on Google. Get cited by AI. Get more calls than you can answer.
            </TextReveal>
          </div>

          {/* Subhead */}
          <p className="text-body-lg text-[var(--mist)] max-w-2xl leading-relaxed">
            Fresh Lime Media is a boutique studio for service businesses that
            refuse to disappear when search moves from blue links to AI answers.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <MagneticButton
              as="a"
              href="/services/aeo"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-[var(--lime-acid)] text-[var(--ink)] font-semibold text-body shadow-[0_8px_32px_rgba(200,255,61,0.25)]"
            >
              Run your free AI visibility audit →
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-[var(--mist)]/40 text-[var(--off-white)] font-medium text-body hover:border-[var(--lime-acid)] transition-colors"
            >
              Book a 20-min strategy call
            </MagneticButton>
          </div>

          {/* Trust strip */}
          <div className="flex flex-col gap-3 pt-12">
            <p className="text-caption font-mono text-[var(--mist)]/70 uppercase tracking-widest font-medium">
              Trusted by
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {trustLogos.map((name) => (
                <Link
                  href="/work"
                  key={name}
                  className="text-body-sm font-medium text-[var(--mist)] hover:text-[var(--lime-acid)] transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--mist)]/50 text-caption font-mono uppercase tracking-widest flex flex-col items-center gap-2 pointer-events-none">
        <span>scroll</span>
        <span className="block h-8 w-px bg-[var(--mist)]/40" />
      </div>
    </section>
  );
}
