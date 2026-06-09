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
      <ReviewSection className="w-full max-w-4xl overflow-hidden border border-[#11130d]/15 bg-[#f7f4e8] pt-0 shadow-2xl shadow-black/20 md:p-0">
        <div className="border-b border-[#11130d]/10 bg-[#11130d] px-4 py-4 text-lime-200 md:px-6">
          <div className="mb-3 flex items-center justify-between font-mono text-[0.68rem] tracking-[0.24em] text-lime-200/70 uppercase">
            <span>student transmissions</span>
            <span>freshest first</span>
          </div>
          <ReviewSectionHeader>
            <ReviewSectionHeaderSortGroup />
          </ReviewSectionHeader>
        </div>
        <div className="space-y-4 px-0 py-4 md:space-y-6 md:py-6">
          <div className="px-4 md:px-6">
            <ReviewSectionListFilter />
          </div>
          <ReviewSectionList className="grid w-full gap-2 px-2 md:gap-4 md:px-6">
            <ReviewItemLoader variant="home" />
          </ReviewSectionList>
        </div>
      </ReviewSection>
      <ReviewModalFocused variant="home" />
    </>
  );
}
