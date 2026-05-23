import CountUp from "@/components/motion/CountUp";
import MouseSpotlight from "@/components/motion/MouseSpotlight";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const stats = [
  {
    value: 67,
    suffix: "%",
    label: "of Google searches now end without a click",
    source: "Search Engine Land, 2025",
  },
  {
    value: 1,
    suffix: "B+",
    label: "ChatGPT monthly active users",
    source: "OpenAI, 2025",
  },
  {
    value: 40,
    suffix: "%",
    label: "drop in organic CTR since AI Overviews launched",
    source: "Semrush, 2024",
  },
];

export default function TheProblem() {
  return (
    <section className="relative bg-[var(--deep-night)] text-[var(--off-white)] py-32 overflow-hidden">
      <MouseSpotlight />
      <div className="max-w-7xl mx-auto px-[var(--page-gutter)] relative">
        <p className="text-caption font-mono font-semibold uppercase tracking-[0.25em] text-[var(--lime-acid)] mb-8">
          THE SHIFT
        </p>
        <TextReveal
          as="h2"
          className="font-display font-black text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.05] tracking-tight max-w-4xl mb-20"
        >
          In 18 months, half your traffic could come from AI answers you&rsquo;ve never seen.
        </TextReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Stats column */}
          <Reveal stagger className="flex flex-col gap-10">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-[var(--lime-acid)] pl-6">
                <div className="font-display text-[clamp(3rem,6vw,5rem)] font-black leading-none text-[var(--lime-acid)] tabular-nums">
                  <CountUp to={s.value} suffix={s.suffix} duration={1800} />
                </div>
                <p className="mt-3 text-body-lg text-[var(--mist)]">{s.label}</p>
                <p className="mt-1 text-caption font-mono text-[var(--smoke)]">
                  {s.source}
                </p>
              </div>
            ))}
          </Reveal>

          {/* Diagram: 10 blue links → 1 AI answer */}
          <Reveal>
            <TrafficShiftDiagram />
          </Reveal>
        </div>

        <p className="mt-24 font-display italic text-[clamp(1.5rem,3vw,2.5rem)] leading-snug text-[var(--off-white)] max-w-3xl">
          &ldquo;If you&rsquo;re not cited inside those answers, you&rsquo;re invisible. We fix that.&rdquo;
        </p>
      </div>
    </section>
  );
}

function TrafficShiftDiagram() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-auto"
      role="img"
      aria-label="Traffic shifting from ten blue links to one AI answer box"
    >
      <defs>
        <style>{`
          @keyframes link-fade {
            0%, 40% { opacity: 1; }
            60%, 100% { opacity: 0.2; }
          }
          @keyframes box-grow {
            0%, 40% { opacity: 0; transform: scale(0.9); }
            70%, 100% { opacity: 1; transform: scale(1); }
          }
          @keyframes flow {
            from { stroke-dashoffset: 200; }
            to { stroke-dashoffset: 0; }
          }
          .link-line { animation: link-fade 4s ease-in-out infinite; transform-origin: center; }
          .ai-box { animation: box-grow 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .flow-line { animation: flow 3s linear infinite; }
          @media (prefers-reduced-motion: reduce) {
            .link-line, .ai-box, .flow-line { animation: none !important; }
          }
        `}</style>
      </defs>

      {/* Left: 10 blue links stacked */}
      <g transform="translate(20, 60)">
        <text x="0" y="-20" fontFamily="monospace" fontSize="11" fill="#BDBFB0" letterSpacing="2">
          BEFORE
        </text>
        {Array.from({ length: 10 }).map((_, i) => (
          <g key={i} className="link-line" style={{ animationDelay: `${i * 0.1}s` }}>
            <rect
              x="0"
              y={i * 32}
              width="180"
              height="22"
              rx="4"
              fill="rgba(189, 191, 176, 0.06)"
              stroke="rgba(189, 191, 176, 0.2)"
              strokeWidth="1"
            />
            <rect x="8" y={i * 32 + 7} width="100" height="3" fill="#84A800" opacity="0.4" />
            <rect x="8" y={i * 32 + 14} width="160" height="2" fill="#54574A" />
          </g>
        ))}
      </g>

      {/* Flow lines from links to AI box */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={`flow-${i}`}
          className="flow-line"
          x1="200"
          y1={76 + i * 32}
          x2="320"
          y2="240"
          stroke="#C8FF3D"
          strokeWidth="0.7"
          strokeOpacity="0.3"
          strokeDasharray="3 6"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}

      {/* Right: 1 AI answer box */}
      <g transform="translate(320, 140)" className="ai-box">
        <text x="0" y="-15" fontFamily="monospace" fontSize="11" fill="#C8FF3D" letterSpacing="2">
          NOW
        </text>
        <rect
          x="0"
          y="0"
          width="160"
          height="200"
          rx="8"
          fill="rgba(200, 255, 61, 0.08)"
          stroke="#C8FF3D"
          strokeWidth="1.5"
        />
        <text x="12" y="28" fontFamily="monospace" fontSize="10" fill="#C8FF3D" letterSpacing="1.5">
          AI ANSWER
        </text>
        <line x1="12" y1="40" x2="148" y2="40" stroke="#84A800" strokeOpacity="0.4" />
        {Array.from({ length: 7 }).map((_, i) => (
          <rect
            key={i}
            x="12"
            y={56 + i * 14}
            width={140 - (i % 3) * 18}
            height="4"
            rx="1"
            fill="#FAFAF5"
            opacity={0.55 - i * 0.05}
          />
        ))}
        <rect x="12" y="170" width="50" height="14" rx="2" fill="#C8FF3D" opacity="0.9" />
        <text x="22" y="180" fontFamily="monospace" fontSize="8" fill="#0E1208" fontWeight="bold">
          [1] [2]
        </text>
      </g>
    </svg>
  );
}
