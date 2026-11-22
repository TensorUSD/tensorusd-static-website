// biome-ignore-all lint/security/noDangerouslySetInnerHtml: static, trusted JSON-LD schema data
import { LazySection } from "@/components/ui/lazy-section";
import { jsonLd } from "@/lib/seo";
import FAQSection from "./_landing-page/_components/faq-section";
import FooterSection from "./_landing-page/_components/footer-section";
import HeroSection from "./_landing-page/_components/hero-section";
import HowItWorksSection from "./_landing-page/_components/how-tensorusd-work";
import { HomeNavbar } from "./_landing-page/_components/navbar/home-navbar";
import ProtocolOverviewSection from "./_landing-page/_components/protocol-overview-section";
import ValuePropositionSection from "./_landing-page/_components/stablecoin-for-bittensor";
import TaoOnWorkSection from "./_landing-page/_components/tao-on-work";
import TransparentCostsSection from "./_landing-page/_components/transparent-cost";
import WhyBittensor from "./_landing-page/_components/why-bittensor";
import WhySection from "./_landing-page/_components/why-people-use-tusdt";

export default function Home() {
  return (
    <div className="bg-black/80 dark text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomeNavbar />
      <HeroSection />
      <ProtocolOverviewSection />
      <LazySection margin="0px 0px 600px 0px">
        <ValuePropositionSection />
      </LazySection>
      <LazySection
        id="how-it-works"
        margin="0px 0px 600px 0px"
        minHeight="80vh"
      >
        <HowItWorksSection />
      </LazySection>
      <LazySection margin="0px 0px 600px 0px">
        <WhySection />
      </LazySection>
      <LazySection margin="0px 0px 800px 0px" minHeight="80vh">
        <WhyBittensor />
      </LazySection>
      <LazySection id="transparent-costs" margin="0px 0px 600px 0px">
        <TransparentCostsSection />
      </LazySection>
      <LazySection id="faq" margin="0px 0px 600px 0px" minHeight="50vh">
        <FAQSection />
      </LazySection>
      <LazySection margin="0px 0px 800px 0px">
        <TaoOnWorkSection />
      </LazySection>
      <LazySection margin="0px 0px 600px 0px" minHeight="50vh">
        <FooterSection />
      </LazySection>
    </div>
  );
}
