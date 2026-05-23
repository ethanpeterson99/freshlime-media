import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ServiceCTA from "@/components/sections/ServiceCTA";
import FAQ, { FAQJsonLd } from "@/components/sections/FAQ";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import CountUp from "@/components/motion/CountUp";
import TiltCard from "@/components/ui/TiltCard";
import { automationFaqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "AI Automation for Service Businesses — Lead Capture on Autopilot",
  description:
    "GoHighLevel workflow builds, AI receptionists, automated reporting dashboards, and CRM integration. We build the pipeline that turns clicks into calls into customers.",
};

const builds = [
  {
    name: "GoHighLevel workflow builds",
    desc: "Lead capture forms, multi-step nurture sequences, SMS+email cadences, pipeline automation, and team assignments. Cleanly built. Documented. Yours to keep.",
  },
  {
    name: "AI receptionist & chat agents",
    desc: "Voice + chat agents that qualify leads, answer FAQs, and book appointments directly to your calendar. Human handoff is one tap.",
  },
  {
    name: "Automated reporting dashboards",
    desc: "Live dashboards pulling SEO rankings, AEO citations, GA4 traffic, CRM pipeline, and ad spend into one view your team actually opens.",
  },
  {
    name: "CRM integration & setup",
    desc: "GHL, HubSpot, or Pipedrive — set up properly with the right pipelines, fields, and integrations from day one.",
  },
];

const stack = [
  ["GoHighLevel", "CRM + automation backbone"],
  ["Anthropic API", "Claude for AI agents + content"],
  ["n8n", "Custom workflow orchestration"],
  ["Cal.com", "Booking + calendar integration"],
  ["Vapi / Retell", "AI voice agents"],
  ["Resend", "Transactional email"],
  ["Supabase", "Custom data + auth"],
  ["Vercel", "Edge + serverless hosting"],
];

export default function AIAutomationPage() {
  return (
    <>
      <FAQJsonLd items={automationFaqs} />
      <PageHero
        eyebrow="AI AUTOMATION"
        title="The pipeline that turns clicks into customers — running while you sleep."
        subtitle="GoHighLevel builds, AI receptionists, automated reporting, and bespoke API workflows. Built clean. Documented. Yours to keep."
        stats={[
          { value: "$14K", label: "best client MRR from pipeline" },
          { value: "$3.5K", label: "starting project" },
          { value: "90d", label: "typical launch" },
          { value: "24/7", label: "lead qualification" },
        ]}
      />

      {/* What we build */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-4">
            WHAT WE BUILD
          </p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-12"
          >
            Four kinds of builds.
          </TextReveal>
          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            {builds.map((b) => (
              <TiltCard
                key={b.name}
                maxTilt={3}
                className="rounded-2xl bg-[var(--paper)] border border-[var(--mist)]/30 p-8 h-full"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="font-display font-bold text-display-sm text-[var(--ink)]">
                    {b.name}
                  </h3>
                  <p className="text-body text-[var(--smoke)] leading-relaxed">{b.desc}</p>
                </div>
              </TiltCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-[var(--paper)] py-24">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-deep)] mb-4">
            THE STACK
          </p>
          <TextReveal
            as="h2"
            className="font-display font-black text-display-md md:text-display-lg leading-tight text-[var(--ink)] mb-12 max-w-3xl"
          >
            We bring the tooling. You keep it.
          </TextReveal>
          <Reveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stack.map(([name, role]) => (
              <div key={name} className="rounded-xl bg-[var(--off-white)] border border-[var(--mist)]/30 p-5">
                <p className="font-mono text-body font-bold text-[var(--ink)]">{name}</p>
                <p className="text-caption text-[var(--smoke)] mt-1">{role}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured example */}
      <section className="bg-[var(--deep-night)] text-[var(--off-white)] py-32">
        <div className="max-w-5xl mx-auto px-[var(--page-gutter)]">
          <p className="text-caption font-mono uppercase tracking-[0.25em] text-[var(--lime-acid)] mb-6">
            FEATURED BUILD
          </p>
          <h2 className="font-display font-black text-[clamp(2rem,5vw,3.75rem)] leading-tight mb-8 tracking-tight">
            Pickled Court: $14K MRR from a 90-day automated pipeline.
          </h2>
          <p className="text-body-lg text-[var(--mist)] mb-12 max-w-2xl leading-relaxed">
            We built the lead capture, qualification, and quote-generation pipeline that
            grew Pickled Court from manual outreach to a recurring MRR machine. AI
            qualifies inbound. Humans close.
          </p>
          <div className="grid md:grid-cols-3 gap-8 border-t border-white/15 pt-10 mb-10">
            <div>
              <p className="font-display font-black text-display-lg leading-none text-[var(--lime-acid)]">
                $<CountUp to={14} suffix="K" />
              </p>
              <p className="text-caption font-mono uppercase tracking-widest text-[var(--mist)] mt-2">
                MRR added
              </p>
            </div>
            <div>
              <p className="font-display font-black text-display-lg leading-none text-[var(--lime-acid)]">
                <CountUp to={90} suffix="d" />
              </p>
              <p className="text-caption font-mono uppercase tracking-widest text-[var(--mist)] mt-2">
                to launch
              </p>
            </div>
            <div>
              <p className="font-display font-black text-display-lg leading-none text-[var(--lime-acid)]">
                <CountUp to={4} suffix=".2x" />
              </p>
              <p className="text-caption font-mono uppercase tracking-widest text-[var(--mist)] mt-2">
                lead → quote conversion
              </p>
            </div>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-body font-semibold text-[var(--lime-acid)] hover:text-[var(--off-white)] transition-colors"
          >
            See all builds →
          </Link>
        </div>
      </section>

      <FAQ
        eyebrow="AUTOMATION QUESTIONS"
        headline="What people ask before scoping a build."
        items={automationFaqs}
        background="paper"
      />

      <ServiceCTA
        headline="Want to see what your pipeline could look like?"
        sub="20-min scoping call. We'll sketch the workflow on the call and send you a build estimate within 24 hours."
        primaryLabel="Scope a build →"
        primaryHref="/contact"
      />
    </>
  );
}
