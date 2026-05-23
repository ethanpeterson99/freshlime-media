interface LimeSphereProps {
  size?: number;
}

export default function LimeSphere({ size = 480 }: LimeSphereProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.42;

  // Generate contour lines (citrus cross-section)
  const contours = Array.from({ length: 12 }, (_, i) => {
    const t = (i / 11) * Math.PI;
    const rx = r * Math.abs(Math.sin(t)) * 0.9 + r * 0.05;
    const ry = r * 0.35 + r * 0.1 * Math.sin(t * 2);
    return { rx, ry, delay: i * 0.18 };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-90"
      role="img"
      aria-label="Fresh Lime Media brand illustration"
    >
      <defs>
        <clipPath id="sphere-clip">
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
        <radialGradient id="sphere-bg" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#C8FF3D" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#84A800" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#0E1208" stopOpacity="0.05" />
        </radialGradient>
        <style>{`
          @keyframes contour-draw {
            from { stroke-dashoffset: 1000; opacity: 0; }
            to   { stroke-dashoffset: 0;    opacity: 1; }
          }
          @media (prefers-reduced-motion: reduce) {
            .contour { animation: none !important; stroke-dashoffset: 0 !important; }
          }
        `}</style>
      </defs>

      {/* Outer circle */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="url(#sphere-bg)"
        stroke="#C8FF3D"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />

      {/* Contour lines — clipped to sphere */}
      <g clipPath="url(#sphere-clip)">
        {contours.map((c, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={c.rx}
            ry={c.ry}
            fill="none"
            stroke="#C8FF3D"
            strokeWidth="1"
            strokeOpacity={0.25 + (i % 3) * 0.08}
            strokeDasharray="1000"
            className="contour"
            style={{
              animation: `contour-draw 1.4s ease ${c.delay}s both`,
              transform: `rotate(${i * 15}deg)`,
              transformOrigin: `${cx}px ${cy}px`,
            }}
          />
        ))}

        {/* Radial segments */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x2 = cx + Math.cos(angle) * r;
          const y2 = cy + Math.sin(angle) * r;
          return (
            <line
              key={`seg-${i}`}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="#84A800"
              strokeWidth="0.75"
              strokeOpacity="0.2"
            />
          );
        })}

        {/* Center dot */}
        <circle cx={cx} cy={cy} r={size * 0.025} fill="#C8FF3D" fillOpacity="0.5" />
      </g>

      {/* Highlight */}
      <ellipse
        cx={cx - r * 0.28}
        cy={cy - r * 0.3}
        rx={r * 0.2}
        ry={r * 0.12}
        fill="white"
        fillOpacity="0.06"
        transform={`rotate(-30, ${cx - r * 0.28}, ${cy - r * 0.3})`}
      />
    </svg>
  );
}
