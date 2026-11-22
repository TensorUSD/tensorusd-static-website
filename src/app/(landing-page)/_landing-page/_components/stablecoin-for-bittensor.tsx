import { Icon } from "@iconify/react";
import Image from "next/image";
import DotGrid from "@/components/ui/DotGrid";
import LogoLoop from "@/components/ui/LogoLoop";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ShineBorder } from "@/components/ui/shine-border";
import { icons } from "@/lib/icons";

interface FeatureCard {
  id: number;
  node: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    id: 1,
    node: (
      <div className="relative w-14 h-14 rounded-full bg-white shrink-0 overflow-hidden">
        <Image src="/tao.png" alt="TAO" fill className="object-contain p-3" />
      </div>
    ),
    title: "Stay in TAO",
    description:
      "You never have to sell your TAO to access liquidity. Lock it as collateral and keep full exposure to any price appreciation while unlocking cash.",
  },
  {
    id: 2,
    node: (
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
        <Icon
          icon={icons.dollar}
          className="w-full h-full text-black p-1.5"
          strokeWidth={4}
        />
      </div>
    ),
    title: "Access Stablecoins",
    description:
      "Mint TUSDT - a dollar-pegged stablecoin - directly against your TAO or Alpha. Use it across DeFi, swap it, or provide liquidity in other protocols.",
  },
  {
    id: 3,
    node: (
      <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
        <Image
          src="/logo/circle-logo.png"
          alt="TUSDT"
          fill
          className="object-cover"
        />
      </div>
    ),
    title: "Earn via SN113",
    description:
      "Participate in Bittensor's Subnet 113 as a miner or validator. The protocol rewards participants for securing the peg and maintaining healthy collateral ratios.",
  },
];

function FeatureCardItem({ card }: { card: FeatureCard }) {
  return (
    <div className="group relative rounded-2xl border border-white/40 bg-black px-7 py-5 flex flex-col gap-6 overflow-hidden transition-all duration-300 cursor-default w-[300px] sm:w-[350px] h-[300px] text-left">
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ShineBorder
          shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          borderWidth={1}
          duration={8}
          className="rounded-2xl"
        />
      </div>
      {card.node}
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {card.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function ValuePropositionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="absolute bottom-0 left-0 w-full h-[70%] z-0">
        <DotGrid
          dotSize={3}
          gap={25}
          baseColor="#2F293A"
          activeColor="#ffffff"
          proximity={90}
          shockRadius={160}
          shockStrength={5.5}
          resistance={850}
          returnDuration={1.5}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, black 0%, transparent 45%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-9 py-16 sm:px-8 sm:py-20 lg:px-10 xl:px-10 xl:py-24 ">
        <div className="flex flex-col gap-10 xl:gap-14">
          <ScrollReveal
            variant="fadeInLeft"
            className="max-w-3xl flex flex-col gap-5"
          >
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-light text-white leading-[1.1] tracking-tight">
              The stablecoin built
              <br />
              for the <span className="font-extrabold">Bittensor economy</span>
            </h2>
            <p className=" sm:text-base text-white/60 leading-relaxed max-w-2xl pb-6">
              Think of it like a crypto mortgage: you lock up valuable assets as
              collateral and borrow stable dollars against them. When you're
              done, repay the loan and get your assets back.
            </p>
          </ScrollReveal>

          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <div
              style={{
                height: "320px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <LogoLoop
                logos={features.map((card) => ({
                  node: <FeatureCardItem card={card} />,
                }))}
                speed={40}
                direction="left"
                logoHeight={16}
                gap={30}
                hoverSpeed={0}
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Features"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
