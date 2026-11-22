"use client";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CostLineChart } from "./charts/costLineChart";
import { DoughnutChart } from "./charts/doughnutChart";
import { LiquidationLineChart } from "./charts/liquidationLineChart";

const DEFAULT_DATA = {
  transactionFee: {
    rateLabel: "0.3%",
    collectLabel: "",
    walletLabel: "Transaction Fee",
  },
  interestFee: {
    percentage: 10,
    centerLabel: "APR",
    collectLabel: "",
    walletLabel: "Interest Fee",
  },
  liquidationFee: {
    rate: "11%",
    collectLabel: "",
    walletLabel: "Liquidation Fee",
  },
};

interface LiquidationCardProps {
  rate?: string;
  collectLabel?: string;
  walletLabel?: string;
}

function LiquidationCard({
  rate = DEFAULT_DATA.liquidationFee.rate,
  collectLabel = DEFAULT_DATA.liquidationFee.collectLabel,
  walletLabel = DEFAULT_DATA.liquidationFee.walletLabel,
}: LiquidationCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-white/40 px-5 sm:px-8 lg:px-10 pb-6 pt-6 overflow-hidden min-h-[280px] sm:min-h-[320px] h-full transition-colors duration-300 hover:border-white/30">
      <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {rate}
      </p>

      <div className="flex-1 flex items-center justify-center my-4">
        <LiquidationLineChart />
      </div>

      <div>
        <p className="text-base sm:text-lg font-bold text-white">
          {collectLabel}
        </p>
        <p className="text-base sm:text-lg font-bold text-white">
          {walletLabel.replace(/"/g, "")}
        </p>
      </div>
    </div>
  );
}

export default function TransparentCostsSection() {
  return (
    <section className="p-2 xl:p-4">
      <div className="container mx-auto px-9 py-10 sm:px-8 sm:py-14 lg:px-10 xl:px-8 xl:py-16">
        <ScrollReveal variant="fadeUp" className="mb-8 sm:mb-10 xl:mb-14">
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
            <span className="font-black">Simple</span>, transparent costs
          </h2>
          <p className="mt-3 text-white/60 text-sm sm:text-lg">
            No hidden fees. Here&apos;s exactly what you pay to use TensorUSD.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ScrollReveal variant="fadeInLeftScale" delay={0.1}>
            <CostLineChart
              rateLabel={DEFAULT_DATA.transactionFee.rateLabel}
              collectLabel={DEFAULT_DATA.transactionFee.collectLabel}
              walletLabel={DEFAULT_DATA.transactionFee.walletLabel}
            />
          </ScrollReveal>

          <ScrollReveal variant="fadeUpScale" delay={0.2}>
            <DoughnutChart
              percentage={DEFAULT_DATA.interestFee.percentage}
              centerLabel={DEFAULT_DATA.interestFee.centerLabel}
              collectLabel={DEFAULT_DATA.interestFee.collectLabel}
              walletLabel={DEFAULT_DATA.interestFee.walletLabel}
            />
          </ScrollReveal>

          <ScrollReveal variant="fadeInRightScale" delay={0.3}>
            <LiquidationCard
              rate={DEFAULT_DATA.liquidationFee.rate}
              collectLabel={DEFAULT_DATA.liquidationFee.collectLabel}
              walletLabel={DEFAULT_DATA.liquidationFee.walletLabel}
            />
          </ScrollReveal>
        </div>
        <div className="mt-4">
          <p className="mt-3 text-white/60 text-sm sm:text-lg">
            So in this way we have 0.3% to mint. 10% APR to hold. 11% if you get
            liquidated
          </p>
        </div>
      </div>
    </section>
  );
}
