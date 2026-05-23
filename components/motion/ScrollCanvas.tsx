"use client";

import { useEffect, useRef } from "react";

// ── 2D Simplex Noise (inline, no deps) ─────────────────────────────
// Standard gradient-lattice implementation. Permutation table is
// deterministic so frames are reproducible.
const PERM_SIZE = 256;
const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;

const grad2 = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [1, 0], [-1, 0],
  [0, 1], [0, -1], [0, 1], [0, -1],
];

function buildPerm(seed = 1337): number[] {
  const p = new Array<number>(PERM_SIZE);
  for (let i = 0; i < PERM_SIZE; i++) p[i] = i;
  let s = seed;
  for (let i = PERM_SIZE - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  const perm = new Array<number>(PERM_SIZE * 2);
  for (let i = 0; i < PERM_SIZE * 2; i++) perm[i] = p[i & (PERM_SIZE - 1)];
  return perm;
}

function makeNoise2D(seed = 1337) {
  const perm = buildPerm(seed);
  return (xin: number, yin: number): number => {
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;

    let i1: number, j1: number;
    if (x0 > y0) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }

    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;

    const ii = i & 255;
    const jj = j & 255;

    const gi0 = perm[ii + perm[jj]] % 12;
    const gi1 = perm[ii + i1 + perm[jj + j1]] % 12;
    const gi2 = perm[ii + 1 + perm[jj + 1]] % 12;

    let n0 = 0, n1 = 0, n2 = 0;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      t0 *= t0;
      n0 = t0 * t0 * (grad2[gi0][0] * x0 + grad2[gi0][1] * y0);
    }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      t1 *= t1;
      n1 = t1 * t1 * (grad2[gi1][0] * x1 + grad2[gi1][1] * y1);
    }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      t2 *= t2;
      n2 = t2 * t2 * (grad2[gi2][0] * x2 + grad2[gi2][1] * y2);
    }
    return 70 * (n0 + n1 + n2);
  };
}

// ── Particle ───────────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  px: number;
  py: number;
  c: 0 | 1; // color index
  life: number;
  maxLife: number;
}

const PARTICLE_COUNT = 420;
const NOISE_SCALE = 0.0018;
const FLOW_STRENGTH = 1.6;
const FRAME_STEP = 0.003;
const SCROLL_RANGE_PX = 1800; // scroll distance that maps to full frame range

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const noise = makeNoise2D(2027);

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Fill background once after resize
      ctx.fillStyle = "#0A0F05";
      ctx.fillRect(0, 0, width, height);
    };

    // ── Particles ──────────────────────────────────────────────
    const particles: Particle[] = [];
    const spawn = (p: Particle) => {
      p.x = Math.random() * width;
      p.y = Math.random() * height;
      p.px = p.x;
      p.py = p.y;
      p.c = Math.random() < 0.55 ? 0 : 1;
      p.life = 0;
      p.maxLife = 80 + Math.random() * 120;
    };
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p: Particle = { x: 0, y: 0, px: 0, py: 0, c: 0, life: 0, maxLife: 0 };
      spawn(p);
      particles.push(p);
    }

    resize();
    window.addEventListener("resize", resize);

    // ── Scroll-driven frame ────────────────────────────────────
    let targetFrame = 0;
    let currentFrame = 0;
    let lastScroll = window.scrollY;
    let accumulated = 0;

    const computeTargetFromScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScroll;
      lastScroll = y;
      // Scroll up (negative delta) advances, scroll down retreats — per spec
      // We interpret "scroll" as wheel motion mapped to noise time.
      accumulated += -delta * (FRAME_STEP / 4);
      // Map absolute scrollY to a baseline frame index (so refresh stays consistent)
      const baseline = (y / SCROLL_RANGE_PX) * 600 * FRAME_STEP;
      targetFrame = baseline + accumulated;
    };

    const onScroll = () => {
      computeTargetFromScroll();
      // Fade canvas as user scrolls past hero
      const fade = Math.max(0, 1 - window.scrollY / (height * 0.9));
      wrap.style.opacity = fade.toString();
      wrap.style.pointerEvents = fade < 0.05 ? "none" : "auto";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ── Render loop ────────────────────────────────────────────
    let rafId = 0;
    let lastTime = performance.now();

    const COLOR_ACID = "rgba(200, 255, 61, 0.15)";
    const COLOR_DEEP = "rgba(132, 168, 0, 0.08)";

    const render = (now: number) => {
      const dt = Math.min(now - lastTime, 33);
      lastTime = now;

      if (prefersReduced) {
        currentFrame = 0;
      } else {
        // Ease currentFrame toward target
        currentFrame += (targetFrame - currentFrame) * Math.min(1, dt * 0.006);
      }

      // Trail fade — semi-transparent overlay on top of last frame
      ctx.fillStyle = "rgba(10, 15, 5, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 0.7;
      ctx.lineCap = "round";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const n = noise(p.x * NOISE_SCALE, p.y * NOISE_SCALE + currentFrame);
        const angle = n * Math.PI * 2;
        const vx = Math.cos(angle) * FLOW_STRENGTH;
        const vy = Math.sin(angle) * FLOW_STRENGTH;

        p.px = p.x;
        p.py = p.y;
        p.x += vx;
        p.y += vy;
        p.life++;

        ctx.strokeStyle = p.c === 0 ? COLOR_ACID : COLOR_DEEP;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        if (
          p.life > p.maxLife ||
          p.x < -20 ||
          p.x > width + 20 ||
          p.y < -20 ||
          p.y > height + 20
        ) {
          spawn(p);
        }
      }

      if (!prefersReduced) {
        rafId = requestAnimationFrame(render);
      }
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 transition-opacity duration-200"
      style={{ background: "#0A0F05" }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
