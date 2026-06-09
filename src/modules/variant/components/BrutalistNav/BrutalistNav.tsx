"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Reviews", href: "/variant", short: "REV" },
  { label: "Bidding", href: "/variant#bidding", short: "BID" },
  { label: "Compare", href: "/variant/compare", short: "CMP" },
  { label: "Classic", href: "/", short: "OLD" },
];

export const BrutalistNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-40 border-t-[3px] border-[#0a0a0a] bg-white">
      <div className="mx-auto flex max-w-6xl items-stretch justify-between">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/variant"
              ? pathname === "/variant"
              : pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center border-r-[3px] border-[#0a0a0a] px-2 py-3 text-center transition-colors last:border-r-0 md:py-4 ${
                isActive
                  ? "bg-[#d4ff00] text-[#0a0a0a]"
                  : "bg-white text-[#0a0a0a] hover:bg-[#f2ede4]"
              }`}
            >
              <span className="text-[0.6rem] font-bold tracking-[0.15em] md:text-xs">
                {item.short}
              </span>
              <span className="mt-0.5 hidden text-[0.65rem] font-medium md:block">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
