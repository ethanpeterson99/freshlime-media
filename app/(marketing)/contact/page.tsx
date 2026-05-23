import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact — Book a Strategy Call",
  description:
    "Book a free 20-minute strategy call with Fresh Lime Media. Talk SEO, AEO, and AI automation for your service business. Or send a message — we reply in 4 business hours.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fresh Lime Media",
  email: "ethan@freshlimemedia.com",
  url: "https://freshlimemedia.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saratoga Springs",
    addressRegion: "UT",
    postalCode: "84045",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Ethan Peterson",
  },
  priceRange: "$1,500–$15,000",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <PageHero
        eyebrow="LET'S TALK"
        title="20 minutes. No pitch. Just a real conversation."
        subtitle="Two ways to start: book a call directly on the calendar below, or send a message and I'll reply within 4 business hours."
      />

      <section className="bg-[var(--off-white)] py-24">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)]">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16">
            {/* Left: methods + form */}
            <div className="flex flex-col gap-12">
              <Reveal>
                <div className="bg-[var(--paper)] rounded-3xl p-8 border border-[var(--mist)]/30">
                  <p className="text-caption font-mono uppercase tracking-widest text-[var(--lime-deep)] mb-4">
                    EMAIL
                  </p>
                  <a
                    href="mailto:ethan@freshlimemedia.com"
                    className="font-display font-bold text-display-sm text-[var(--ink)] hover:text-[var(--lime-deep)] transition-colors break-all"
                  >
                    ethan@freshlimemedia.com
                  </a>
                  <p className="mt-3 text-body-sm text-[var(--smoke)]">
                    We reply within 4 business hours.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <p className="text-caption font-mono uppercase tracking-widest text-[var(--lime-deep)] mb-6">
                    OR SEND A MESSAGE
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            {/* Right: calendar embed placeholder */}
            <Reveal>
              <div className="rounded-3xl bg-[var(--paper)] border border-[var(--mist)]/30 overflow-hidden h-full min-h-[600px] flex flex-col">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-[var(--mist)]/40">
                  <span className="w-2 h-2 rounded-full bg-[var(--lime-acid)]" />
                  <p className="font-mono text-caption uppercase tracking-widest text-[var(--smoke)]">
                    Live Calendar · 20-min strategy call
                  </p>
                </div>
                {/* Cal.com embed placeholder */}
                <div
                  data-cal-link="ethan-peterson/strategy-call"
                  className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-[var(--off-white)]"
                >
                  <p className="font-display font-bold text-display-sm text-[var(--ink)] mb-4">
                    Book directly →
                  </p>
                  <p className="text-body text-[var(--smoke)] mb-8 max-w-sm">
                    Pick a 20-minute slot that works. No prep needed. Bring your
                    questions; I&rsquo;ll bring the honest answers.
                  </p>
                  <a
                    href="https://cal.com/ethan-peterson/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-[var(--lime-acid)] text-[var(--ink)] font-semibold text-body shadow-md hover:scale-[1.03] transition-transform"
                  >
                    Open calendar →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
