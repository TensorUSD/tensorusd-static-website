"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const ecosystemLinks = [
  {
    label: "Bittensor Network",
    icon: "/tao-bg-white.png",
    href: "https://bittensor.com/",
  },
  {
    label: "Taostats",
    icon: "/clients/taostat.png",
    href: "https://taostats.io/",
  },
  {
    label: "Subnet 113",
    icon: "/logo/circle-logo.png",
    href: "https://taostats.io/subnets/113",
  },
  {
    label: "Discord Community",
    icon: "/discord.svg",
    href: "https://discord.gg/E9y6F6P4w8",
  },
];

export default function WhyBittensor() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full overflow-hidden bg-black min-h-[480px]">
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-5 py-14 sm:py-20 xl:py-24 text-center">
        <ScrollReveal
          variant="fadeUp"
          className="flex flex-col items-center gap-6 sm:gap-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white/60 leading-[1.15] tracking-tight">
            Built within the{" "}
            <span className="relative inline-block font-bold text-white">
              Bittensor Ecosystem
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 -bottom-1 h-[4px] sm:h-[7px] "
                style={{
                  background:
                    "linear-gradient(to right, #8A4FCC 0%, #D688AB 50%, #CC9A6E 100%)",
                }}
              />
            </span>
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-white/60 max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed pb-2 sm:pb-4 px-2">
            TensorUSD is built on the subnet SN113 on Bittensor. It powers up
            the ecosystem.
          </p>
        </ScrollReveal>

        <div className="mt-10 sm:mt-20 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-24 xl:gap-32">
          <div
            ref={containerRef}
            className="relative flex items-center justify-center shrink-0 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px]"
          >
            <Image
              src="/bittensor-thread.webp"
              alt="Bittensor Thread"
              fill
              className="object-contain"
            />

            <div className="absolute top-[8%] left-[12%] z-10">
              <div className="flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-white/10 overflow-hidden">
                <Image
                  src="/tao.png"
                  alt="TAO"
                  width={80}
                  height={80}
                  className="h-full w-full object-contain p-4"
                />
              </div>
            </div>

            <div className="absolute top-[38%] right-[4%] z-10">
              <div className="flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black border border-white/20 shadow-lg shadow-white/10 overflow-hidden">
                <Image
                  src="/clients/taostat.png"
                  alt="Taostats"
                  width={64}
                  height={64}
                  className=" object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10">
              <div className="flex h-14 w-14 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-black border border-white/20 shadow-lg shadow-white/10 overflow-hidden">
                <Image
                  src="/logo/circle-logo.png"
                  alt="TensorUSD"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 w-full lg:min-w-[300px] lg:w-auto px-9 sm:px-0 ">
            {ecosystemLinks.map((link, i) => (
              <ScrollReveal
                key={link.label}
                variant="fadeUpScale"
                delay={i * 0.1}
              >
                <Link
                  href={link.href}
                  className="flex items-center justify-center gap-3 rounded-xl px-4 sm:px-5 py-2.5 text-sm sm:text-xl font-medium text-white transition-all duration-200 hover:bg-white/5 w-full"
                  style={{
                    border: "1px solid transparent",
                    backgroundImage: `linear-gradient(#000, #000), conic-gradient(
            from 0deg at 50% 50%,
            rgba(255,255,255,0.3)   0deg,
            rgba(255,255,255,0.3)  20deg,
            rgba(255,255,255,0.8)  90deg,
            rgba(255,255,255,0.3) 160deg,
            rgba(255,255,255,0.3) 200deg,
            rgba(255,255,255,0.8) 270deg,
            rgba(255,255,255,0.3) 340deg,
            rgba(255,255,255,0.3) 360deg
          )`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                >
                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full overflow-hidden bg-white/5">
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={36}
                      height={36}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate">{link.label}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
