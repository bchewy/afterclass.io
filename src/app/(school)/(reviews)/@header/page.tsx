import { ArrowRightIcon, SearchIcon, SparklesIcon } from "lucide-react";

import { Logo } from "@/common/components/logo";
import { ProgressLink } from "@/common/components/progress-link";

const signals = [
  "12k+ uncensored reviews",
  "course bids decoded",
  "professor signal, not folklore",
];

export default async function HomeHeader() {
  return (
    <section className="relative isolate w-full overflow-hidden rounded-[2rem] border border-lime-300/25 bg-[#080906] px-5 py-6 text-white shadow-2xl shadow-black/30 md:rounded-[3rem] md:px-10 md:py-10">
      <div
        className="absolute inset-0 -z-20 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(190, 255, 45, 0.24), transparent 28%), radial-gradient(circle at 84% 14%, rgba(80, 57, 212, 0.34), transparent 30%), linear-gradient(135deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 100%)",
          backgroundSize: "auto, auto, 34px 34px",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -z-10 h-[150%] w-20 -translate-x-1/2 -rotate-12 bg-lime-300/90 blur-[1px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-6 bottom-8 -z-10 hidden h-44 w-44 rounded-full border border-white/20 md:block"
        aria-hidden="true"
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full bg-white px-4 py-2 text-[#11130d]">
              <Logo />
            </div>
            <div className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs tracking-[0.24em] text-lime-200 uppercase">
              after-hours campus intelligence
            </div>
          </div>

          <div className="max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-300 px-3 py-1 font-mono text-xs tracking-[0.24em] text-[#11130d] uppercase">
              <SparklesIcon className="size-3.5" />
              rebuilt as a signal wall
            </p>
            <h1 className="font-[family-name:var(--font-poppins)] text-[clamp(3.5rem,13vw,10rem)] leading-[0.78] font-black tracking-[-0.1em] uppercase">
              Pick classes like contraband.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-7 text-white/74 md:text-xl">
              Reviews, bid intel, and professor notes remixed into a loud campus
              feed for students who want the real story before add/drop.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ProgressLink
              href="/search"
              className="group h-14 rounded-full bg-lime-300 px-6 text-base font-bold text-[#11130d] hover:bg-lime-200"
              data-umami-event="hero-search"
            >
              <SearchIcon className="size-5" />
              Search the signal
              <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
            </ProgressLink>
            <ProgressLink
              href="/submit"
              variant="outline"
              className="h-14 rounded-full border-white/25 bg-white/5 px-6 text-base font-bold text-white hover:bg-white hover:text-[#11130d]"
              data-umami-event="hero-write-review"
            >
              Drop a review
            </ProgressLink>
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-[2rem] border border-white/15 bg-black/35 p-4 backdrop-blur md:p-6">
          <div className="absolute inset-x-0 top-8 h-px bg-lime-300/80" />
          <div className="mb-12 flex items-center justify-between font-mono text-xs tracking-[0.22em] text-white/50 uppercase">
            <span>live board</span>
            <span>sg / nus / smu</span>
          </div>
          <div className="space-y-4">
            {signals.map((signal, index) => (
              <div
                key={signal}
                className="group grid grid-cols-[3rem_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition-transform hover:-translate-y-1 hover:bg-white/[0.11]"
              >
                <span className="font-mono text-2xl font-black text-lime-300">
                  0{index + 1}
                </span>
                <span className="text-2xl leading-none font-black tracking-[-0.06em] text-white uppercase md:text-4xl">
                  {signal}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 rotate-[-2deg] rounded-2xl bg-lime-300 p-4 text-[#11130d] shadow-xl shadow-lime-300/20">
            <p className="font-mono text-xs tracking-[0.24em] uppercase">
              anonymous note
            </p>
            <p className="mt-2 text-2xl leading-none font-black tracking-[-0.06em]">
              The best modules are hidden in the comments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
