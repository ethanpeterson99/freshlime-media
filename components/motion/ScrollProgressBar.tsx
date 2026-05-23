"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      el.style.transform = `scaleX(${p})`;
      el.style.opacity = window.scrollY < window.innerHeight * 0.05 ? "0" : "1";
    };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[99997] pointer-events-none"
    >
      <div
        ref={ref}
        className="h-full w-full origin-left bg-[var(--lime-acid)] transition-opacity duration-300"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
