export function RadicalHomeFeedHeader() {
  return (
    <div className="flex items-center justify-between border-b-2 border-[var(--radical-border)] bg-[var(--radical-surface)] px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <span className="size-2 animate-pulse bg-[var(--radical-hot)]" />
        <span className="text-xs tracking-[0.25em] text-[var(--radical-accent)]">
          LIVE FEED
        </span>
      </div>
      <span className="text-xs text-[var(--radical-muted)]">
        // streaming reviews
      </span>
    </div>
  );
}
