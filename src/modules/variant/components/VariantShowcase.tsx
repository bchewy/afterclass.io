"use client";

import Link from "next/link";
import { useState } from "react";
import { ZineHero } from "./ZineHero";
import { ZineReviewCard } from "./ZineReviewCard";
import { ZINE_MOCK_REVIEWS } from "@/modules/variant/data/mock-reviews";

const CHANGES = [
  {
    title: "Sidebar → Tab Bar",
    classic: "Collapsible left sidebar with shadcn navigation",
    zine: "Full-width brutal tab bar, zero chrome",
  },
  {
    title: "Purple SaaS → Punk Palette",
    classic: "OKLCH violet primary, soft rounded cards",
    zine: "Hot pink, electric yellow, cyan — 0px radius",
  },
  {
    title: "Inter/Poppins → Mono + Black",
    classic: "Clean sans-serif, subtle hierarchy",
    zine: "Archivo Black headlines, JetBrains Mono body",
  },
  {
    title: "Card List → Classified Ads",
    classic: "Muted hover states, line-clamped previews",
    zine: "Rotated stamp cards, hard shadows, wobble animation",
  },
  {
    title: "Quiet Header → Marquee Ticker",
    classic: "Breadcrumb + theme toggle",
    zine: "Scrolling punk ticker, grid hero, volume tags",
  },
];

function ClassicMockPreview() {
  const review = ZINE_MOCK_REVIEWS[0]!;

  return (
    <div className="rounded-xl bg-[#f1f1f3] p-4 font-[family-name:var(--font-inter)]">
      <div className="mb-4 flex gap-2">
        <div className="h-8 w-8 rounded-lg bg-[oklch(0.48_0.2229_280.55)]" />
        <div className="flex-1 space-y-1">
          <div className="h-3 w-24 rounded bg-gray-300" />
          <div className="h-2 w-16 rounded bg-gray-200" />
        </div>
      </div>
      <div className="mb-3 flex gap-2">
        <div className="h-7 flex-1 rounded-md bg-white shadow-sm" />
        <div className="h-7 w-20 rounded-md bg-white shadow-sm" />
      </div>
      <div className="space-y-3 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {review.professorName}
            </p>
            <p className="text-xs text-gray-500">{review.courseCode}</p>
          </div>
          <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">
            {review.rating}/5
          </span>
        </div>
        <p className="line-clamp-3 text-sm text-gray-600">{review.body}</p>
        <div className="flex gap-1">
          {review.reviewLabels.slice(0, 2).map((l) => (
            <span
              key={l.name}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-[0.65rem] text-gray-500"
            >
              {l.name.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-[0.65rem] text-gray-400">
        Classic AfterClass — sidebar + soft cards
      </p>
    </div>
  );
}

function ZineMockPreview() {
  return (
    <div className="overflow-hidden rounded-none border-[3px] border-black">
      <div className="border-b-[3px] border-black bg-[#ff006e] py-1">
        <p className="zine-display text-center text-[0.55rem] tracking-widest text-black">
          ★ UNDERGROUND EDITION ★
        </p>
      </div>
      <div className="scale-[0.85] origin-top p-2">
        <ZineHero />
        <div className="p-3">
          <ZineReviewCard review={ZINE_MOCK_REVIEWS[1]!} index={1} />
        </div>
      </div>
      <p className="border-t-[3px] border-black bg-black py-2 text-center text-[0.65rem] font-bold uppercase tracking-widest text-[#ffbe0b]">
        Zine Variant — brutal + editorial
      </p>
    </div>
  );
}

export function VariantShowcase() {
  const [activeTab, setActiveTab] = useState<"split" | "classic" | "zine">(
    "split",
  );

  return (
    <div className="min-h-dvh bg-[#0a0a0a] text-white">
      <div className="border-b border-white/10 px-6 py-8 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ff006e]">
          Design Experiment
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-archivo-black)] text-4xl uppercase leading-none md:text-6xl">
          AfterClass
          <span className="text-[#ffbe0b]"> Zine</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/60 md:text-base">
          A radical neo-brutalist reimagining. Same data, completely different
          energy — underground student newspaper instead of polished SaaS.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/variant/zine"
            className="bg-[#ff006e] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#ffbe0b] hover:text-black"
          >
            Enter Full Zine →
          </Link>
          <Link
            href="/"
            className="border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:border-white"
          >
            Back to Classic
          </Link>
        </div>
      </div>

      <div className="border-b border-white/10 px-6 md:px-12">
        <div className="flex gap-1">
          {(["split", "classic", "zine"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                activeTab === tab
                  ? "border-b-2 border-[#00f5d4] text-[#00f5d4]"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-8 md:px-12">
        <div
          className={`grid gap-8 ${
            activeTab === "split"
              ? "md:grid-cols-2"
              : "max-w-md md:max-w-lg"
          }`}
        >
          {activeTab !== "zine" && (
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
                Current Design
              </p>
              <ClassicMockPreview />
            </div>
          )}
          {activeTab !== "classic" && (
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#ff006e]">
                Zine Variant
              </p>
              <ZineMockPreview />
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-12 md:px-12">
        <h2 className="font-[family-name:var(--font-archivo-black)] text-2xl uppercase text-[#ffbe0b]">
          What Changed
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CHANGES.map((change) => (
            <div
              key={change.title}
              className="border border-white/10 p-4 transition hover:border-[#ff006e]"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {change.title}
              </h3>
              <p className="mt-2 text-xs text-white/40 line-through">
                {change.classic}
              </p>
              <p className="mt-1 text-xs text-[#00f5d4]">{change.zine}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
