import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tensorusd.com"),

  title: "TensorUSD (TUSDT) – TAO-Backed Stablecoin for Bittensor",

  description:
    "TensorUSD (TUSDT) is a decentralized, 1.5× overcollateralized stablecoin backed by TAO and designed as a native stable unit of account for the Bittensor ecosystem.",

  keywords: [
    "TensorUSD",
    "TUSDT",
    "TAO stablecoin",
    "Bittensor stablecoin",
    "overcollateralized stablecoin",
    "Bittensor DeFi",
    "non-custodial stablecoin",
    "crypto CDP stablecoin",
  ],

  authors: [{ name: "TensorUSD Team" }],
  creator: "TensorUSD",
  publisher: "TensorUSD",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://tensorusd.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tensorusd.com",
    siteName: "TensorUSD",
    title: "TensorUSD (TUSDT) – TAO-Backed Stablecoin",
    description:
      "A decentralized, 1.5× overcollateralized stablecoin backed by TAO for the Bittensor ecosystem.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TensorUSD Stablecoin",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@TensorUSD",
    creator: "@TensorUSD",
    title: "TensorUSD (TUSDT) – TAO-Backed Stablecoin",
    description:
      "Decentralized, TAO-backed stablecoin for liquidity and payments in the Bittensor ecosystem.",
    images: ["/twitter-image.png"],
  },

  verification: {
    google: "z4ZmwAfPLfWOC9XiNDtF3v0ok50ARM_6JWdFhIA6JhI",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark h-full antialiased ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
