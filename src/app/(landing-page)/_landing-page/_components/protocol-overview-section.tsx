"use client";
import { Icon } from "@iconify/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ShineBorder } from "@/components/ui/shine-border";
import { icons } from "@/lib/icons";
import { MintChart } from "./charts/mintHistoryChart";

export default function ProtocolOverviewSection() {
  const metrics = [
    {
      id: 1,
      label: "Total Stable Minted",
      value: "0.00 TUSDT",
      icon: <Icon icon={icons.box} className="w-10 h-10" />,
    },
    {
      id: 2,
      label: "Collateralization Ratio",
      value: "150%",
      icon: <Icon icon={icons.toggleRightFill} className="w-10 h-10" />,
      hoverContent: {
        label: "Liquidation Ratio",
        value: "120%",
      },
    },
    {
      id: 3,
      label: "Total Value Locked",
      value: "0.00 TAO",
      icon: <Icon icon={icons.moneyBagBold} className="w-10 h-10" />,
    },
    {
      id: 4,
      label: "Liquidation Engine",
      value: "Autonomous AI Engine",
      icon: <Icon icon={icons.autoFix} className="w-10 h-10" />,
    },
    {
      id: 5,
      label: "Active Vaults",
      value: "0",
      icon: <Icon icon={icons.spinnerGapBold} className="w-10 h-10" />,
    },
    {
      id: 6,
      label: "Liquidation Fee",
      value: "11%",
      icon: <Icon icon={icons.home} className="w-10 h-10" />,
      hoverContent: {
        label: "Interest Fee",
        value: "10%",
      },
    },
  ];

  const totalMintDisplay = "$0.00";

  return (
    <section className="p-2 xl:p-4 relative overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-5 py-8 sm:px-8 sm:py-10 lg:px-10 xl:px-8 xl:py-12 ">
          <div className="flex flex-col items-center gap-5 xl:gap-10">
            <ScrollReveal
              variant="fadeInDown"
              className="w-full lg:w-[90%] xl:w-[80%] flex flex-col justify-center items-center pb-8"
            >
              <div className="inline-flex items-center gap-2 mb-6 w-fit">
                <span className="h-px w-6 bg-indigo-400/60" />
                <span className="text-[#B5B4FF] uppercase tracking-widest">
                  Live Protocol Data
                </span>
              </div>
              <h1 className="font-semibold text-2xl sm:text-3xl xl:text-6xl text-white leading-tight tracking-tight mb-6">
                Protocol Overview
              </h1>
              <p className=" font-medium sm:text-xl text-white/60 leading-relaxed w-full md:max-w-lg lg:max-w-3xl text-center">
                A real-time snapshot of the protocol's on-chain health,
                including supply, collateral backing, vault activity, and
                liquidation status.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-emerald-500 bg-emerald-500/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className=" text-emerald-400 ">
                  All systems operational
                </span>
              </div>
            </ScrollReveal>

            <div className="w-full flex flex-col p-2 lg:flex-row gap-4">
              <ScrollReveal
                variant="fadeInLeftScale"
                className="relative shrink-0 lg:w-[38%] rounded-2xl border border-white/40 p-6 flex flex-col justify-between min-h-[320px] overflow-hidden"
              >
                <p className="text-4xl font-bold text-white">
                  {totalMintDisplay}
                </p>
                <MintChart data={[]} />
                <p className="text-xl font-bold text-white">$TUSDT Minted</p>
              </ScrollReveal>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <ScrollReveal
                    key={metric.id}
                    variant="fadeUpScale"
                    delay={metric.id * 0.07}
                  >
                    <div className="group relative flex flex-col justify-between gap-6 rounded-2xl border border-white/40 px-5 pb-5 pt-5 transition-all duration-300 cursor-default overflow-hidden min-h-[140px]">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ShineBorder
                          shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                          borderWidth={1}
                          duration={8}
                          className="rounded-2xl"
                        />
                      </div>
                      <span className="group-hover:text-white/80 transition-colors duration-300">
                        {metric.icon}
                      </span>
                      <div className="relative h-8">
                        <div
                          className={`absolute inset-0 flex items-end justify-between gap-2 transition-all duration-300 ${
                            metric.hoverContent
                              ? "opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none"
                              : ""
                          }`}
                        >
                          <p className="text-xl leading-tight text-white/80">
                            {metric.label}
                          </p>
                          <p className="text-base font-bold tracking-tight text-white min-w-0 text-right">
                            {metric.value}
                          </p>
                        </div>

                        {metric.hoverContent && (
                          <div className="absolute inset-0 flex items-end justify-between gap-2 transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
                            <p className="text-xl leading-tight text-white/70">
                              {metric.hoverContent.label}
                            </p>
                            <p className="text-base font-bold tracking-tight text-white/90 min-w-0 text-right">
                              {metric.hoverContent.value}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
        <BorderBeam duration={20} size={220} />
      </div>
    </section>
  );
}
