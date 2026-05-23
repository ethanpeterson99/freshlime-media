"use client";

import { useEffect, useRef } from "react";

interface MouseSpotlightProps {
  className?: string;
  radius?: number;
  color?: string;
}

export default function MouseSpotlight({
  className = "",
  radius = 400,
  color = "rgba(200, 255, 61, 0.04)",
}: MouseSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    const parent = el.parentElement;
    if (!parent) return;

    let rafId = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    const update = () => {
      el.style.background = `radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${color}, transparent)`;
      rafId = 0;
    };

    parent.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(rafId);
      parent.removeEventListener("mousemove", onMove);
    };
  }, [radius, color]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
