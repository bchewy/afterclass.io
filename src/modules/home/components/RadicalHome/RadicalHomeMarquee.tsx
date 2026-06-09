const TICKER_ITEMS = [
  "12,847 REVIEWS INDEXED",
  "SMU BID SEASON LIVE",
  "OPEN SOURCE",
  "BREAK CLASSROOM BARRIERS",
  "COURSE INTEL",
  "PROF RATINGS",
  "COMMUNITY DRIVEN",
  "NO PAYWALL",
] as const;

export function RadicalHomeMarquee() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="border-y-2 border-[var(--radical-accent)] bg-[var(--radical-surface)] py-2 overflow-hidden">
      <div className="radical-marquee flex w-max gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xs tracking-[0.3em] text-[var(--radical-accent)] md:text-sm"
          >
            ◆ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
