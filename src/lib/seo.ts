export const siteUrl = "https://tensorusd.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TensorUSD",
  url: siteUrl,
  logo: `${siteUrl}/logo/circle-logo.png`,
  description:
    "TensorUSD (TUSDT) is a decentralized, non-custodial stablecoin backed by TAO and designed as a native stable unit of account for the Bittensor ecosystem.",
  sameAs: [
    "https://x.com/TensorUSD",
    "https://www.linkedin.com/company/tensorusd",
  ],
};

export const financialProductSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "TensorUSD (TUSDT)",
  description:
    "A decentralized, 1.5× overcollateralized stablecoin backed by TAO that allows users to access liquidity without selling their assets within the Bittensor ecosystem.",
  provider: {
    "@type": "Organization",
    name: "TensorUSD",
  },
  category: "Stablecoin",
  url: siteUrl,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TensorUSD",
  url: siteUrl,
  description:
    "TensorUSD (TUSDT) is a TAO-backed decentralized stablecoin for payments, liquidity, and DeFi within the Bittensor ecosystem.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TensorUSD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TensorUSD (TUSDT) is a decentralized, 1.5× overcollateralized stablecoin backed by TAO and built for the Bittensor ecosystem.",
      },
    },
    {
      "@type": "Question",
      name: "Who is TensorUSD designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TensorUSD is built for TAO holders, stable users, and subnet developers within the Bittensor ecosystem.",
      },
    },
    {
      "@type": "Question",
      name: "Is TensorUSD non-custodial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Users control their vaults and collateral through smart contracts and no centralized entity holds user funds.",
      },
    },
  ],
};

export const jsonLd = [
  organizationSchema,
  financialProductSchema,
  websiteSchema,
  faqSchema,
];
