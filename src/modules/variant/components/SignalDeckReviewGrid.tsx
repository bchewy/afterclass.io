import { SIGNAL_DECK_MOCK_REVIEWS } from "../data/mock-reviews";
import { SignalDeckReviewCard } from "./SignalDeckReviewCard";

const BENTO_LAYOUT: Array<"sm" | "md" | "lg"> = [
  "lg",
  "sm",
  "md",
  "sm",
  "md",
  "sm",
];

export function SignalDeckReviewGrid() {
  return (
    <section className="relative z-10 px-4 pb-32 md:px-8 lg:px-12">
      <div className="mb-8 flex items-end justify-between gap-4 border-b-2 border-[var(--sd-accent)]/30 pb-4">
        <div>
          <p className="signal-deck-mono text-xs tracking-[0.25em] text-[var(--sd-cyan)] uppercase">
            Live Feed
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--sd-ink)] md:text-4xl">
            Signal Grid
          </h2>
        </div>
        <p className="signal-deck-mono hidden text-right text-xs tracking-widest text-[var(--sd-muted)] uppercase md:block">
          Asymmetric bento
          <br />
          vs. vertical feed
        </p>
      </div>

      <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
        {SIGNAL_DECK_MOCK_REVIEWS.map((review, index) => (
          <SignalDeckReviewCard
            key={review.id}
            review={review}
            size={BENTO_LAYOUT[index] ?? "md"}
          />
        ))}
      </div>

      <div className="mt-10 overflow-hidden">
        <p className="signal-deck-mono mb-4 text-xs tracking-[0.2em] text-[var(--sd-muted)] uppercase">
          Horizontal Snap Carousel
        </p>
        <div className="sd-snap-x -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 md:-mx-8 md:px-8">
          {SIGNAL_DECK_MOCK_REVIEWS.map((review) => (
            <div
              key={`carousel-${review.id}`}
              className="sd-snap-item w-[min(85vw,320px)] shrink-0"
            >
              <SignalDeckReviewCard review={review} size="md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
