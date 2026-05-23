"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--off-white)]/95 backdrop-blur-sm border-b border-[var(--mist)]/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)] flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-xl font-bold text-[var(--ink)] hover:text-[var(--lime-deep)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Fresh Lime<span className="text-[var(--lime-deep)]">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-sm font-medium text-[var(--smoke)] hover:text-[var(--ink)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/resources/tools/aeo-audit"
              className="text-body-sm font-medium px-4 py-2 rounded-full border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--lime-acid)] transition-all duration-200"
            >
              Free AEO Audit
            </Link>
            <Link
              href="/contact"
              className="text-body-sm font-semibold px-4 py-2 rounded-full bg-[var(--lime-acid)] text-[var(--ink)] hover:scale-[1.02] hover:brightness-105 transition-all duration-200 shadow-sm"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-[2px] w-6 bg-[var(--ink)] transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-[var(--ink)] transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-[var(--ink)] transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--off-white)] flex flex-col justify-center px-[var(--page-gutter)] transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-display-md font-bold text-[var(--ink)] hover:text-[var(--lime-deep)] transition-colors"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.4s ease ${i * 60}ms, opacity 0.4s ease ${i * 60}ms, color 0.2s ease`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 mt-12">
          <Link
            href="/resources/tools/aeo-audit"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center font-medium py-3 rounded-full border border-[var(--ink)] text-[var(--ink)]"
          >
            Free AEO Audit
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center font-semibold py-3 rounded-full bg-[var(--lime-acid)] text-[var(--ink)]"
          >
            Book a Call
          </Link>
        </div>

        <p className="mt-12 text-caption text-[var(--smoke)]">
          Built by Fresh Lime. Of course it ranks.
        </p>
      </div>
    </>
  );
}
