"use client";
import { useEffect, useMemo, useState } from "react";
import { useInViewport } from "@/components/ui/useInViewport";

export interface MintDataPoint {
  date: string;
  mint: number;
}

interface MintChartProps {
  data: MintDataPoint[];
}

const CHART_W = 300;
const CHART_H = 160;
const PADDING = { top: 10, right: 0, bottom: 0, left: 0 };

function toPoints(data: MintDataPoint[]): { x: number; y: number }[] {
  if (!data || data.length === 0) return [];
  const minV = Math.min(...data.map((d) => d.mint));
  const maxV = Math.max(...data.map((d) => d.mint));
  const range = maxV - minV || 1;

  const innerW = CHART_W - PADDING.left - PADDING.right;
  const innerH = CHART_H - PADDING.top - PADDING.bottom;

  return data.map((d, i) => ({
    x: PADDING.left + (i / Math.max(data.length - 1, 1)) * innerW,
    y: PADDING.top + innerH - ((d.mint - minV) / range) * innerH,
  }));
}

export function MintChart({ data }: MintChartProps) {
  const { ref: chartRef, isVisible } = useInViewport<HTMLDivElement>({
    once: true,
    margin: "200px",
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const points = useMemo(() => toPoints(data ?? []), [data]);

  // Compute full polyline (all points) once — always rendered
  const { polyline, polygon } = useMemo(() => {
    if (points.length < 2) return { polyline: "", polygon: "" };
    const pl = points
      .map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`)
      .join(" ");
    const pg = `${points[0].x.toFixed(2)},${CHART_H} ${pl} ${points[points.length - 1].x.toFixed(2)},${CHART_H}`;
    return { polyline: pl, polygon: pg };
  }, [points]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  if (points.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center my-4 text-white/20 text-xs font-mono min-h-[100px]">
        No data available
      </div>
    );
  }

  return (
    <div ref={chartRef} className="h-full flex-1 relative my-2 select-none">
      <svg
        viewBox={`0 0 ${CHART_W} ${CHART_H}`}
        className="w-full h-full p-1"
        preserveAspectRatio="none"
        aria-label="Minted TUSDT over time"
      >
        <title id="mint-chart-title">Minted TUSDT over time</title>
        <defs>
          <linearGradient id="mintFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.18" />
            <stop offset="100%" stopColor="white" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        <line
          x1={CHART_W * 0.33}
          y1="0"
          x2={CHART_W * 0.33}
          y2={CHART_H}
          stroke="white"
          strokeWidth="1"
          strokeDasharray="4 5"
          strokeOpacity="0.2"
        />
        <line
          x1={CHART_W * 0.66}
          y1="0"
          x2={CHART_W * 0.66}
          y2={CHART_H}
          stroke="white"
          strokeWidth="1"
          strokeDasharray="4 5"
          strokeOpacity="0.2"
        />

        {polygon && (
          <polygon
            points={polygon}
            fill="url(#mintFill)"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transition: "opacity 0.6s ease-out 0.4s",
            }}
          />
        )}

        {polyline && (
          <polyline
            points={polyline}
            fill="none"
            stroke="#B672FF"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transition: "opacity 0.8s ease-out",
            }}
          />
        )}
      </svg>
    </div>
  );
}
