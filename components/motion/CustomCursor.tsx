"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "pointer" | "text" | "drag";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    setMounted(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    // Current visual state (for lerping size)
    let mode: CursorMode = "default";
    let targetRingW = 44;
    let targetRingH = 44;
    let targetRingRadius = 22;
    let targetDotSize = 10;
    let targetRingFill = 0;
    let curRingW = 44;
    let curRingH = 44;
    let curRingRadius = 22;
    let curDotSize = 10;
    let curRingFill = 0;
    let labelText = "";

    const setMode = (next: CursorMode) => {
      mode = next;
      switch (mode) {
        case "pointer":
          targetRingW = 64;
          targetRingH = 64;
          targetRingRadius = 32;
          targetDotSize = 4;
          targetRingFill = 0.15;
          labelText = "";
          break;
        case "text":
          targetRingW = 80;
          targetRingH = 2;
          targetRingRadius = 1;
          targetDotSize = 0;
          targetRingFill = 1;
          labelText = "";
          break;
        case "drag":
          targetRingW = 72;
          targetRingH = 72;
          targetRingRadius = 36;
          targetDotSize = 0;
          targetRingFill = 0.18;
          labelText = "DRAG";
          break;
        default:
          targetRingW = 44;
          targetRingH = 44;
          targetRingRadius = 22;
          targetDotSize = 10;
          targetRingFill = 0;
          labelText = "";
      }
      if (labelRef.current) labelRef.current.textContent = labelText;
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const handleOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const cursorHint = t.closest<HTMLElement>(
        "a, button, [data-cursor]"
      );
      if (!cursorHint) {
        setMode("default");
        return;
      }
      const hint = cursorHint.getAttribute("data-cursor");
      if (hint === "text") setMode("text");
      else if (hint === "drag") setMode("drag");
      else setMode("pointer");
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let rafId = 0;
    const render = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      curRingW = lerp(curRingW, targetRingW, 0.22);
      curRingH = lerp(curRingH, targetRingH, 0.22);
      curRingRadius = lerp(curRingRadius, targetRingRadius, 0.22);
      curDotSize = lerp(curDotSize, targetDotSize, 0.28);
      curRingFill = lerp(curRingFill, targetRingFill, 0.22);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        ringRef.current.style.width = `${curRingW}px`;
        ringRef.current.style.height = `${curRingH}px`;
        ringRef.current.style.borderRadius = `${curRingRadius}px`;
        ringRef.current.style.backgroundColor = `rgba(200,255,61,${curRingFill * 0.35})`;
        ringRef.current.style.borderColor = `rgba(200,255,61,${
          mode === "text" ? 0.9 : 0.55
        })`;
      }
      if (dotRef.current) {
        dotRef.current.style.width = `${curDotSize}px`;
        dotRef.current.style.height = `${curDotSize}px`;
        dotRef.current.style.opacity = curDotSize < 1 ? "0" : "1";
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full bg-[var(--lime-acid)] pointer-events-none z-[99999]"
        style={{ width: 10, height: 10, mixBlendMode: "difference" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 border pointer-events-none z-[99998] flex items-center justify-center"
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          borderColor: "rgba(200,255,61,0.55)",
        }}
        aria-hidden="true"
      >
        <span
          ref={labelRef}
          className="font-mono text-[10px] tracking-widest text-[var(--lime-acid)] font-bold"
        />
      </div>
    </>
  );
}
