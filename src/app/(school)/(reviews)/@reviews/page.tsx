import {
  ReviewSection,
  ReviewSectionHeader,
  ReviewSectionList,
  ReviewSectionListFilter,
  ReviewSectionHeaderSortGroup,
} from "@/modules/reviews/components/ReviewSection";
import { ReviewItemLoader } from "@/modules/reviews/components/ReviewItemLoader";
import { ReviewModalFocused } from "@/modules/reviews/components/ReviewModalFocused";

export default function Home() {
  return (
    <>
      <ReviewSection
        id="live-review-wire"
        className="border-border/70 w-full overflow-hidden border shadow-[0_18px_80px_rgba(0,0,0,0.08)]"
      >
        <div className="flex flex-col gap-3 px-4 md:px-0">
          <p className="text-primary font-mono text-xs font-semibold tracking-[0.32em] uppercase">
            Live review wire
          </p>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.06em] md:text-5xl">
                Raw campus notes, newest first.
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl leading-6">
                Keep scrolling for student receipts on classes, professors, and
                workload traps before you bid.
              </p>
            </div>
          </div>
        </div>
        <ReviewSectionHeader>
          <ReviewSectionHeaderSortGroup />
        </ReviewSectionHeader>
        <ReviewSectionListFilter />
        <ReviewSectionList>
          <ReviewItemLoader variant="home" />
        </ReviewSectionList>
      </ReviewSection>
      <ReviewModalFocused variant="home" />
    </>
  );
}
