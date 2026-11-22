"use client";
import { useEffect, useState } from "react";
import { useInViewport } from "@/components/ui/useInViewport";

export interface CostDataPoint {
  label: string;
  value: number;
}

interface CostLineChartProps {
  rateLabel?: string;
  collectLabel?: string;
  walletLabel?: string;
}

const CHART_W = 300;
const CHART_H = 200;

function LineChartSVG() {
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

  const startX = 0;
  const startY = CHART_H - 20;
  const endX = CHART_W;
  const endY = 20;

  const linePoints = `${startX},${startY} ${endX},${endY}`;
  const polygonPoints = `${startX},${CHART_H} ${startX},${startY} ${endX},${endY} ${endX},${CHART_H}`;

  return (
    <svg
      ref={chartRef}
      viewBox={`0 0 ${CHART_W} ${CHART_H}`}
      className="w-full h-full"
      preserveAspectRatio="none"
      aria-label="Transaction fee chart"
    >
      <title id="transaction-fee-chart-title">Transaction fee over time</title>
      <defs>
        <linearGradient id="costFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Single dashed vertical divider in the middle */}
      <line
        x1={CHART_W / 2}
        y1="0"
        x2={CHART_W / 2}
        y2={CHART_H}
        stroke="white"
        strokeWidth="1"
        strokeDasharray="4 5"
        strokeOpacity="0.25"
      />

      {/* Filled area below line */}
      <polygon
        points={polygonPoints}
        fill="url(#costFill)"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: "opacity 0.6s ease-out 0.3s",
        }}
      />

      <polyline
        points={linePoints}
        fill="none"
        stroke="#FFC684"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: "opacity 0.8s ease-out",
        }}
      />
    </svg>
  );
}

export function CostLineChart({
  rateLabel = "0.3%",
  collectLabel = "",
  walletLabel = "Transaction Fee",
}: CostLineChartProps) {
  return (
    <div className="h-full group relative flex flex-col justify-between rounded-2xl border border-white/40 p-6 px-10 overflow-hidden min-h-[320px] transition-colors duration-300 hover:border-white/30">
      <p className="text-4xl font-bold text-white tracking-tight">
        {rateLabel}
      </p>

      <div className="flex-1 flex flex-col my-2 min-h-[100px]">
        <LineChartSVG />
      </div>

      <div>
        <p className="text-lg font-bold text-white">{collectLabel}</p>
        <p className="text-lg font-bold text-white">{walletLabel}</p>
      </div>
    </div>
  );
}
