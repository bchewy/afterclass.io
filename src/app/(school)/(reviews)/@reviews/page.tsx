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
      <ReviewSection className="bg-card/95 shadow-primary/5 w-full border shadow-xl">
        <div className="px-4 md:px-0">
          <p className="text-primary text-sm font-semibold tracking-[0.24em] uppercase">
            Live review stream
          </p>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            The familiar AfterClass feed stays here, now framed as the raw
            evidence behind the decision cockpit.
          </p>
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
