import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Legal — Privacy & Terms",
  description:
    "Privacy policy and terms of service for Fresh Lime Media. Brief, plain English, no dark patterns.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Privacy & terms — plain English."
        subtitle="The boring but necessary stuff. Written so a human can actually read it."
      />

      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-3xl mx-auto px-[var(--page-gutter)] flex flex-col gap-16">
          <article id="privacy" className="flex flex-col gap-4">
            <p className="text-caption font-mono uppercase tracking-widest text-[var(--lime-deep)]">
              PRIVACY
            </p>
            <h2 className="font-display font-black text-display-md text-[var(--ink)]">
              What data we collect.
            </h2>
            <p className="text-body text-[var(--smoke)] leading-relaxed">
              When you fill out a form on our site, we store the data you submit
              (name, email, message, URL) and use it to reply to you and, if you
              opted in, to send infrequent updates. We use anonymized analytics
              (page views, sessions, referral source) for product improvement. We
              never sell your data. We never share your data with third parties
              except those required to deliver the service (Resend for email,
              Vercel for hosting).
            </p>
            <p className="text-body text-[var(--smoke)] leading-relaxed">
              Email{" "}
              <a
                href="mailto:ethan@freshlimemedia.com"
                className="text-[var(--ink)] underline decoration-[var(--lime-acid)] decoration-2 underline-offset-4"
              >
                ethan@freshlimemedia.com
              </a>{" "}
              to request a copy of your data or to have it deleted.
            </p>
          </article>

          <article id="terms" className="flex flex-col gap-4">
            <p className="text-caption font-mono uppercase tracking-widest text-[var(--lime-deep)]">
              TERMS
            </p>
            <h2 className="font-display font-black text-display-md text-[var(--ink)]">
              How we work together.
            </h2>
            <p className="text-body text-[var(--smoke)] leading-relaxed">
              Engagements start with a 3-month minimum and continue month-to-month
              thereafter. Invoices are issued on the 1st and due on the 15th.
              Either party can terminate with 30 days&rsquo; written notice. All
              deliverables (content, schema, code) become your property upon final
              payment. We retain the right to reference completed work in our
              portfolio unless you ask us not to.
            </p>
            <p className="text-body text-[var(--smoke)] leading-relaxed">
              We do not guarantee specific rankings, citation counts, or revenue
              outcomes — and you should be suspicious of anyone who does. We
              guarantee the work: audits delivered, content published, schema
              implemented, citations tracked.
            </p>
          </article>

          <p className="text-caption font-mono text-[var(--smoke)] pt-12 border-t border-[var(--mist)]/40">
            Fresh Lime Media LLC · Saratoga Springs, UT · Last updated May 2026
          </p>
        </div>
      </section>
    </>
  );
}
