import type { ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  /** Anchor target for in-page navigation. */
  id?: string;
  /** Kept for call-site compatibility; sections now render immediately. */
  margin?: string;
  /** Minimum height placeholder to prevent layout shift. */
  minHeight?: string;
}

export function LazySection({
  children,
  id,
  minHeight = "100vh",
}: LazySectionProps) {
  return (
    <div id={id} style={{ minHeight }}>
      {children}
    </div>
  );
}
