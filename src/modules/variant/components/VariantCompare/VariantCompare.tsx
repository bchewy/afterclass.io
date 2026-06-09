"use client";

import Link from "next/link";

const CHANGES = [
  {
    area: "Navigation",
    classic: "Collapsible left sidebar with nested groups",
    variant: "Fixed bottom dock — thumb-zone, full-width, no collapse",
  },
  {
    area: "Layout width",
    classic: "954px centered container with soft margins",
    variant: "Full-bleed edge-to-edge grid, no max-width cage",
  },
  {
    area: "Color system",
    classic: "Soft purple primary (oklch), lavender secondary, rounded cards",
    variant: "Black / lime / orange brutalist palette, zero purple",
  },
  {
    area: "Typography",
    classic: "Inter body, semibold headings, relaxed tracking",
    variant: "Space Grotesk, uppercase display, tight tracking",
  },
  {
    area: "Review layout",
    classic: "Single-column list inside rounded-3xl card",
    variant: "Asymmetric bento grid with featured hero card",
  },
  {
    area: "Corners & depth",
    classic: "12px radius, subtle borders, soft shadows",
    variant: "0px radius, 3px black borders, hard offset shadows",
  },
  {
    area: "Header",
    classic: "Sticky top bar + breadcrumb + theme toggle",
    variant: "Marquee ticker + split hero manifesto block",
  },
  {
    area: "CTAs",
    classic: "Ghost/outline buttons in right rail sidebar",
    variant: "Lime brutalist buttons with press-down interaction",
  },
];

export const VariantCompare = () => {
  return (
    <div className="relative z-10 p-4 pb-28 md:p-8">
      <div className="mb-8">
        <p className="text-xs font-bold tracking-[0.25em] text-[#ff4d00]">
          SIDE BY SIDE
        </p>
        <h1 className="text-4xl font-bold tracking-tighter uppercase md:text-5xl">
          Classic vs Underground
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-medium">
          Eight deliberate breaks from the current AfterClass design language.
        </p>
      </div>

      <div className="space-y-4">
        {CHANGES.map((change, i) => (
          <div
            key={change.area}
            className="brutal-card grid overflow-hidden md:grid-cols-12"
          >
            <div className="border-b-[3px] border-[#0a0a0a] bg-[#d4ff00] p-4 md:col-span-3 md:border-r-[3px] md:border-b-0">
              <span className="text-xs font-bold text-[#0a0a0a]/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-lg font-bold uppercase">
                {change.area}
              </h3>
            </div>
            <div className="border-b-[3px] border-[#0a0a0a] p-4 md:col-span-4 md:border-r-[3px] md:border-b-0">
              <p className="mb-2 text-[0.6rem] font-bold tracking-[0.2em] text-[#0a0a0a]/50 uppercase">
                Classic
              </p>
              <p className="text-sm font-medium">{change.classic}</p>
            </div>
            <div className="bg-[#0a0a0a] p-4 text-white md:col-span-5">
              <p className="mb-2 text-[0.6rem] font-bold tracking-[0.2em] text-[#d4ff00] uppercase">
                Underground
              </p>
              <p className="text-sm font-medium">{change.variant}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/variant" className="brutal-btn">
          View variant
        </Link>
        <Link href="/" className="brutal-btn brutal-btn-outline">
          View classic
        </Link>
      </div>
    </div>
  );
};
