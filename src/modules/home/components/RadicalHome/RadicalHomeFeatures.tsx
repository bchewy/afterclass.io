const FEATURES = [
  {
    id: "01",
    title: "REVIEWS",
    desc: "12K+ honest takes on courses & profs. Sort, filter, vote.",
    accent: "var(--radical-accent)",
  },
  {
    id: "02",
    title: "BIDDING",
    desc: "Historical bid data. Success rate predictions. Win your mods.",
    accent: "var(--radical-hot)",
  },
  {
    id: "03",
    title: "SEARCH",
    desc: "Instant lookup across the entire SMU course catalog.",
    accent: "var(--radical-cool)",
  },
  {
    id: "04",
    title: "OPEN SOURCE",
    desc: "Community-built. Transparent. Contribute on GitHub.",
    accent: "var(--radical-text)",
  },
] as const;

export function RadicalHomeFeatures() {
  return (
    <section className="border-b-2 border-[var(--radical-border)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.id}
            className="group border-b-2 border-[var(--radical-border)] p-6 transition-colors hover:bg-[var(--radical-surface)] sm:border-b-0 sm:border-r-2 last:border-r-0 last:border-b-0 sm:last:border-b-2 lg:last:border-b-0"
            style={{
              borderTopColor: i === 0 ? feature.accent : undefined,
              borderTopWidth: i === 0 ? "3px" : undefined,
            }}
          >
            <span
              className="text-4xl font-[family-name:var(--font-bebas-neue)] tracking-wider"
              style={{ color: feature.accent }}
            >
              {feature.id}
            </span>
            <h3 className="mt-2 text-lg font-bold tracking-widest">
              {feature.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--radical-muted)]">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
