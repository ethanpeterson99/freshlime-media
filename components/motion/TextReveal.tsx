"use client";

import { useEffect, useRef, ReactNode, createElement } from "react";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  stagger?: number;
  delay?: number;
  reveal?: ReactNode; // optional wrapped content for non-string children — unused
}

export default function TextReveal({
  children,
  as = "h2",
  className = "",
  stagger = 60,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>("[data-word]");
    if (!words.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((w, i) => {
              w.style.transitionDelay = `${delay + i * stagger}ms`;
              w.style.clipPath = "inset(0 0% 0 0)";
              w.style.opacity = "1";
              w.style.transform = "translateY(0)";
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger]);

  const words = children.split(" ");

  return createElement(
    as,
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: ref as any,
      className,
    },
    words.map((word, i) => (
      <span
        key={i}
        data-word
        className="inline-block whitespace-pre will-change-transform"
        style={{
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
          transform: "translateY(0.2em)",
          transition:
            "clip-path 0.9s cubic-bezier(.2,.7,.2,1), opacity 0.6s ease, transform 0.9s cubic-bezier(.2,.7,.2,1)",
        }}
      >
        {word}
        {i < words.length - 1 ? " " : ""}
      </span>
    ))
  );
}
