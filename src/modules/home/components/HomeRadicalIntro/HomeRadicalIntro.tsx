import Link from "next/link";

import {
  AfterclassIcon,
  PenIcon,
  SearchIcon,
  StarLineAltIcon,
} from "@/common/components/icons";

const SIGNAL_STATS = [
  { value: "12k+", label: "reviews decoded" },
  { value: "24/7", label: "campus chatter" },
  { value: "2 min", label: "to add a signal" },
];

const RADAR_CARDS = [
  {
    eyebrow: "Lecture tempo",
    title: "Fast, fair, brutal, kind.",
    detail: "Reviews read like field notes, not brochure copy.",
  },
  {
    eyebrow: "Bid pressure",
    title: "Spot the modules filling up.",
    detail: "Use crowd context before the window closes.",
  },
  {
    eyebrow: "Professor lore",
    title: "Names, patterns, receipts.",
    detail: "Turn scattered Telegram advice into searchable memory.",
  },
];

const TICKER_ITEMS = [
  "grading curve",
  "project load",
  "finals survival",
  "class vibe",
  "attendance risk",
  "tutorial fit",
  "bid pressure",
];

export const HomeRadicalIntro = () => {
  return (
    <section
      aria-labelledby="home-signal-room-title"
      className="home-signal-room relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#08070c] px-5 py-6 text-white shadow-[0_32px_120px_rgba(36,18,95,0.45)] md:px-8 md:py-9 lg:px-10"
    >
      <div className="home-signal-grid" aria-hidden />
      <div className="home-signal-scan" aria-hidden />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#f5ff61]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#6b35ff]/30 blur-3xl" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-xs font-semibold tracking-[0.28em] text-[#f5ff61] uppercase">
            <span className="size-2 rounded-full bg-[#f5ff61] shadow-[0_0_18px_#f5ff61]" />
            live campus intelligence
          </div>

          <div className="space-y-4">
            <h1
              id="home-signal-room-title"
              className="max-w-3xl text-5xl leading-[0.88] font-[var(--font-poppins)] font-black tracking-[-0.08em] text-balance md:text-7xl"
            >
              The campus signal room.
            </h1>
            <p className="max-w-xl text-base leading-7 text-white/72 md:text-lg">
              AfterClass turns course reviews, bidding pressure, and professor
              lore into one loud read on what campus actually feels like.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/submit"
              data-test="home-radar-submit"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#f5ff61] px-5 py-3 font-semibold text-[#08070c] transition-transform hover:-translate-y-0.5 hover:bg-white"
            >
              <PenIcon className="size-5" />
              Add a field note
            </Link>
            <Link
              href="/search"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 font-semibold text-white transition-colors hover:bg-white/[0.16]"
            >
              <SearchIcon className="size-5" />
              Search the archive
            </Link>
          </div>

          <dl className="grid grid-cols-3 gap-2 border-y border-white/10 py-4">
            {SIGNAL_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-black tracking-[-0.05em] text-white md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs font-medium tracking-[0.16em] text-white/45 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur md:min-h-[460px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,255,97,0.22),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(107,53,255,0.36),transparent_34%)]" />
          <div className="home-signal-orbit absolute top-1/2 left-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/25 md:size-72" />
          <div className="absolute top-1/2 left-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#f5ff61]/40 bg-[#08070c]/80 shadow-[0_0_80px_rgba(245,255,97,0.18)]">
            <AfterclassIcon className="size-16 text-[#f5ff61]" />
          </div>

          <div className="home-signal-node top-[18%] left-[8%]">
            <StarLineAltIcon className="size-5" />
            peer proof
          </div>
          <div className="home-signal-node top-[32%] right-[6%]">
            <SearchIcon className="size-5" />
            instant recall
          </div>
          <div className="home-signal-node bottom-[12%] left-[18%]">
            <PenIcon className="size-5" />
            fresh note
          </div>

          <div className="absolute right-4 bottom-4 grid w-[min(88%,23rem)] gap-3">
            {RADAR_CARDS.map((card, index) => (
              <article
                key={card.eyebrow}
                className="rounded-2xl border border-white/10 bg-[#100f18]/80 p-4 shadow-2xl backdrop-blur"
                style={{ transform: `translateX(${index * -14}px)` }}
              >
                <p className="text-[0.65rem] font-bold tracking-[0.22em] text-[#f5ff61]/80 uppercase">
                  {card.eyebrow}
                </p>
                <h2 className="mt-1 text-lg font-[var(--font-poppins)] font-bold tracking-[-0.03em]">
                  {card.title}
                </h2>
                <p className="mt-1 text-sm leading-5 text-white/58">
                  {card.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 overflow-hidden rounded-full border border-white/10 bg-white/[0.08] py-2">
        <div className="home-signal-ticker flex w-max gap-4 text-xs font-bold tracking-[0.22em] text-white/55 uppercase">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-4">
              {item}
              <span className="size-1.5 rounded-full bg-[#f5ff61]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
