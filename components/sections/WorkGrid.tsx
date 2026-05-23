"use client";

import { useState } from "react";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import { cases, type CaseStudyCard } from "@/lib/content/cases";

type Filter = "All" | "SEO" | "AEO" | "Automation";

const filters: Filter[] = ["All", "SEO", "AEO", "Automation"];

export default function WorkGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filtered: CaseStudyCard[] =
    active === "All" ? cases : cases.filter((c) => c.services.includes(active));

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-body-sm font-medium transition-all ${
                isActive
                  ? "bg-[var(--ink)] text-[var(--lime-acid)]"
                  : "bg-[var(--paper)] text-[var(--smoke)] hover:text-[var(--ink)] border border-[var(--mist)]/40"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => (
          <Link key={c.slug} href={`/work/${c.slug}`} className="block">
            <TiltCard
              className="rounded-3xl bg-[var(--paper)] border border-[var(--mist)]/30 p-8 h-full"
            >
              <div className="flex flex-col gap-4 h-full">
                <div className="flex gap-2 flex-wrap">
                  {c.services.map((s) => (
                    <span
                      key={s}
                      className="text-caption font-mono uppercase tracking-widest px-2 py-1 rounded bg-[var(--lime-acid)]/20 text-[var(--lime-deep)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-display italic font-black text-[clamp(2.5rem,5vw,4rem)] leading-none text-[var(--ink)] tabular-nums">
                  {c.metric}
                </p>
                <p className="text-body text-[var(--smoke)]">{c.label}</p>
                <div className="border-t border-[var(--mist)]/40 pt-4 mt-2">
                  <p className="font-display font-bold text-body-lg text-[var(--ink)]">{c.client}</p>
                  <p className="text-caption font-mono uppercase tracking-wider text-[var(--smoke)] mt-1">
                    {c.industry} · {c.timeframe}
                  </p>
                </div>
                <p className="text-body-sm text-[var(--smoke)] leading-relaxed">{c.excerpt}</p>
                <p className="mt-auto pt-4 text-body-sm font-semibold text-[var(--ink)] group inline-flex items-center gap-2">
                  Read case study
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </p>
              </div>
            </TiltCard>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-body text-[var(--smoke)] py-12">
          No cases under this filter yet.
        </p>
      )}
    </div>
  );
}
