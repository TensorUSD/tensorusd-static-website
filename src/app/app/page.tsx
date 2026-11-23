import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description =
  "TensorUSD (TUSDT) minting, vaults, auctions, and liquidations are temporarily paused. Follow our community channels for the latest updates.";

const taoHoldAddress = "5GrkdbkSiMYsWyrWebSAebDzngA1trvUbApWc6bkwTs8wMnT";

const payouts = [
  {
    address: "5HYChU99aY3hdGUSyN5zLzEm2etpECk7J2QhNyEMHqBWVcW5",
    amount: "0.93",
  },
  {
    address: "5CZrU4EbY5ZFqTxvWhoZRvSR38bdZWFNPP4twKrpAHod1VYk",
    amount: "0.86",
  },
  {
    address: "5EiaUQ3zpEVnixo3pxtTaz36RuVc8FUUp45SexTWxuBtpoJD",
    amount: "0.81",
  },
  {
    address: "5CwUPk7tbn4zNUe6SfmgMPooF7fHHRSSxAawxhe1PsbAMuCh",
    amount: "0.79",
  },
  {
    address: "5Fvn3S7LfHCNt1kDSbXkMpmNQKJZnuE21L2uXVYse4MXjKvx",
    amount: "0.737",
  },
  {
    address: "5GndoVhMAr8mF5zv1gPVLQYbXzmXe3Xh3kF37nt8qy5CaXTP",
    amount: "0.49",
  },
  {
    address: "5ERsj6hTKxqXqnuKQpNPazwvNYMgJ7Sr61HFj7sxEZ7s89jU",
    amount: "0.339",
  },
  {
    address: "5CAeKwegE8wNFf2ArS88XUBn93D9gPvKXHGpgdttwxkEw8Hf",
    amount: "0.256",
  },
  {
    address: "5HEsURsFUeu4LK7uM7xEPpen5xmwG4H7HDiqYD4S43xNnnwW",
    amount: "0.24",
  },
  {
    address: "5CMGSFvP5A2UAunRzjaZHx5BDBYmYBm8nQNdW25uZNqX5sEi",
    amount: "0.13",
  },
  {
    address: "5Cwm4SM92bhZWnncdJp2a2Ag7Xu936wxE8vQ4LdMxUqYrHw9",
    amount: "0.09",
  },
  {
    address: "5FBcioi6uRMNPMyVZDQSb6BD3JwGjaZs8mkPeSp6JLxNfLgq",
    amount: "0.103",
  },
  {
    address: "5FmvyCEjHMDaRJD4fBgdprK9nBBkVxskQYLuTD3bMcSD8cCn",
    amount: "0.023",
  },
  {
    address: "5HSK5ZqbeTbCGLkwPz3WTbsVKCDkHtMJDYB6M1DfyVZTCDZ5",
    amount: "0.016",
  },
  {
    address: "5Gn92S5J8NHjUtJ2Zs7PEAy3iQBBTwke63diPDeqoAyShwMe",
    amount: "0.014",
  },
  {
    address: "5CyjcQCao8so3Zus5ssrQaVzTit1xjiuEGk1gPfAfEWtHzQi",
    amount: "0.013",
  },
];

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
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-20 text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(120,120,120,0.35) 0%, rgba(80,80,80,0.2) 40%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        <section className="flex w-full max-w-2xl flex-col items-center text-center">
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

        <section className="mt-16 w-full" aria-labelledby="payouts-heading">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="payouts-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                TAO Payouts
              </h2>
              <p className="mt-1 text-sm text-white/50">
                TUSDT holder addresses and their TAO payout amounts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-[11px] uppercase tracking-widest text-white/50">
                TAO Hold Address
              </p>
              <p className="mt-1 break-all font-mono text-xs text-white/80 sm:text-sm">
                {taoHoldAddress}
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">
                  TUSDT holder addresses and TAO payout amounts
                </caption>
                <thead className="border-b border-white/10 bg-white/[0.04] text-xs uppercase tracking-wider text-white/50">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">
                      TUSDT Holder Address
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-right font-medium"
                    >
                      TAO Payout
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {payouts.map((payout) => (
                    <tr
                      key={payout.address}
                      className="transition-colors hover:bg-white/[0.03]"
                    >
                      <td className="break-all px-4 py-3 text-xs text-white/70 sm:text-sm">
                        {payout.address}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-xs text-white sm:text-sm">
                        {payout.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
