import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import DotGrid from "@/components/ui/DotGrid";
import LogoLoop from "@/components/ui/LogoLoop";
import Strands from "@/components/ui/Strands";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ShineBorder } from "@/components/ui/shine-border";
import { TypingAnimation } from "@/components/ui/typing-animation";

const _clients = [
  { label: "Ventura Labs", icon: "/clients/venturalabs.jpg" },
  { label: "Bitsec", icon: "/clients/bitsec.png" },
  { label: "Pyth Network", icon: "/clients/pythnetwork.png" },
  { label: "Taostats", icon: "/clients/taostat.png" },
];

export default function HeroSection() {
  return (
    <section className="w-full h-full relative">
      <div className="relative overflow-hidden h-[700px] sm:h-[800px] lg:h-[1100px]">
        <div
          style={{ width: "100%", position: "absolute" }}
          className="h-[350px] sm:h-[450px] lg:h-[600px]"
        >
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
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "30%",
              background: "linear-gradient(to bottom, transparent, black)",
              pointerEvents: "none",
            }}
          />
        </div>

        <div className="absolute z-1 w-full h-[270px] sm:h-[420px] lg:h-[500px] bottom-20 left-0">
          <Strands
            colors={["#F97316", "#7C3AED", "#000000"]}
            count={2}
            speed={0.2}
            amplitude={0.5}
            waviness={3}
            thickness={0.5}
            glow={1}
            taper={4}
            spread={1.3}
            intensity={0.1}
            saturation={0.7}
            opacity={0.7}
            scale={5}
            glass={false}
            refraction={1}
            dispersion={1}
            glassSize={1}
            hueShift={0}
          />
        </div>

        <div className="relative z-10 h-full w-full flex justify-center items-start mt-15">
          <div className="flex flex-col justify-start items-center gap-5 md:gap-10 px-4 sm:px-6">
            <ScrollReveal
              variant="fadeInDown"
              delay={0.1}
              className="w-fit mb-2 md:mb-4"
            >
              <Button
                variant={"outline"}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full relative"
              >
                <ShineBorder
                  shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  borderWidth={1}
                  duration={10}
                />
                <AnimatedGradientText speed={0.5}>
                  <TypingAnimation showCursor={false} duration={50}>
                    Powered by SN113
                  </TypingAnimation>
                </AnimatedGradientText>
                🔥
              </Button>
            </ScrollReveal>

            <ScrollReveal
              variant="fadeInDown"
              delay={0.25}
              className="w-full sm:w-[90%] 2xl:w-[80%] text-center"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-1 leading-[120%] lg:leading-[115%]">
                <span className="sr-only">
                  The Native Stablecoin for Bittensor Economy
                </span>
                <span>The Native Stablecoin</span>
                <br />
                <span className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-bold mt-3 sm:mt-5">
                  for
                  <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 lg:h-15 lg:w-15 rounded-full overflow-hidden bg-white items-center justify-center p-1 shrink-0 mx-2 sm:mx-4">
                    <Image
                      src="/tao.png"
                      alt="TAO logo"
                      width={20}
                      height={20}
                      className="object-contain p-2 w-full h-full"
                    />
                  </span>
                  <Image
                    src="/bittensor.png"
                    width={300}
                    height={80}
                    className="object-contain h-[1.1em] sm:h-[1.3em] lg:h-[1.5em] w-auto max-w-[160px] sm:max-w-[220px] lg:max-w-none"
                    alt="Bittensor Text"
                  />
                  Economy
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal
              variant="fadeInDown"
              delay={0.42}
              className="w-[90%] sm:w-[75%] md:w-[65%] xl:w-[58%] 2xl:w-[50%] text-center"
            >
              <p className="text-xs sm:text-sm lg:text-lg xl:text-xl text-white/80 tracking-wide p-1 md:p-0">
                TensorUSD (TUSDT) is a decentralized stablecoin backed by TAO
                and Alpha. Lock your assets as collateral, mint stable dollars,
                and put your capital to work, while staying fully exposed to
                TAO's upside.
              </p>
            </ScrollReveal>

            <ScrollReveal
              variant="fadeInDown"
              delay={0.58}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center sm:w-auto"
            >
              <Link href="/app" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg relative"
                >
                  <ShineBorder
                    shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    borderWidth={1}
                    duration={20}
                  />
                  Start Minting TUSDT
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button
                asChild
                variant={"ghost"}
                className="w-full sm:w-auto border border-white/30 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg"
              >
                <Link
                  href={"https://docs.tensorusd.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Docs
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 py-5 sm:py-7 backdrop-blur-xl overflow-hidden">
        <ScrollReveal variant="fadeUp" delay={0.7} className="w-full">
          <LogoLoop
            logos={_clients.map((client) => ({
              node: (
                <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 px-6 sm:px-12">
                  {client.icon ? (
                    <Image
                      src={client.icon}
                      alt={client.label}
                      width={48}
                      height={48}
                      className="w-8! h-8! sm:w-12! sm:h-12! object-contain rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/10" />
                  )}
                  <span className="font-mono font-medium tracking-[0.2em] text-xs sm:text-lg text-white/80">
                    {client.label}
                  </span>
                </div>
              ),
            }))}
            speed={40}
            direction="left"
            logoHeight={16}
            gap={0}
            fadeOut
            fadeOutColor="#000000"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
