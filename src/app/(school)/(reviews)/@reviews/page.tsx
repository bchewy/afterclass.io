import {
  ReviewSection,
  ReviewSectionHeader,
  ReviewSectionList,
  ReviewSectionListFilter,
  ReviewSectionHeaderSortGroup,
} from "@/modules/reviews/components/ReviewSection";
import { ReviewItemLoader } from "@/modules/reviews/components/ReviewItemLoader";
import { ReviewModalFocused } from "@/modules/reviews/components/ReviewModalFocused";
import { HomeRadicalIntro } from "@/modules/home/components/HomeRadicalIntro";

export default function Home() {
  return (
    <>
      <div className="relative left-1/2 grid w-[min(calc(100vw-1rem),1180px)] -translate-x-1/2 gap-5 pb-10 md:gap-6 lg:w-[min(calc(100vw-2rem),1180px)]">
        <HomeRadicalIntro />
        <ReviewSection className="border-border/70 mx-auto w-full max-w-3xl border shadow-[0_24px_80px_rgba(8,7,12,0.12)]">
          <ReviewSectionHeader>
            <ReviewSectionHeaderSortGroup />
          </ReviewSectionHeader>
          <ReviewSectionListFilter />
          <ReviewSectionList>
            <ReviewItemLoader variant="home" />
          </ReviewSectionList>
        </ReviewSection>
      </div>
      <ReviewModalFocused variant="home" />
    </>
  );
}
