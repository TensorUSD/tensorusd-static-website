import { Icon } from "@iconify/react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { icons } from "@/lib/icons";

const steps = [
  {
    id: 1,
    icon: (
      <Icon
        icon={icons.vaultFill}
        className="w-10 h-10 sm:w-16 sm:h-16 text-[#B672FF]"
      />
    ),
    title: "Open a Vault",
    description:
      "Connect your wallet and open a personal vault. Non-custodial: you stay in full control of your assets at all times.",
  },
  {
    id: 2,
    icon: (
      <Icon
        icon={icons.lockFill}
        className="w-10 h-10 sm:w-16 sm:h-16 text-[#EDA1FF]"
      />
    ),
    title: "Lock Collateral",
    description:
      "Deposit TAO or Alpha into your vault. Your borrowing power depends on the collateral value and the required minimum ratio.",
  },
  {
    id: 3,
    icon: (
      <Icon
        icon={icons.pickaxe}
        className="w-10 h-10 sm:w-16 sm:h-16 text-[#FFA3CE]"
      />
    ),
    title: "Mint TUSDT",
    description:
      "Borrow TUSDT against your collateral. The protocol is always overcollateralized to protect the $1 peg during market volatility.",
  },
  {
    id: 4,
    icon: (
      <Icon
        icon={icons.monitorCheckFill}
        className="w-10 h-10 sm:w-16 sm:h-16 text-[#FFAA94]"
      />
    ),
    title: "Use & Monitor",
    description:
      "Deploy your TUSDT across DeFi, swap it, or hold it. Monitor your vault health to avoid liquidation if TAO drops in price.",
  },
  {
    id: 5,
    icon: (
      <Icon
        icon={icons.unlockFill}
        className="w-10 h-10 sm:w-16 sm:h-16 text-[#FFC684]"
      />
    ),
    title: "Repay & Unlock",
    description:
      "Repay your TUSDT plus a small stability fee to close your vault and reclaim 100% of your original collateral.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white selection:bg-white/20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/wave3.webp"
          alt=""
          fill
          preload
          quality={90}
          sizes="100vw"
          className="hidden sm:block object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-9 sm:px-6 py-16 sm:py-20 lg:py-28 max-w-7xl">
        <ScrollReveal
          variant="fadeInDown"
          className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-14 max-w-3xl"
        >
          <h2 className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white pb-2 sm:pb-4">
            How
            <span className="inline-flex w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden shrink-0 bg-neutral-900 border border-neutral-800 p-0.5">
              <Image
                src="/logo/circle-logo.png"
                alt="TensorUSD"
                width={56}
                height={56}
                className="object-cover w-full h-full rounded-full grayscale brightness-125"
              />
            </span>
            TensorUSD works
          </h2>
          <p className="text-sm sm:text-xl text-white/60 font-normal tracking-wide">
            Our platform works in 5 simple steps
          </p>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 md:gap-2">
          {steps.map((step) => (
            <ScrollReveal
              key={step.id}
              variant={
                step.id % 2 === 0 ? "fadeInRightScale" : "fadeInLeftScale"
              }
              delay={step.id * 0.08}
            >
              <div className="relative flex flex-row lg:flex-col items-start lg:items-center lg:text-center gap-5 lg:gap-0 py-6 lg:py-0 border-b border-white/10 last:border-b-0 md:border-b-0">
                <div className="relative flex items-center justify-center shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-full lg:h-70 mx-0 lg:mx-auto ">
                  <div
                    className="hidden lg:block absolute left-0 top-0 bottom-0 w-px"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                    }}
                  />
                  <div
                    className="hidden lg:block absolute right-0 top-0 bottom-0 w-px"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                    }}
                  />
                  <div className="relative z-10 text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.2)]">
                    {step.icon}
                  </div>
                </div>

                <div className="flex flex-col flex-1 min-w-0 lg:items-center">
                  <div className="relative flex items-center lg:justify-center lg:w-full lg:mt-7 lg:mb-5 mb-2 ">
                    <div
                      className="hidden lg:block absolute top-1/2 -translate-y-1/2 h-px bg-white/20 z-0"
                      style={{
                        left: step.id === 1 ? "50%" : "calc(-0.25rem)",
                        right: step.id === 5 ? "50%" : "calc(-0.25rem)",
                      }}
                    />
                    <span className="relative z-10 text-xl sm:text-2xl lg:text-[32px] font-bold text-white/40 lg:text-white w-8 h-8 lg:w-11 lg:h-11 flex items-center justify-center leading-none select-none">
                      {step.id}
                    </span>
                  </div>

                  <div className="flex flex-col lg:items-center lg:px-4">
                    <h3 className="text-base sm:text-lg lg:text-2xl font-medium text-white mb-1.5 lg:mb-3 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[14px] text-white/60 leading-relaxed font-normal tracking-wide lg:max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
