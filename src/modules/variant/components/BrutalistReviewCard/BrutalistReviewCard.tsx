import type { Review } from "@/modules/reviews/types";

type BrutalistReviewCardProps = {
  review: Review;
  featured?: boolean;
};

const formatLabel = (name: string) => name.replace(/_/g, " ");

export const BrutalistReviewCard = ({
  review,
  featured = false,
}: BrutalistReviewCardProps) => {
  const target =
    review.reviewFor === "PROFESSOR"
      ? review.professorName
      : review.courseName;

  return (
    <article
      className={`brutal-card flex h-full flex-col p-5 md:p-6 ${
        featured ? "bg-[#d4ff00]" : ""
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase">
            {review.reviewFor === "PROFESSOR" ? "Professor" : "Course"}
          </p>
          <h3 className="mt-1 text-lg leading-tight font-bold uppercase md:text-xl">
            {target}
          </h3>
          <p className="mt-1 text-xs font-medium text-[#0a0a0a]/70">
            {review.courseCode}
          </p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-[#0a0a0a] bg-[#0a0a0a] text-lg font-bold text-[#d4ff00]">
          {review.rating}
        </div>
      </div>

      <p className="flex-1 text-sm leading-relaxed font-medium">
        &ldquo;{review.body}&rdquo;
      </p>

      {review.reviewLabels.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {review.reviewLabels.slice(0, 3).map((label) => (
            <span key={label.name} className="brutal-tag bg-white">
              {formatLabel(label.name)}
            </span>
          ))}
        </div>
      )}

      <footer className="mt-4 flex items-center justify-between border-t-[2px] border-[#0a0a0a] pt-3 text-xs font-bold tracking-wide">
        <span>@{review.username}</span>
        <span>{review.likeCount} ▲</span>
      </footer>
    </article>
  );
};
