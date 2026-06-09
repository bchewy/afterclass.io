import {
  BooksIcon,
  GraduationCapIcon,
  PenIcon,
  SearchIcon,
  StarLineAltIcon,
} from "@/common/components/icons";
import { Button } from "@/common/components/button";
import { ProgressLink } from "@/common/components/progress-link";
import { SearchCmdk } from "@/modules/search/components/SearchCmdk";

const signalCards = [
  {
    label: "Reviews indexed",
    value: "12K+",
    detail: "professor and course takes",
  },
  {
    label: "Fastest path",
    value: "/",
    detail: "opens command search",
  },
  {
    label: "Student lens",
    value: "SG",
    detail: "built around local context",
  },
];

export default async function HomeHeader() {
  return (
    <section className="shadow-primary/20 relative left-1/2 w-[min(calc(100vw-1rem),1180px)] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#080614] px-4 py-5 text-white shadow-2xl md:rounded-[3rem] md:px-8 md:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.45),transparent_28%),radial-gradient(circle_at_78%_8%,rgba(45,212,191,0.28),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_32%)]" />
      <div className="absolute top-10 -right-24 h-72 w-72 rounded-full border border-white/10 bg-white/5 blur-2xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <div className="flex min-h-[31rem] flex-col justify-between gap-8 rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold tracking-[0.28em] text-violet-100 uppercase">
              <StarLineAltIcon className="size-4" />
              AfterClass experimental home
            </div>
            <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-xs font-medium text-emerald-100">
              Radical variant
            </div>
          </div>

          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl leading-[0.88] font-black tracking-[-0.08em] text-white md:text-7xl lg:text-8xl">
              Stop scrolling.
              <span className="block bg-gradient-to-r from-violet-200 via-white to-cyan-200 bg-clip-text text-transparent">
                Pick classes like a strategist.
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/68 md:text-xl">
              A command-center take on AfterClass: search first, social proof up
              front, review intelligence framed like live campus telemetry.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
            <SearchCmdk asChild>
              <Button className="h-16 justify-start rounded-2xl border border-white/15 bg-white text-left text-base font-semibold text-[#130d2f] shadow-xl shadow-violet-950/30 hover:bg-violet-50 md:px-6">
                <SearchIcon className="text-primary size-5" />
                Search professors, courses, survival intel
                <span className="ml-auto rounded-lg bg-[#130d2f] px-2.5 py-1 text-xs text-white">
                  /
                </span>
              </Button>
            </SearchCmdk>
            <ProgressLink
              href="/submit"
              className="h-16 rounded-2xl border-white/15 bg-violet-400 px-6 text-base font-bold text-[#130d2f] hover:bg-violet-300"
              data-test="hero-write-review"
            >
              <PenIcon className="size-5" />
              Write signal
            </ProgressLink>
            <ProgressLink
              href="/bidding"
              variant="outline"
              className="h-16 rounded-2xl border-white/15 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10 hover:text-white"
            >
              <BooksIcon className="size-5" />
              Bid tools
            </ProgressLink>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.6rem] border border-cyan-200/20 bg-cyan-200/[0.08] p-5 md:p-6">
            <div className="mb-6 flex items-center justify-between text-sm text-cyan-100/80">
              <span>Campus readout</span>
              <span className="rounded-full bg-cyan-200/15 px-3 py-1">
                live-ish
              </span>
            </div>
            <div className="space-y-4">
              {signalCards.map((card) => (
                <div
                  key={card.label}
                  className="grid grid-cols-[5rem_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-3xl font-black tracking-tighter text-white">
                    {card.value}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{card.label}</div>
                    <div className="text-sm text-white/55">{card.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white p-5 text-[#130d2f] md:p-6">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-violet-300/60 blur-2xl" />
            <div className="relative flex items-start gap-4">
              <div className="rounded-2xl bg-[#130d2f] p-3 text-white">
                <GraduationCapIcon className="size-7" />
              </div>
              <div>
                <div className="text-primary text-sm font-bold tracking-[0.22em] uppercase">
                  New mental model
                </div>
                <p className="mt-3 text-2xl leading-tight font-black tracking-[-0.04em]">
                  Reviews become decisions, not walls of text.
                </p>
                <p className="mt-3 text-sm leading-6 text-[#130d2f]/65">
                  The page pushes students toward immediate lookup, comparison,
                  and contribution instead of a passive feed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
