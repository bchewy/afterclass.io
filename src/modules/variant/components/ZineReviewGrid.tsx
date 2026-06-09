import { ZINE_MOCK_REVIEWS } from "@/modules/variant/data/mock-reviews";
import { ZineReviewCard } from "./ZineReviewCard";

export function ZineReviewGrid() {
  return (
    <section className="p-4 md:p-8">
      <div className="mb-6 flex items-end justify-between border-b-[3px] border-black pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em]">
            Classified Section
          </p>
          <h2 className="zine-display mt-1 text-3xl md:text-5xl">
            Fresh Takes
          </h2>
        </div>
        <p className="zine-stamp bg-[#ff006e] text-white">LIVE FEED</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ZINE_MOCK_REVIEWS.map((review, i) => (
          <ZineReviewCard key={review.id} review={review} index={i} />
        ))}
      </div>
    </section>
  );
}
