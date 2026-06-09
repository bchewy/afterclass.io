"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Reviews", href: "/variant/zine" },
  { label: "Bidding", href: "/bidding" },
  { label: "Submit", href: "/submit" },
  { label: "Classic", href: "/" },
];

export function ZineHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#faf8f2]">
      <div className="flex items-stretch justify-between">
        <Link
          href="/variant/zine"
          className="zine-display flex items-center border-r-[3px] border-black bg-[#ffbe0b] px-4 py-3 text-2xl md:px-6 md:text-3xl"
        >
          AC
          <span className="hidden sm:inline">★ZINE</span>
        </Link>

        <nav className="flex flex-1 items-stretch overflow-x-auto">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/variant/zine"
                ? pathname === "/variant/zine"
                : pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`zine-display flex items-center border-r-[3px] border-black px-3 text-xs transition-colors md:px-5 md:text-sm ${
                  isActive
                    ? "bg-black text-[#ffbe0b]"
                    : "hover:bg-[#00f5d4] bg-[#faf8f2]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/variant"
          className="zine-display hidden items-center bg-[#ff006e] px-4 text-xs text-white md:flex md:px-6 md:text-sm"
        >
          Compare
        </Link>
      </div>
    </header>
  );
}
