import { type Review } from "@/modules/reviews/types";

const RATING_COLORS: Record<number, string> = {
  1: "bg-[#ff3b30] text-white",
  2: "bg-[#ff6b35] text-white",
  3: "bg-[#ffbe0b] text-black",
  4: "bg-[#00f5d4] text-black",
  5: "bg-black text-[#00f5d4]",
};

const ACCENT_ROTATIONS = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-0"];

type ZineReviewCardProps = {
  review: Review;
  index: number;
};

export function ZineReviewCard({ review, index }: ZineReviewCardProps) {
  const rotation = ACCENT_ROTATIONS[index % ACCENT_ROTATIONS.length];
  const ratingColor = RATING_COLORS[review.rating] ?? "bg-black text-white";
  const accentBg =
    index % 3 === 0 ? "bg-[#faf8f2]" : index % 3 === 1 ? "bg-white" : "bg-[#fff8e7]";

  return (
    <article
      className={`zine-card-wobble group relative border-[3px] border-black p-5 shadow-[6px_6px_0_0_#0a0a0a] transition-all hover:shadow-[10px_10px_0_0_#ff006e] hover:-translate-x-0.5 hover:-translate-y-0.5 ${accentBg} ${rotation}`}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <p className="zine-display text-lg leading-tight">
            {review.professorName}
          </p>
          <p className="text-xs font-bold uppercase tracking-wider text-black/60">
            {review.courseCode} · {review.courseName}
          </p>
        </div>
        <span
          className={`zine-display shrink-0 px-2 py-1 text-xl ${ratingColor}`}
        >
          {review.rating}/5
        </span>
      </div>

      <p className="mb-4 text-sm leading-relaxed line-clamp-4">{review.body}</p>

      {review.tips && (
        <p className="mb-3 border-l-[3px] border-[#ff006e] pl-3 text-xs italic">
          Tip: {review.tips}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 border-t-[3px] border-black pt-3">
        <div className="flex flex-wrap gap-1">
          {review.reviewLabels.slice(0, 3).map((label) => (
            <span
              key={label.name}
              className="border border-black px-1.5 py-0.5 text-[0.6rem] font-bold uppercase"
            >
              {label.name.replace(/_/g, " ")}
            </span>
          ))}
        </div>
        <div className="text-[0.65rem] font-bold uppercase tracking-wider">
          <span className="text-[#ff006e]">♥ {review.likeCount}</span>
          <span className="mx-2 opacity-30">|</span>
          <span>@{review.username}</span>
        </div>
      </div>
    </article>
  );
}
