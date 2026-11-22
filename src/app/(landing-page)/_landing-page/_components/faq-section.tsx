import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const faqs = [
  {
    value: "what-is",
    question: "What exactly is TensorUSD and how does it keep its $1 value?",
    answer:
      "TensorUSD (TUSDT) is a decentralized CDP-based stablecoin that maintains its $1 peg through overcollateralization with TAO, automated liquidations, and arbitrage incentives within the Bittensor ecosystem.",
  },
  {
    value: "liquidation-risk",
    question: "What's the risk of getting liquidated and how do I avoid it?",
    answer:
      "Liquidation occurs when your collateral ratio falls below the minimum threshold. To avoid it, maintain a healthy collateral buffer above the required ratio and monitor TAO price movements regularly.",
  },
  {
    value: "audience",
    question: "Who is TensorUSD designed for?",
    answer:
      "TensorUSD (TUSDT) is built for three core groups within the Bittensor ecosystem: TAO maximalists, stable holders, and subnet developers/applications.",
  },
  {
    value: "fees",
    question: "What are the fees? Are there any hidden costs?",
    answer:
      "TensorUSD has transparent fees including a stability fee on borrowed TUSDT and a liquidation penalty if your position is liquidated. There are no hidden costs — all fees are documented in our whitepaper.",
  },
  {
    value: "safety",
    question: "Is TensorUSD safe to use right now?",
    answer:
      "TensorUSD is undergoing rigorous audits and testing. While we've designed the protocol with security in mind, users should always assess their own risk tolerance before participating in any DeFi protocol.",
  },
  {
    value: "native",
    question: "Will TUSDT be native to the Bittensor chain?",
    answer:
      "Yes. TensorUSD will be native to Bittensor, with smart contracts written in INK to integrate directly with the Bittensor network.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 px-9 bg-black">
      <div
        className="pointer-events-none absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[60%] z-0 "
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(120,120,120,0.55) 0%, rgba(80,80,80,0.45) 40%, transparent 75%)",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-4xl ">
        <ScrollReveal
          variant="fadeInDown"
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="relative inline-block px-10 py-4">
            <div className="absolute top-0 left-0 right-0 flex items-center">
              <div className="w-2.5 h-2.5 bg-white -translate-x-1/4 -translate-y-1/5" />
              <div className="flex-1 h-px bg-linear-to-r from-white/50 via-amber-500/70 to-white/50" />
              <div className="w-2.5 h-2.5 bg-white translate-x-1/4 -translate-y-1/5" />
            </div>
            <div className="absolute top-0 left-0.5 w-px h-32 bg-linear-to-b from-white/50 to-transparent" />
            <div className="absolute top-0 right-0.5 w-px h-32 bg-linear-to-b from-white/50 to-transparent" />

            <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              Common Questions
            </h2>
          </div>

          <p className="text-base md:text-lg text-white/60 mt-8">
            Can't find what you're looking for? Ask on{" "}
            <Link
              href="https://discord.com/invite/E9y6F6P4w8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
            >
              Discord <ArrowRight size={16} />
            </Link>
          </p>
        </ScrollReveal>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          defaultValue="what-is"
        >
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.value} variant="fadeUp" delay={i * 0.1}>
              <AccordionItem
                value={faq.value}
                className="border border-white/40 bg-black rounded-xl backdrop-blur-sm px-6 hover:border-white/20 transition-colors data-[state=open]:border-white/20 last:border-b"
              >
                <AccordionTrigger className="text-base md:text-lg text-white/80 font-normal hover:no-underline py-5 hover:text-white border-b-0 [&>svg]:text-white/60">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-white/60 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
