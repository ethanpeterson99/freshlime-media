"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export default function ScrambleText({
  text,
  className = "",
  duration = 360,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(0);
  const startRef = useRef(0);

  useEffect(() => {
    setDisplay(text);
  }, [text]);

  const scramble = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    cancelAnimationFrame(rafRef.current);
    startRef.current = 0;
    const len = text.length;

    const tick = (t: number) => {
      if (!startRef.current) startRef.current = t;
      const p = Math.min(1, (t - startRef.current) / duration);
      // Each character resolves at a staggered point in [0, 1]
      const out = new Array(len);
      for (let i = 0; i < len; i++) {
        const resolveAt = (i / len) * 0.8;
        if (p > resolveAt + 0.2 || text[i] === " ") {
          out[i] = text[i];
        } else {
          out[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(out.join(""));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <span
      className={className}
      onMouseEnter={scramble}
      onFocus={scramble}
      style={{ display: "inline-block" }}
    >
      {display}
    </span>
  );
}
