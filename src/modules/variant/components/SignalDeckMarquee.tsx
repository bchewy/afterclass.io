import { SIGNAL_DECK_STATS } from "../data/mock-reviews";

const MARQUEE_ITEMS = [...SIGNAL_DECK_STATS, ...SIGNAL_DECK_STATS];

export function SignalDeckMarquee() {
  return (
    <div className="signal-deck-mono relative z-10 overflow-hidden border-y border-[var(--sd-accent)]/30 bg-[var(--sd-surface)]/80 py-2 backdrop-blur-sm">
      <div className="sd-animate-marquee flex w-max gap-12 whitespace-nowrap text-xs tracking-[0.2em] text-[var(--sd-muted)] uppercase">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`${item.label}-${index}`} className="flex items-center gap-3">
            <span className="text-[var(--sd-cyan)]">◆</span>
            <span>{item.label}</span>
            <span className="text-[var(--sd-ink)]">{item.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
