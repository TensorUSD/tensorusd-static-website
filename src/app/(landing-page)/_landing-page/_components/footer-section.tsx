import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord,
  FaLinkedin,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

interface FooterSocialLink {
  id: string;
  name: string;
  logo: React.ReactNode;
  url: string;
  newPage?: boolean;
}

const socialLinks: FooterSocialLink[] = [
  {
    id: "twitter",
    name: "Twitter",
    logo: <FaXTwitter size={20} />,
    url: "https://x.com/TensorUSD",
    newPage: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logo: <FaLinkedin size={20} />,
    url: "https://www.linkedin.com/company/tensorusd",
    newPage: true,
  },
  {
    id: "discord",
    name: "Discord",
    logo: <FaDiscord size={20} />,
    url: "https://discord.gg/E9y6F6P4w8",
    newPage: true,
  },
  {
    id: "contact",
    name: "Email",
    logo: <FaRegEnvelope size={20} />,
    url: "mailto:admin@tensorusd.com",
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href?: string;
    external?: boolean;
    component?: React.ReactNode;
  }[];
}) {
  return (
    <div>
      <h3 className="text-base font-semibold mb-6 text-white">{title}</h3>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.label}>
            {link.component ? (
              <div className="font-light hover:text-primary transition-colors flex items-center gap-1 w-fit">
                {link.component}
              </div>
            ) : link.href ? (
              <Link
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="hover:text-primary transition-colors flex items-center gap-1 w-fit"
              >
                {link.label}
                {link.external && <MoveUpRight size={14} />}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-white/60 via-purple-500 to-white/60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-linear-to-r from-white/60 via-purple-400 to-white/60 blur-sm" />

      <div
        className="absolute bottom-0 left-0 right-0 h-[70%] pointer-events-none opacity-50"
        style={{
          backgroundImage: "url('/footer-image.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "900px auto",
          backgroundPosition: "top center",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-[70%] pointer-events-none bg-linear-to-b from-black via-black/40 to-transparent" />

      <div className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 -z-10 w-[300px] h-[400px] md:w-[650px] md:h-[800px]">
        <Image
          src="/blob-2.webp"
          alt="blob second"
          fill
          className="object-cover rotate-60 opacity-90"
        />
      </div>

      <div className="relative container mx-auto px-6 pt-44 pb-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo/circle-logo.png"
                  alt="TensorUSD Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                  preload
                />
              </div>
              <span className="font-semibold tracking-tight text-2xl">
                TensorUSD
              </span>
            </Link>

            <p className="text-sm text-muted-foreground max-w-xs">
              Decentralized CDP stablecoin protocol built for Bittensor economy.
            </p>

            <div className="flex items-center gap-5 pt-8">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  target={link.newPage ? "_blank" : "_self"}
                  rel={link.newPage ? "noopener noreferrer" : undefined}
                  aria-label={link.name}
                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {link.logo}
                </Link>
              ))}
            </div>
          </div>

          <nav
            className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3"
            aria-label="Footer navigation"
          >
            <FooterColumn
              title="Individuals"
              links={[
                { label: "Get Started", href: "/app" },
                { label: "TUSDT Token", href: "/app" },
                {
                  label: "Staking",
                  href: "https://taostats.io/subnets/113",
                  external: true,
                },
              ]}
            />

            <FooterColumn
              title="Community"
              links={[{ label: "FAQ", href: "/#faq" }]}
            />

            <FooterColumn
              title="Resources"
              links={[
                {
                  label: "Whitepaper",
                  href: "https://docs.tensorusd.com/whitepaper/tensorusd-whitepaper-v1.0",
                  external: true,
                },
                {
                  label: "Docs",
                  href: "https://docs.tensorusd.com/",
                  external: true,
                },
              ]}
            />
          </nav>
        </div>
      </div>
    </footer>
  );
}
