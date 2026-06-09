import { type Review } from "@/modules/reviews/types";
import { cn } from "@/common/functions";

type SignalDeckReviewCardProps = {
  review: Review;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeStyles = {
  sm: "col-span-1 row-span-1",
  md: "col-span-1 row-span-2 md:col-span-1",
  lg: "col-span-1 row-span-2 md:col-span-2",
};

function formatRating(rating: number) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

export function SignalDeckReviewCard({
  review,
  size = "md",
  className,
}: SignalDeckReviewCardProps) {
  const accentBorder =
    review.rating >= 4
      ? "border-[var(--sd-cyan)]/50"
      : review.rating <= 2
        ? "border-[var(--sd-accent-hot)]/50"
        : "border-[var(--sd-accent)]/40";

  return (
    <article
      className={cn(
        "group relative flex flex-col border-2 bg-[var(--sd-surface)]/80 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--sd-accent)] hover:shadow-[0_0_30px_var(--sd-glow)]",
        accentBorder,
        sizeStyles[size],
        className,
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <p className="signal-deck-mono text-[10px] tracking-[0.15em] text-[var(--sd-cyan)] uppercase">
            {review.reviewFor}
          </p>
          <h3 className="mt-1 text-lg leading-tight font-bold text-[var(--sd-ink)]">
            {review.courseCode}
          </h3>
          <p className="text-xs text-[var(--sd-muted)]">{review.courseName}</p>
        </div>
        <div className="signal-deck-mono text-right text-[10px] text-[var(--sd-accent-hot)]">
          {formatRating(review.rating)}
        </div>
      </div>

      <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-[var(--sd-muted)] group-hover:text-[var(--sd-ink)]">
        {review.body}
      </p>

      <footer className="signal-deck-mono mt-4 flex items-center justify-between border-t border-[var(--sd-accent)]/20 pt-3 text-[10px] tracking-wider text-[var(--sd-muted)] uppercase">
        <span>{review.professorName}</span>
        <span className="text-[var(--sd-accent)]">▲ {review.likeCount}</span>
      </footer>

      {review.reviewLabels.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {review.reviewLabels.slice(0, 3).map((label) => (
            <span
              key={label.name}
              className="signal-deck-mono border border-[var(--sd-accent)]/30 px-1.5 py-0.5 text-[9px] tracking-wider text-[var(--sd-accent)] uppercase"
            >
              {label.name.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
