"use client";

const GRID_LINES = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9"];

export function LiquidationLineChart() {
  return (
    <div className="relative w-full h-full min-h-[160px]">
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        preserveAspectRatio="none"
        role="img"
        aria-label="Liquidation fee chart"
      >
        {/* Vertical dashed grid lines */}
        {GRID_LINES.map((key, i) => (
          <line
            key={key}
            x1={(i + 1) * 40}
            y1="0"
            x2={(i + 1) * 40}
            y2="200"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Gradient fill under the orange line */}
        <defs>
          <linearGradient id="orangeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E42" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F59E42" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Filled area under orange line */}
        <path
          d="M 0 150 C 50 100, 80 170, 140 160 S 240 100, 300 70 S 380 60, 400 70 L 400 200 L 0 200 Z"
          fill="url(#orangeFill)"
        />

        {/* Orange line */}
        <path
          d="M 0 150 C 50 100, 80 170, 140 160 S 240 100, 300 70 S 380 60, 400 70"
          fill="none"
          stroke="#F59E42"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
