import type { Review } from "@/modules/reviews/types";

import { BrutalistReviewCard } from "../BrutalistReviewCard";

type BrutalistBentoGridProps = {
  reviews: Review[];
};

export const BrutalistBentoGrid = ({ reviews }: BrutalistBentoGridProps) => {
  return (
    <section className="relative z-10 p-4 md:p-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-[#ff4d00]">
            LIVE FEED
          </p>
          <h2 className="text-3xl font-bold tracking-tighter uppercase md:text-4xl">
            Recent Reviews
          </h2>
        </div>
        <span className="brutal-tag hidden md:inline-flex">Bento layout</span>
      </div>

      <div className="grid auto-rows-fr gap-4 md:grid-cols-12 md:gap-5">
        {reviews.map((review, i) => {
          const spanClass =
            i === 0
              ? "md:col-span-7 md:row-span-2"
              : i === 1
                ? "md:col-span-5"
                : i === 2
                  ? "md:col-span-4"
                  : i === 3
                    ? "md:col-span-4"
                    : i === 4
                      ? "md:col-span-4"
                      : "md:col-span-12";

          return (
            <div key={review.id} className={spanClass}>
              <BrutalistReviewCard review={review} featured={i === 0} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
