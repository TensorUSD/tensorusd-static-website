"use client";
import { useEffect, useState } from "react";
import { useInViewport } from "@/components/ui/useInViewport";

interface DoughnutChartProps {
  percentage?: number;
  centerLabel?: string;
  collectLabel?: string;
  walletLabel?: string;
}

const SIZE = 220;
const STROKE = 22;
const R = (SIZE - STROKE) / 2;
const CX = SIZE / 2;
const CY = SIZE / 2;
const CIRCUMFERENCE = 2 * Math.PI * R;

const deg2transform = (deg: number) => `rotate(${deg} ${CX} ${CY})`;

function RingSVG({ percentage }: { percentage: number }) {
  const { ref: chartRef, isVisible } = useInViewport<SVGSVGElement>({
    once: true,
    margin: "200px",
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const targetFilledLen = (percentage / 100) * CIRCUMFERENCE;
  const filledLen = hasAnimated ? targetFilledLen : 0;
  const dashFilled = `${filledLen} ${CIRCUMFERENCE - filledLen}`;

  // Start the filled arc from the top (-90°)
  const START_DEGREES = -90;

  return (
    <svg
      ref={chartRef}
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      aria-label="Doughnut chart"
    >
      <title id="doughnut-chart-title">Interest fee percentage</title>
      {/* Full connected track (background ring) */}
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="rgba(200, 131, 232, 0.25)"
        strokeWidth={STROKE}
      />

      {/* Filled arc - white, proportional to percentage */}
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="#9A45F7"
        strokeWidth={STROKE}
        strokeDasharray={dashFilled}
        strokeDashoffset="0"
        strokeLinecap="round"
        transform={deg2transform(START_DEGREES)}
        style={{ transition: "stroke-dasharray 1.1s ease-out" }}
      />
    </svg>
  );
}

export function DoughnutChart({
  percentage = 10,
  centerLabel = "APR",
  collectLabel = "",
  walletLabel = "Interest Fee",
}: DoughnutChartProps) {
  return (
    <div className="h-full group relative flex flex-col items-center justify-between rounded-2xl border border-white/40 px-6 pb-6 pt-6 overflow-hidden min-h-[320px] transition-colors duration-300 hover:border-white/30">
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative" style={{ width: SIZE, height: SIZE }}>
          <RingSVG percentage={percentage} />

          {/* Centre label - percentage above APY */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-4xl font-bold text-white leading-none">
              {percentage}%
            </span>
            <span className="text-2xl font-bold text-white mt-2">
              {centerLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="text-center mt-4">
        <p className="text-lg font-bold text-white">{collectLabel}</p>
        <p className="text-base font-bold text-white/90 mt-1">{walletLabel}</p>
      </div>
    </div>
  );
}
