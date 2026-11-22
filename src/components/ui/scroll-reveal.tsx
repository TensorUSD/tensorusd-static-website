"use client";

import { motion, type Variants } from "motion/react";

export type AnimationVariant =
  | "fadeUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "fadeUpScale"
  | "fadeInLeftScale"
  | "fadeInRightScale";

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  fadeUpScale: {
    hidden: { opacity: 0, y: 60, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  fadeInLeftScale: {
    hidden: { opacity: 0, x: -100, scale: 0.93 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  fadeInRightScale: {
    hidden: { opacity: 0, x: 100, scale: 0.93 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  /** Play animation only once (default: true) */
  once?: boolean;
  /** How many pixels before viewport edge to trigger (negative = earlier) */
  margin?: string;
}

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.72,
  className,
  once = true,
  margin = "-60px",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
