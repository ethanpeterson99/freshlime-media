"use client";

import Link from "next/link";

const footerNav = {
  Services: [
    { label: "SEO Strategy", href: "/services/seo" },
    { label: "AEO & AI Visibility", href: "/services/aeo" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "All services", href: "/services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  Tools: [
    { label: "Free AEO Audit", href: "/services/aeo" },
    { label: "Book a Call", href: "/contact" },
  ],
};

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/fresh-lime-media" },
  { label: "X / Twitter", href: "https://x.com/freshlimemedia" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--deep-night)] text-[var(--mist)]">
      {/* Lime hairline */}
      <div className="h-px bg-[var(--lime-acid)] opacity-60" />

      <div className="max-w-7xl mx-auto px-[var(--page-gutter)] pt-20 pb-12">
        {/* Big wordmark */}
        <p
          className="font-display font-black text-[clamp(3rem,10vw,8rem)] leading-none text-[var(--off-white)] mb-16 tracking-tight"
          aria-hidden="true"
        >
          Fresh<br />Lime<span className="text-[var(--lime-acid)]">.</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Nav columns */}
          {Object.entries(footerNav).map(([section, links]) => (
            <div key={section}>
              <p className="text-caption uppercase tracking-widest text-[var(--smoke)] font-semibold mb-4">
                {section}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-[var(--mist)] hover:text-[var(--lime-pulp)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + socials */}
          <div>
            <p className="text-caption uppercase tracking-widest text-[var(--smoke)] font-semibold mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-2 text-body-sm">
              <li>
                <a
                  href="mailto:hello@freshlimemedia.com"
                  className="text-[var(--mist)] hover:text-[var(--lime-pulp)] transition-colors"
                >
                  hello@freshlimemedia.com
                </a>
              </li>
              <li className="text-[var(--smoke)]">Saratoga Springs, UT</li>
              <li className="pt-4 flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-caption text-[var(--smoke)] hover:text-[var(--lime-acid)] transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-caption uppercase tracking-widest text-[var(--smoke)] font-semibold mb-3">
                Stay sharp
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-body-sm text-[var(--off-white)] placeholder:text-[var(--smoke)] focus:outline-none focus:border-[var(--lime-acid)] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[var(--lime-acid)] text-[var(--ink)] text-body-sm font-semibold hover:brightness-105 transition-all shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-caption text-[var(--smoke)]">
            © {year} Fresh Lime Media LLC · Saratoga Springs, UT
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="text-caption text-[var(--smoke)] hover:text-[var(--mist)] transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-caption text-[var(--smoke)] hover:text-[var(--mist)] transition-colors">
              Terms
            </Link>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-caption text-[var(--smoke)] italic font-display">
          &ldquo;Built by Fresh Lime. Of course it ranks. Of course it&apos;s cited.&rdquo;
        </p>
      </div>
    </footer>
  );
}
