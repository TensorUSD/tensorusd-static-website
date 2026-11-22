"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { useState } from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { icons } from "@/lib/icons";

const features = [
  {
    icon: (
      <Icon
        icon={icons.tagFill}
        className="w-20 h-20 text-white"
        strokeWidth={1.5}
      />
    ),
    title: "Stay in TAO",
    description:
      "You never have to sell your TAO to access liquidity. Lock it as collateral and keep full exposure to any price appreciation while unlocking cash.",
  },
  {
    icon: (
      <Icon
        icon={icons.trendingUp}
        className="w-20 h-20 text-black bg-white rounded-md p-2"
        strokeWidth={1.5}
      />
    ),
    title: "Leverage exposure",
    description:
      "Mint TUSDT, buy more TAO, and deposit again. Stack your position without touching centralized exchanges or margin accounts.",
  },
  {
    icon: (
      <Icon
        icon={icons.fileFill}
        className="w-20 h-20 text-white"
        strokeWidth={1.5}
      />
    ),
    title: "No credit checks",
    description:
      "There are no applications, credit scores, or KYC. Your collateral is the only requirement - permissionless by design.",
  },
  {
    icon: (
      <Icon
        icon={icons.pickaxe}
        className="w-20 h-20 text-white"
        strokeWidth={1.5}
      />
    ),
    title: "Earn while borrowing",
    description:
      "Your locked TAO continues earning staking yield inside the vault. You borrow and earn simultaneously, maximizing capital efficiency.",
  },
];

export default function WhySection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 h-full w-full fill-white/10 stroke-white/10"
      />

      <div className="relative z-10 py-16 lg:py-24 w-full">
        <ScrollReveal variant="fadeInLeft">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-10 lg:mb-14 px-6 sm:px-12 lg:px-24">
            Why people use <span className="text-white font-bold">TUSDT</span>
          </h2>
        </ScrollReveal>

        <div className="w-full">
          {features.map((feature, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal
                key={feature.title}
                variant="fadeUp"
                delay={i * 0.08}
              >
                <div className="border-t border-white/80 last:border-b select-none group">
                  <button
                    type="button"
                    className="w-full text-left"
                    onClick={() => setOpenIndex(i)}
                    onFocus={() => setOpenIndex(i)}
                  >
                    <div className="flex items-center justify-between gap-8 px-6 sm:px-12 lg:px-24 py-5 sm:py-6">
                      <h3
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-white/80"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          scale: isOpen ? 1 : 0.8,
                          width: isOpen ? "auto" : 0,
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="shrink-0 overflow-hidden flex items-center justify-center"
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      maxHeight: isOpen ? 400 : 0,
                      opacity: isOpen ? 1 : 0,
                      y: isOpen ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 sm:px-12 lg:px-24 pb-8 text-base sm:text-lg text-white/50 leading-relaxed max-w-2xl">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
