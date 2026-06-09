import Link from "next/link";

import { ProgressLink } from "@/common/components/progress-link";
import { cn } from "@/common/functions";

export function RadicalHomeHero() {
  return (
    <section className="relative border-b-2 border-[var(--radical-border)]">
      <div className="radical-grid-bg absolute inset-0 opacity-30" />
      <div className="relative z-10 grid min-h-[min(70vh,640px)] grid-cols-1 lg:grid-cols-12">
        {/* Left: giant display type */}
        <div className="flex flex-col justify-between border-b-2 border-[var(--radical-border)] p-6 md:p-10 lg:col-span-7 lg:border-b-0 lg:border-r-2">
          <div className="mb-8 flex items-center gap-3 text-xs tracking-widest text-[var(--radical-muted)]">
            <span className="inline-block size-2 bg-[var(--radical-accent)]" />
            AFTERCLASS.IO — SMU CAMPUS INTEL
            <span className="radical-blink text-[var(--radical-accent)]">█</span>
          </div>

          <div>
            <h1
              className={cn(
                "font-[family-name:var(--font-bebas-neue)] leading-[0.85] tracking-tight",
                "text-[clamp(4rem,15vw,11rem)]",
              )}
            >
              <span className="block text-[var(--radical-text)]">BREAK</span>
              <span className="block text-[var(--radical-accent)]">CLASS</span>
              <span className="block text-[var(--radical-text)]">ROOM</span>
              <span className="block text-[var(--radical-muted)]">BARRIERS</span>
            </h1>
          </div>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-[var(--radical-muted)] md:text-base">
            Raw, unfiltered course & professor intel. Bid analytics. Community
            reviews. No gatekeeping — built by students, for students.
          </p>
        </div>

        {/* Right: terminal panel */}
        <div className="flex flex-col lg:col-span-5">
          <div className="border-b-2 border-[var(--radical-border)] bg-[var(--radical-surface)] px-4 py-2 text-xs text-[var(--radical-muted)]">
            <span className="text-[var(--radical-hot)]">●</span>{" "}
            <span className="text-[var(--radical-accent)]">●</span>{" "}
            <span className="text-[var(--radical-cool)]">●</span>
            <span className="ml-3">ac://terminal — session active</span>
          </div>

          <div className="radical-scanline flex flex-1 flex-col justify-between p-6 md:p-8">
            <div className="space-y-2 font-mono text-xs leading-relaxed text-[var(--radical-cool)] md:text-sm">
              <p>
                <span className="text-[var(--radical-muted)]">$</span> afterclass
                --status
              </p>
              <p className="text-[var(--radical-text)]">
                reviews: <span className="text-[var(--radical-accent)]">12,847</span>
              </p>
              <p className="text-[var(--radical-text)]">
                courses: <span className="text-[var(--radical-accent)]">2,104</span>
              </p>
              <p className="text-[var(--radical-text)]">
                professors: <span className="text-[var(--radical-accent)]">891</span>
              </p>
              <p className="text-[var(--radical-text)]">
                bid_window:{" "}
                <span className="text-[var(--radical-hot)]">ACTIVE</span>
              </p>
              <p className="mt-4">
                <span className="text-[var(--radical-muted)]">$</span>{" "}
                <span className="radical-blink">_</span>
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              <ProgressLink
                href="/submit"
                className="group flex items-center justify-between border-2 border-[var(--radical-accent)] bg-[var(--radical-accent)] px-6 py-4 text-[var(--radical-bg)] transition-colors hover:bg-transparent hover:text-[var(--radical-accent)]"
                data-test="cta-write-review"
                data-umami-event="cta-btn-write-review"
              >
                <span className="text-sm font-bold tracking-widest">
                  WRITE A REVIEW →
                </span>
              </ProgressLink>
              <ProgressLink
                href="/bidding"
                className="flex items-center justify-between border-2 border-[var(--radical-border)] px-6 py-4 text-sm tracking-widest transition-colors hover:border-[var(--radical-accent)] hover:text-[var(--radical-accent)]"
              >
                BID ANALYTICS →
              </ProgressLink>
              <Link
                href="/search"
                className="flex items-center justify-between border-2 border-[var(--radical-border)] px-6 py-4 text-sm tracking-widest transition-colors hover:border-[var(--radical-cool)] hover:text-[var(--radical-cool)]"
              >
                SEARCH COURSES →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
