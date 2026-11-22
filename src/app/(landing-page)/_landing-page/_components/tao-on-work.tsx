import Image from "next/image";
import Link from "next/link";
import DotGrid from "@/components/ui/DotGrid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ShineBorder } from "@/components/ui/shine-border";

const CTA_BUTTONS = [
  { label: "Open Vault", href: "/app" },
  {
    label: "Read Whitepaper",
    href: "https://docs.tensorusd.com/whitepaper/tensorusd-whitepaper-v2.0",
  },
  { label: "Join Discord", href: "https://discord.gg/ubUBKsfaP" },
];

export default function TaoOnWorkSection() {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div
        style={{ width: "100%", position: "absolute" }}
        className="h-[350px] sm:h-[450px] lg:h-[700px]"
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
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-7 sm:gap-10 px-9 sm:px-6 max-w-6xl mx-auto">
        <ScrollReveal variant="fadeUpScale">
          <h1 className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,4.5rem)] font-sans leading-tight tracking-tight pb-2 sm:pb-4">
            <span className="font-normal text-white/80">Ready to put your</span>
            <span className="relative inline-flex shrink-0 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white items-center justify-center overflow-hidden">
              <Image
                src="/tao.png"
                alt="TAO"
                width={40}
                height={40}
                className="object-contain w-[60%] h-[60%]"
              />
            </span>
            <span className="font-bold text-white">TAO to work?</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className="text-sm sm:text-base md:text-xl text-white/60 max-w-sm sm:max-w-2xl md:max-w-4xl">
            Mint TUSDT, explore the protocol, and get ready for mainnet.
          </p>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-12 justify-center items-center mt-2 sm:mt-4 w-full sm:w-auto">
          {CTA_BUTTONS.map(({ label, href }, i) => {
            const isExternal = href.startsWith("http");
            return (
              <ScrollReveal key={label} variant="fadeUp" delay={0.3 + i * 0.1}>
                <Link
                  href={href}
                  {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group relative w-full sm:w-auto px-8 sm:px-10 py-3 border border-white/20 rounded-xl bg-black/40 text-white text-sm sm:text-base font-medium backdrop-blur-sm transition-all duration-200 hover:bg-white/5 hover:border-white/40 block overflow-hidden"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ShineBorder
                      shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                      borderWidth={1}
                      duration={10}
                      className="rounded-xl"
                    />
                  </div>
                  <span className="relative z-10">{label}</span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
