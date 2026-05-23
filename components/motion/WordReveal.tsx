"use client";

import React, { useEffect, useRef } from "react";

type IntrinsicTag = keyof React.JSX.IntrinsicElements;

interface WordRevealProps {
  text: string;
  className?: string;
  staggerMs?: number;
  as?: IntrinsicTag;
}

export default function WordReveal({
  text,
  className = "",
  staggerMs = 80,
  as: Tag = "span",
}: WordRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = containerRef.current;
    if (!el) return;

    const spans = el.querySelectorAll<HTMLSpanElement>("[data-word]");
    spans.forEach((span, i) => {
      span.style.opacity = "0";
      span.style.transform = "translateY(12px)";
      span.style.transition = `opacity 0.5s ease ${i * staggerMs}ms, transform 0.5s ease ${i * staggerMs}ms`;
    });

    // Trigger after mount
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        spans.forEach((span) => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        });
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [staggerMs]);

  const words = text.split(" ");

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={containerRef} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} data-word className="inline-block">
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
