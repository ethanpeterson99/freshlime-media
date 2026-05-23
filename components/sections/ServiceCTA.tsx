import Link from "next/link";
import MouseSpotlight from "@/components/motion/MouseSpotlight";

interface ServiceCTAProps {
  headline?: string;
  sub?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function ServiceCTA({
  headline = "Ready to see what's possible?",
  sub = "Free audit in 60 seconds. No commitment. No demo trap.",
  primaryLabel = "Run my audit →",
  primaryHref = "/services/aeo",
  secondaryLabel = "Book a strategy call",
  secondaryHref = "/contact",
}: ServiceCTAProps) {
  return (
    <section className="relative bg-[var(--deep-night)] text-[var(--off-white)] py-32 overflow-hidden">
      <MouseSpotlight />
      <div className="max-w-4xl mx-auto px-[var(--page-gutter)] relative text-center">
        <h2 className="font-display font-black text-[clamp(2rem,5vw,3.75rem)] leading-tight tracking-tight mb-6">
          {headline}
        </h2>
        <p className="text-body-lg text-[var(--mist)] mb-10 max-w-xl mx-auto">{sub}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center px-7 py-4 rounded-full bg-[var(--lime-acid)] text-[var(--ink)] font-semibold text-body shadow-[0_8px_32px_rgba(200,255,61,0.25)] hover:scale-[1.03] transition-transform"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center px-7 py-4 rounded-full border border-[var(--mist)]/40 text-[var(--off-white)] font-medium text-body hover:border-[var(--lime-acid)] transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
