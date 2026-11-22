import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description =
  "TensorUSD (TUSDT) minting, vaults, auctions, and liquidations are temporarily paused. Follow our community channels for the latest updates.";

export const metadata: Metadata = {
  title: "TensorUSD is Paused",
  description,
  alternates: {
    canonical: "https://tensorusd.com/app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tensorusd.com/app",
    siteName: "TensorUSD",
    title: "TensorUSD is Paused",
    description,
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
    title: "TensorUSD is Paused",
    description,
    images: ["/twitter-image.png"],
  },
};

export default function PausedPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-20 text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(120,120,120,0.35) 0%, rgba(80,80,80,0.2) 40%, transparent 75%)",
        }}
      />

      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <Image
          src="/logo/circle-logo.png"
          alt="TensorUSD logo"
          width={72}
          height={72}
          preload
          className="rounded-full object-contain"
        />

        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Paused
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          TensorUSD is paused
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          Minting, vaults, auctions, and liquidations are temporarily paused.
          Your funds remain secured by the protocol contracts. Follow our
          community channels for the latest updates.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-colors hover:bg-white/90"
          >
            Back to home
          </Link>
          <a
            href="https://discord.gg/E9y6F6P4w8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Join Discord
          </a>
        </div>
      </section>
    </main>
  );
}
