"use client";

import { useEffect, useRef, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glint?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 6,
  glint = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    let rafId = 0;
    let curRX = 0;
    let curRY = 0;
    let targetRX = 0;
    let targetRY = 0;
    let curGX = 50;
    let curGY = 50;
    let targetGX = 50;
    let targetGY = 50;
    let active = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      curRX = lerp(curRX, targetRX, 0.18);
      curRY = lerp(curRY, targetRY, 0.18);
      curGX = lerp(curGX, targetGX, 0.18);
      curGY = lerp(curGY, targetGY, 0.18);

      el.style.transform = `perspective(800px) rotateX(${curRX}deg) rotateY(${curRY}deg)`;
      el.style.boxShadow = `${-curRY * 1.6}px ${curRX * 1.6}px 32px rgba(14,18,8,0.10)`;

      if (glintRef.current) {
        glintRef.current.style.background = `radial-gradient(600px circle at ${curGX}% ${curGY}%, rgba(200,255,61,0.18), transparent 40%)`;
      }

      if (active || Math.abs(curRX) + Math.abs(curRY) > 0.02) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const rx = (e.clientX - rect.left) / rect.width;
      const ry = (e.clientY - rect.top) / rect.height;
      targetRY = (rx - 0.5) * 2 * maxTilt;
      targetRX = -(ry - 0.5) * 2 * maxTilt;
      targetGX = rx * 100;
      targetGY = ry * 100;
      if (!rafId) rafId = requestAnimationFrame(tick);
    };
    const onEnter = () => {
      active = true;
      if (glintRef.current) glintRef.current.style.opacity = "1";
      if (!rafId) rafId = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      active = false;
      targetRX = 0;
      targetRY = 0;
      if (glintRef.current) glintRef.current.style.opacity = "0";
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [maxTilt]);

  return (
    <div
      ref={ref}
      className={`relative will-change-transform transition-shadow duration-300 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {glint && (
        <div
          ref={glintRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
        />
      )}
      {children}
    </div>
  );
}
