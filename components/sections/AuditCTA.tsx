"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MouseSpotlight from "@/components/motion/MouseSpotlight";
import MagneticButton from "@/components/ui/MagneticButton";

const schema = z.object({
  url: z
    .string()
    .min(1, "URL required")
    .refine(
      (v) => /^([\w-]+\.)+[\w-]{2,}/.test(v) || /^https?:\/\//.test(v),
      "Enter a valid URL"
    ),
  email: z.string().email("Enter a valid email"),
});

type FormValues = z.infer<typeof schema>;

const checks = [
  "Entity recognition — does ChatGPT know what your business actually does?",
  "Schema coverage — Organization, FAQ, Service, LocalBusiness structured data",
  "Citation visibility — what's already being said about you in AI answers",
];

export default function AuditCTA() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setState("submitting");
    try {
      const url = data.url.startsWith("http") ? data.url : `https://${data.url}`;
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email: data.email }),
      });
      if (!res.ok) throw new Error("failed");
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  return (
    <section className="relative bg-[var(--deep-night)] text-[var(--off-white)] py-32 overflow-hidden">
      <MouseSpotlight />
      <div className="max-w-7xl mx-auto px-[var(--page-gutter)] relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-acid)] mb-6">
              FREE AEO AUDIT
            </p>
            <h2 className="font-display font-black text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight mb-8">
              See exactly how AI sees your business — in 60 seconds.
            </h2>
            <ul className="flex flex-col gap-3 mb-10">
              {checks.map((c) => (
                <li key={c} className="flex gap-3 items-start text-body text-[var(--mist)]">
                  <span className="text-[var(--lime-acid)] mt-1.5">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 max-w-md"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="audit-url" className="sr-only">
                  Website URL
                </label>
                <input
                  id="audit-url"
                  type="text"
                  placeholder="yourbusiness.com"
                  {...register("url")}
                  className="w-full px-5 py-4 rounded-full bg-white/5 border border-white/15 text-body text-[var(--off-white)] placeholder:text-[var(--smoke)] focus:outline-none focus:border-[var(--lime-acid)] transition-colors font-mono"
                />
                {errors.url && (
                  <p className="text-caption text-[var(--coral)] pl-5">{errors.url.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="audit-email" className="sr-only">
                  Email
                </label>
                <input
                  id="audit-email"
                  type="email"
                  placeholder="you@business.com"
                  {...register("email")}
                  className="w-full px-5 py-4 rounded-full bg-white/5 border border-white/15 text-body text-[var(--off-white)] placeholder:text-[var(--smoke)] focus:outline-none focus:border-[var(--lime-acid)] transition-colors"
                />
                {errors.email && (
                  <p className="text-caption text-[var(--coral)] pl-5">{errors.email.message}</p>
                )}
              </div>

              <MagneticButton
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-[var(--lime-acid)] text-[var(--ink)] font-semibold text-body shadow-[0_8px_32px_rgba(200,255,61,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === "submitting"
                  ? "Queueing..."
                  : state === "success"
                  ? "Check your inbox ✓"
                  : "Run my audit →"}
              </MagneticButton>

              {state === "error" && (
                <p className="text-caption text-[var(--coral)]">
                  Something went wrong. Email ethan@freshlimemedia.com directly.
                </p>
              )}

              <p className="text-caption font-mono text-[var(--smoke)] mt-2">
                No credit card. No demo trap. Just a real recommendation.
              </p>
            </form>
          </div>

          {/* Terminal mockup */}
          <div className="relative">
            <div className="rounded-2xl border border-white/15 bg-[#070b03] shadow-2xl overflow-hidden font-mono text-body-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <span className="w-3 h-3 rounded-full bg-[var(--coral)]/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-[var(--lime-acid)]/70" />
                <span className="ml-3 text-caption text-[var(--mist)]">
                  freshlime ~ aeo-audit yourbusiness.com
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2 text-[var(--mist)] leading-relaxed">
                <p>
                  <span className="text-[var(--lime-acid)]">$</span> aeo-audit
                  yourbusiness.com
                </p>
                <p className="text-[var(--smoke)]">› Probing ChatGPT...</p>
                <p className="text-[var(--smoke)]">› Probing Perplexity...</p>
                <p className="text-[var(--smoke)]">› Probing Claude...</p>
                <p className="mt-2">
                  <span className="text-[var(--coral)]">✗</span> Entity recognition:{" "}
                  <span className="text-[var(--off-white)]">unclear</span>
                </p>
                <p>
                  <span className="text-[var(--coral)]">✗</span> Schema coverage:{" "}
                  <span className="text-[var(--off-white)]">2 / 8 types</span>
                </p>
                <p>
                  <span className="text-yellow-400">!</span> Citations in ChatGPT:{" "}
                  <span className="text-[var(--off-white)]">3 mentions</span>
                </p>
                <p>
                  <span className="text-[var(--lime-acid)]">✓</span> Citations in Perplexity:{" "}
                  <span className="text-[var(--off-white)]">12 mentions</span>
                </p>
                <p className="mt-3 text-[var(--lime-acid)]">
                  RECOMMENDATION: add LocalBusiness + FAQ schema,
                </p>
                <p className="text-[var(--lime-acid)]">
                  publish 4 entity-anchor articles, build llms.txt.
                </p>
                <p className="mt-2 text-[var(--smoke)]">
                  Full report → emailed to you in 60s
                </p>
                <p className="mt-3 text-[var(--lime-acid)]">
                  $ <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
