const COMPARISONS = [
  {
    classic: "Left sidebar navigation",
    variant: "Floating bottom dock",
  },
  {
    classic: "Rounded card feed (max 954px)",
    variant: "Full-bleed bento grid + carousel",
  },
  {
    classic: "Inter + Poppins typography",
    variant: "Syne display + JetBrains Mono",
  },
  {
    classic: "Soft purple on light gray",
    variant: "Neon mesh on deep black",
  },
  {
    classic: "Breadcrumb header bar",
    variant: "Marquee stats ticker",
  },
];

export function SignalDeckComparison() {
  return (
    <section className="relative z-10 border-t-2 border-[var(--sd-accent)]/20 px-4 py-12 md:px-8 lg:px-12">
      <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-[var(--sd-ink)] md:text-3xl">
        Classic vs. Signal Deck
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border-2 border-[var(--sd-muted)]/30 bg-[var(--sd-surface)]/50 p-6">
          <p className="signal-deck-mono mb-4 text-xs tracking-[0.2em] text-[var(--sd-muted)] uppercase">
            afterclass.io (current)
          </p>
          <ul className="space-y-3 text-sm text-[var(--sd-muted)]">
            {COMPARISONS.map((row) => (
              <li key={row.classic} className="flex gap-2">
                <span className="text-[var(--sd-muted)]">—</span>
                {row.classic}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-[var(--sd-accent)] bg-[var(--sd-surface)]/80 p-6 shadow-[0_0_30px_var(--sd-glow)]">
          <p className="signal-deck-mono mb-4 text-xs tracking-[0.2em] text-[var(--sd-accent-hot)] uppercase">
            /variant (signal deck)
          </p>
          <ul className="space-y-3 text-sm text-[var(--sd-ink)]">
            {COMPARISONS.map((row) => (
              <li key={row.variant} className="flex gap-2">
                <span className="text-[var(--sd-cyan)]">◆</span>
                {row.variant}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
