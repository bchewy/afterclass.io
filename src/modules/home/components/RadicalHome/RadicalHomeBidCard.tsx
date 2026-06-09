export function RadicalHomeBidCard() {
  return (
    <div className="mt-6 border-2 border-[var(--radical-border)]">
      <div className="border-b-2 border-[var(--radical-border)] bg-[var(--radical-surface)] px-4 py-2 text-xs tracking-widest text-[var(--radical-muted)]">
        BID WINDOW
      </div>
      <div className="space-y-3 p-4 font-mono text-xs">
        <div className="flex justify-between">
          <span className="text-[var(--radical-muted)]">STATUS</span>
          <span className="text-[var(--radical-hot)]">ACTIVE</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--radical-muted)]">WINDOW 2</span>
          <span className="text-[var(--radical-accent)]">OPEN</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--radical-muted)]">CLOSES</span>
          <span>11 JUL 2025</span>
        </div>
      </div>
    </div>
  );
}
