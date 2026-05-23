import Link from "next/link";
import LimeSphere from "@/components/sections/LimeSphere";

const trustLogos = [
  "Pickled Court",
  "Utah Sauna Co.",
  "Mori Medical",
  "Legacy Wholesale Flooring",
  "EBP Designs",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,255,61,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-[var(--page-gutter)] w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <p
              className="text-caption font-semibold uppercase tracking-[0.2em] text-[var(--lime-deep)]"
              aria-label="Services: SEO, AEO, AI Automation"
            >
              SEO · AEO · AI AUTOMATION
            </p>

            {/* Headline */}
            <h1 className="font-display font-black text-display-lg text-[var(--ink)] leading-[0.95]">
              Get found on Google.{" "}
              <br className="hidden sm:block" />
              Get{" "}
              <em className="not-italic italic text-[var(--lime-deep)]">cited</em>{" "}
              by AI.{" "}
              <br className="hidden sm:block" />
              Get more calls than{" "}
              <br className="hidden sm:block" />
              you can answer.
            </h1>

            {/* Subhead */}
            <p className="text-body-lg text-[var(--smoke)] max-w-xl leading-relaxed">
              Fresh Lime Media is a boutique studio for service businesses that
              refuse to disappear when search moves from blue links to AI answers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/resources/tools/aeo-audit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--lime-acid)] text-[var(--ink)] font-semibold text-body hover:scale-[1.02] hover:brightness-105 transition-all duration-200 shadow-md"
              >
                Run your free AI visibility audit →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[var(--ink)] text-[var(--ink)] font-medium text-body hover:bg-[var(--ink)] hover:text-[var(--lime-acid)] transition-all duration-200"
              >
                Book a 20-min strategy call
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-col gap-3 pt-4">
              <p className="text-caption text-[var(--smoke)] uppercase tracking-widest font-medium">
                Trusted by
              </p>
              <div className="flex flex-wrap gap-3">
                {trustLogos.map((name) => (
                  <div
                    key={name}
                    className="px-4 py-2 rounded-lg bg-[var(--paper)] border border-[var(--mist)]/50 text-caption font-medium text-[var(--smoke)]"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Lime sphere SVG */}
          <div
            className="hidden lg:flex justify-center items-center"
            aria-hidden="true"
          >
            <LimeSphere />
          </div>
        </div>

        {/* Mobile sphere — below copy */}
        <div className="lg:hidden flex justify-center mt-12" aria-hidden="true">
          <LimeSphere size={280} />
        </div>
      </div>
    </section>
  );
}
