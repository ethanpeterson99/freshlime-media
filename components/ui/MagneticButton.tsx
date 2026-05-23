"use client";

import { useEffect, useRef, ReactNode, ComponentPropsWithoutRef } from "react";

type MagneticButtonProps<T extends "a" | "button"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  strength?: number;
} & ComponentPropsWithoutRef<T>;

export default function MagneticButton<T extends "a" | "button" = "button">({
  as,
  children,
  className,
  strength = 1,
  ...rest
}: MagneticButtonProps<T>) {
  const wrapRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    const content = contentRef.current;
    if (!el || !content) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let rafId = 0;
    let active = false;

    const MAX_X = 12 * strength;
    const MAX_Y = 8 * strength;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const rx = Math.max(-1, Math.min(1, dx / (rect.width / 2)));
      const ry = Math.max(-1, Math.min(1, dy / (rect.height / 2)));
      targetX = rx * MAX_X;
      targetY = ry * MAX_Y;
    };

    const handleLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      curX = lerp(curX, targetX, 0.18);
      curY = lerp(curY, targetY, 0.18);
      content.style.transform = `translate(${curX}px, ${curY}px)`;
      if (active || Math.abs(curX) + Math.abs(curY) > 0.05) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const onEnter = () => {
      active = true;
      if (!rafId) rafId = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      active = false;
      handleLeave();
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  const Tag = (as ?? "button") as "a" | "button";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props = rest as any;

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={wrapRef as any}
      className={className}
      {...props}
    >
      <span ref={contentRef} className="inline-flex items-center gap-2 will-change-transform">
        {children}
      </span>
    </Tag>
  );
}
