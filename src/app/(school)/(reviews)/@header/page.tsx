import { ProgressLink } from "@/common/components/progress-link";
import {
  AfterclassIcon,
  BooksIcon,
  ChartLineIcon,
  GraduationCapIcon,
  MemoIcon,
  PlusIcon,
  SearchIcon,
} from "@/common/components/icons";

const liveSignals = [
  {
    label: "Course heat",
    value: "14k+",
    detail: "reviews pulsing across SMU",
  },
  {
    label: "Bid pressure",
    value: "T-06",
    detail: "terms tracked before bidding",
  },
  {
    label: "Intel drops",
    value: "24/7",
    detail: "professor notes from real students",
  },
] as const;

const orbitItems = [
  "COR-MGMT1302",
  "IS111",
  "BOSS bids",
  "Prof notes",
  "Group project warnings",
  "Sem 2 planning",
] as const;

export default async function HomeHeader() {
  return (
    <section
      data-test="home-radical-hero"
      className="relative w-full overflow-hidden rounded-[2rem] border border-lime-300/30 bg-zinc-950 text-white shadow-[0_30px_120px_rgba(65,255,155,0.22)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(190,255,70,0.28),transparent_32%),radial-gradient(circle_at_82%_6%,rgba(168,85,247,0.26),transparent_30%),linear-gradient(135deg,rgba(24,24,27,0.2),rgba(9,9,11,1)_70%)]" />
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px] opacity-30" />
      <div className="pointer-events-none absolute top-10 -right-20 hidden h-80 w-80 rounded-full border border-lime-300/30 md:block" />
      <div className="pointer-events-none absolute top-20 -right-10 hidden h-56 w-56 rounded-full border border-fuchsia-300/20 md:block" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] md:px-10 md:py-14">
        <div className="flex min-h-[560px] flex-col justify-between gap-10">
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold tracking-[0.28em] text-lime-200 uppercase backdrop-blur">
              <AfterclassIcon className="size-5 text-lime-300" />
              Campus signal wall
            </div>
            <div className="hidden rounded-full bg-lime-300 px-3 py-1 text-xs font-black tracking-[0.24em] text-zinc-950 uppercase sm:block">
              Radical concept
            </div>
          </div>

          <div className="max-w-4xl space-y-6">
            <p className="font-mono text-xs tracking-[0.48em] text-fuchsia-200 uppercase">
              AfterClass / live course intelligence
            </p>
            <h1 className="text-5xl leading-[0.98] font-black tracking-[-0.08em] text-balance sm:text-7xl md:text-8xl lg:text-9xl">
              Stop picking classes in the dark.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
              A loud, student-run radar for reviews, bidding pressure, professor
              patterns, and the messy truth behind every module.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ProgressLink
                href="/search"
                data-test="home-hero-search"
                className="h-12 rounded-full bg-lime-300 px-6 text-base font-black text-zinc-950 shadow-[0_0_36px_rgba(190,255,70,0.45)] hover:bg-lime-200"
              >
                <SearchIcon className="size-5" />
                Search the grid
              </ProgressLink>
              <ProgressLink
                href="/submit"
                data-test="home-hero-review"
                className="h-12 rounded-full border border-white/20 bg-white/10 px-6 text-base font-bold text-white hover:bg-white/20"
              >
                <PlusIcon className="size-5" />
                Drop a review
              </ProgressLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {liveSignals.map((signal) => (
              <article
                key={signal.label}
                data-test="home-live-signal"
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur transition-transform hover:-translate-y-1"
              >
                <p className="font-mono text-[0.65rem] tracking-[0.28em] text-zinc-400 uppercase">
                  {signal.label}
                </p>
                <p className="mt-3 text-4xl font-black tracking-[-0.08em] text-lime-200">
                  {signal.value}
                </p>
                <p className="mt-2 text-sm leading-5 text-zinc-300">
                  {signal.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-4 shadow-2xl backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-lime-300/20 to-transparent" />
          <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-xs tracking-[0.26em] text-zinc-300 uppercase">
            <span>Signal console</span>
            <span className="flex items-center gap-2 text-lime-200">
              <span className="size-2 animate-pulse rounded-full bg-lime-300" />
              Live
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            <div className="grid grid-cols-[auto_1fr] gap-3 rounded-3xl bg-lime-300 p-4 text-zinc-950">
              <GraduationCapIcon className="mt-1 size-7" />
              <div>
                <p className="font-mono text-xs tracking-[0.28em] uppercase">
                  Pick strategy
                </p>
                <p className="mt-3 text-3xl leading-none font-black tracking-[-0.06em]">
                  Reviews, bids, scars, receipts.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-4">
                <ChartLineIcon className="size-7 text-fuchsia-200" />
                <p className="mt-8 font-mono text-xs tracking-[0.24em] text-zinc-400 uppercase">
                  Demand curve
                </p>
                <div className="mt-3 flex h-24 items-end gap-2">
                  {[36, 58, 42, 78, 64, 92, 72].map((height, index) => (
                    <span
                      key={height + index}
                      className="flex-1 rounded-t-full bg-gradient-to-t from-fuchsia-500 to-lime-200"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-4">
                <BooksIcon className="size-7 text-lime-200" />
                <p className="mt-8 font-mono text-xs tracking-[0.24em] text-zinc-400 uppercase">
                  Module chatter
                </p>
                <div className="mt-3 space-y-2">
                  {["killer finals", "curve friendly", "slides matter"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="block rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-200"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 py-4">
              <div className="home-signal-marquee flex w-max gap-3 font-mono text-xs tracking-[0.22em] text-lime-100 uppercase">
                {[...orbitItems, ...orbitItems].map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="rounded-full border border-lime-200/20 px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-3 rounded-3xl border border-white/10 bg-white/[0.07] p-4">
              <MemoIcon className="mt-1 size-7 text-lime-200" />
              <div>
                <p className="font-mono text-xs tracking-[0.24em] text-zinc-400 uppercase">
                  Latest field note
                </p>
                <p className="mt-3 text-xl font-black tracking-[-0.04em]">
                  Take the 8:15 class only if coffee is part of your degree
                  plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
