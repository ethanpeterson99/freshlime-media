"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  stagger?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.setAttribute("data-revealed", "true");
            if (stagger) {
              const kids = el.children;
              for (let i = 0; i < kids.length; i++) {
                (kids[i] as HTMLElement).style.transitionDelay = `${delay + i * 80}ms`;
                (kids[i] as HTMLElement).setAttribute("data-reveal-child", "true");
              }
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} data-reveal className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
