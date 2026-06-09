import {
  ReviewSection,
  ReviewSectionHeader,
  ReviewSectionList,
  ReviewSectionListFilter,
  ReviewSectionHeaderSortGroup,
} from "@/modules/reviews/components/ReviewSection";
import { ReviewItemLoader } from "@/modules/reviews/components/ReviewItemLoader";
import { ReviewModalFocused } from "@/modules/reviews/components/ReviewModalFocused";
import { CyberpunkHeroBanner } from "@/modules/home/components/CyberpunkHeroBanner";
import { ReviewsWithErrorBoundary } from "@/modules/reviews/components/ReviewSection/ReviewsWithErrorBoundary";

export default function Home() {
  return (
    <>
      <CyberpunkHeroBanner />
      <ReviewSection>
        <ReviewSectionHeader>
          <ReviewSectionHeaderSortGroup />
        </ReviewSectionHeader>
        <ReviewSectionListFilter />
        <ReviewSectionList>
          <ReviewsWithErrorBoundary>
            <ReviewItemLoader variant="home" />
          </ReviewsWithErrorBoundary>
        </ReviewSectionList>
      </ReviewSection>
      <ReviewModalFocused variant="home" />
    </>
  );
}
