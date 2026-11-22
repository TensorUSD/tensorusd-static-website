"use client";
import { useRef, useState, useEffect } from "react";

interface UseInViewportOptions {
  /** Root margin, same as IntersectionObserver rootMargin */
  margin?: string;
  /** Only trigger once? Default false (resume on re-enter) */
  once?: boolean;
  /** Initial visibility state before observer fires. Default true for animation-gating, false for lazy-loading. */
  defaultVisible?: boolean;
}

export function useInViewport<T extends Element = Element>(options: UseInViewportOptions = {}) {
  const { margin = "200px", once = false, defaultVisible = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(defaultVisible);
  const wasEverVisible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        if (once && visible) {
          wasEverVisible.current = true;
          setIsVisible(true);
          observer.disconnect();
          return;
        }
        if (once && wasEverVisible.current) return;

        setIsVisible(visible);
      },
      { rootMargin: margin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin, once]);

  return { ref, isVisible };
}
