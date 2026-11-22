"use client";

const topBarLabels = [
  {
    label: "💡TAO as collateral support now available in vault dashboard",
  },
  { label: "🔒 Smart contract audit underway with leading Web3 security firm" },
  { label: "📣 Join 500+ community members on Discord" },
  {
    label:
      " 🟢 MAINNET LIVE Protocol is live on Bittensor SN113 - Mainnet Live 2026",
  },
];

export function TopBar() {
  return (
    <div className="w-full overflow-hidden text-white/80 py-1">
      <div className="relative flex overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...topBarLabels, ...topBarLabels, ...topBarLabels].map(
            (item, i) => (
              <span
                key={`${item.label}-${i}`}
                className="text-xs md:text-sm text-white/70 font-medium mx-8 md:mx-16"
              >
                {item.label}
              </span>
            ),
          )}
        </div>
        <div
          className="flex animate-marquee whitespace-nowrap shrink-0"
          aria-hidden
        >
          {[...topBarLabels, ...topBarLabels, ...topBarLabels].map(
            (item, i) => (
              <span
                key={`dup-${item.label}-${i}`}
                className="text-xs md:text-sm text-white/70 font-medium mx-8 md:mx-16"
              >
                {item.label}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
