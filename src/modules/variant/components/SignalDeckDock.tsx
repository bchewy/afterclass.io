"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ChartLineIcon,
  GithubIcon,
  PlusIcon,
  StarLineAltIcon,
} from "@/common/components/icons";
import { SearchCmdk } from "@/modules/search/components/SearchCmdk";
import { env } from "@/env";
import { cn } from "@/common/functions";

const DOCK_ITEMS = [
  { label: "Signal", href: "/variant", icon: StarLineAltIcon, exact: true },
  { label: "Classic", href: "/", icon: StarLineAltIcon, exact: true },
  { label: "Bids", href: "/bidding", icon: ChartLineIcon },
  { label: "Write", href: "/submit", icon: PlusIcon },
  { label: "OSS", href: env.NEXT_PUBLIC_AC_GITHUB_LINK, icon: GithubIcon, external: true },
];

export function SignalDeckDock() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Signal Deck navigation"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="sd-animate-float flex items-center gap-1 rounded-full border-2 border-[var(--sd-accent)]/60 bg-[var(--sd-surface)]/95 px-2 py-2 shadow-[0_0_40px_var(--sd-glow)] backdrop-blur-xl">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact
            ? pathname === item.href
            : pathname?.startsWith(item.href);

          const linkClass = cn(
            "signal-deck-mono flex flex-col items-center gap-0.5 rounded-full px-3 py-2 text-[9px] tracking-wider uppercase transition",
            isActive
              ? "bg-[var(--sd-accent)] text-white"
              : "text-[var(--sd-muted)] hover:bg-[var(--sd-accent)]/20 hover:text-[var(--sd-ink)]",
          );

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <Icon size={16} />
                {item.label}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href} className={linkClass}>
              <Icon size={16} />
              {item.label}
            </Link>
          );
        })}

        <div className="ml-1 border-l border-[var(--sd-accent)]/30 pl-2">
          <SearchCmdk asChild>
            <button
              type="button"
              className="signal-deck-mono flex flex-col items-center gap-0.5 rounded-full px-3 py-2 text-[9px] tracking-wider text-[var(--sd-cyan)] uppercase hover:bg-[var(--sd-cyan)]/10"
            >
              <span className="text-base">⌘</span>
              Find
            </button>
          </SearchCmdk>
        </div>
      </div>
    </nav>
  );
}
