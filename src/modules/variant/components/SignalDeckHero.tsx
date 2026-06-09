import Link from "next/link";

import { SearchCmdk } from "@/modules/search/components/SearchCmdk";

export function SignalDeckHero() {
  return (
    <section className="relative z-10 grid gap-8 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:px-8 md:py-16 lg:px-12">
      <div className="flex flex-col justify-center gap-6">
        <div className="signal-deck-mono flex items-center gap-3 text-xs tracking-[0.25em] text-[var(--sd-cyan)] uppercase">
          <span className="inline-block size-2 animate-pulse rounded-full bg-[var(--sd-accent-hot)]" />
          Signal Deck v2 — Radical UI Variant
        </div>

        <h1 className="text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.9] font-extrabold tracking-[-0.04em] text-[var(--sd-ink)]">
          COURSE
          <br />
          <span className="bg-gradient-to-r from-[var(--sd-accent)] via-[var(--sd-accent-hot)] to-[var(--sd-cyan)] bg-clip-text text-transparent">
            INTELLIGENCE
          </span>
          <br />
          TERMINAL
        </h1>

        <p className="max-w-lg text-base leading-relaxed text-[var(--sd-muted)] md:text-lg">
          No sidebar. No soft cards. Raw signal from 14,000+ reviews — surfaced
          as a brutalist command deck for SMU module selection.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="signal-deck-mono border border-[var(--sd-muted)]/40 px-4 py-2 text-xs tracking-widest text-[var(--sd-muted)] uppercase transition hover:border-[var(--sd-ink)] hover:text-[var(--sd-ink)]"
          >
            ← Classic AfterClass
          </Link>
          <span className="signal-deck-mono text-xs text-[var(--sd-accent)]">
            /variant — experimental route
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-6">
        <div className="sd-animate-glow rounded-none border-2 border-[var(--sd-accent)] bg-[var(--sd-surface)]/90 p-6 backdrop-blur-md">
          <p className="signal-deck-mono mb-4 text-xs tracking-[0.2em] text-[var(--sd-cyan)] uppercase">
            Command / Search
          </p>
          <SearchCmdk />
          <p className="signal-deck-mono mt-4 text-[10px] tracking-wider text-[var(--sd-muted)] uppercase">
            ⌘K — Find courses, professors, modules
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Layout", value: "Bento" },
            { label: "Nav", value: "Dock" },
            { label: "Mode", value: "Dark" },
          ].map((item) => (
            <div
              key={item.label}
              className="border border-[var(--sd-accent)]/20 bg-[var(--sd-surface)]/60 p-3 text-center"
            >
              <p className="signal-deck-mono text-[10px] tracking-widest text-[var(--sd-muted)] uppercase">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-bold text-[var(--sd-ink)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
