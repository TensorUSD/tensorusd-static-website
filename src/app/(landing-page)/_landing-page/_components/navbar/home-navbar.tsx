"use client";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import { TopBar } from "./home-topbar";

const navLinks = [
  { label: "How it works", href: "#how-it-works", external: false },
  { label: "Protocol & Fees", href: "#transparent-costs", external: false },
  {
    label: "Roadmap",
    href: "https://docs.tensorusd.com/roadmap-and-growth/roadmap",
    external: true,
  },
  { label: "Docs", href: "https://docs.tensorusd.com/", external: true },
  { label: "FAQ", href: "#faq", external: false },
  { label: "Community", href: "https://discord.gg/E9y6F6P4w8", external: true },
];

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={panelRef}
      className={cn(
        "lg:hidden w-full z-40 bg-[#050505]/98 backdrop-blur-xs",
        "transition-all duration-300 overflow-y-auto",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none hidden",
      )}
    >
      <nav className="flex flex-col divide-y divide-white/8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (!link.external && link.href.startsWith("#")) {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", link.href);
                }
              }
              onClose();
            }}
            className="flex items-center justify-between px-6 py-4 text-white text-[15px] font-medium"
          >
            {link.label}
            <ChevronRight size={18} className="text-zinc-500" />
          </Link>
        ))}
      </nav>

      <div className="flex flex-col gap-3 px-6 py-5 border-t border-white/8">
        <Link href="/app" onClick={onClose}>
          <Button
            size="lg"
            variant="outline"
            className="w-full h-11 text-base relative"
          >
            <ShineBorder
              shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              borderWidth={1}
              duration={20}
            />
            Mint TUSDT
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function LaptopButtonsMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "hidden lg:block xl:hidden",
        "w-full z-40 bg-[#050505]/98 backdrop-blur-xs",
        "transition-all duration-300",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none hidden!",
      )}
    >
      <div className="flex flex-col gap-3 px-6 py-5 border-t border-white/8">
        <Link href="/app" onClick={onClose}>
          <Button
            size="lg"
            variant="outline"
            className="w-full h-11 text-base relative"
          >
            <ShineBorder
              shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              borderWidth={1}
              duration={20}
            />
            Mint TUSDT
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function HomeNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="top-0 left-0 right-0 z-50 text-white">
      <TopBar />
      <div className="flex flex-col justify-center items-center w-full border-t border-b border-primary/40 py-3">
        <div className="flex justify-between items-center px-5 md:pl-22 h-[65px] w-full">
          <Link
            href="/"
            className="flex  items-center gap-3 font-bold shrink-0"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/logo/circle-logo.png"
                alt="tensorUSD logo"
                fill
                className="object-contain"
                sizes="32px"
                preload
              />
            </div>
            <span className="font-bold tracking-tight text-xl">TensorUSD</span>
          </Link>

          <div className="hidden lg:flex justify-center items-center gap-8 pl-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!link.external && link.href.startsWith("#")) {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", link.href);
                    }
                  }
                }}
                className="transition-colors whitespace-nowrap text-[17px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-3">
              <Link href="/app">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 h-11 text-base relative"
                >
                  <ShineBorder
                    shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    borderWidth={1}
                    duration={20}
                  />
                  Mint TUSDT
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>

            <button
              type="button"
              className="xl:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? (
                <X size={22} className="text-white" />
              ) : (
                <Menu size={22} className="text-white" />
              )}
            </button>
          </div>
        </div>
        <MobileMenu open={open} onClose={() => setOpen(false)} />
        <LaptopButtonsMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
