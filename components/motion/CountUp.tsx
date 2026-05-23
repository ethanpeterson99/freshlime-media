"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function CountUp({
  to,
  duration = 1600,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setValue(to);
      return;
    }

    let raf = 0;
    let start = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animate = (t: number) => {
              if (!start) start = t;
              const elapsed = t - start;
              const p = Math.min(1, elapsed / duration);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(to * eased);
              if (p < 1) raf = requestAnimationFrame(animate);
            };
            raf = requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
