"use client";

import { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  eyebrow?: string;
  headline?: string;
  items: FAQItem[];
  background?: "off-white" | "paper";
}

export default function FAQ({
  eyebrow = "BEFORE YOU ASK",
  headline = "Frequently asked.",
  items,
  background = "paper",
}: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const bg = background === "paper" ? "bg-[var(--paper)]" : "bg-[var(--off-white)]";

  return (
    <section className={`${bg} py-32`}>
      <div className="max-w-4xl mx-auto px-[var(--page-gutter)]">
        <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-6">
          {eyebrow}
        </p>
        <h2 className="font-display font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-[var(--ink)] mb-12">
          {headline}
        </h2>

        <div className="flex flex-col">
          {items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className="border-b border-[var(--mist)]/40 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-6 py-6 group"
                  aria-expanded={open}
                >
                  <span className="font-display text-body-lg sm:text-display-sm font-medium text-[var(--ink)] group-hover:text-[var(--lime-deep)] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-[var(--ink)] flex items-center justify-center text-[var(--ink)] transition-transform duration-300 ${
                      open ? "rotate-180 bg-[var(--lime-acid)] border-[var(--lime-acid)]" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-content" data-open={open}>
                  <div>
                    <p className="pb-6 pr-12 text-body text-[var(--smoke)] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
