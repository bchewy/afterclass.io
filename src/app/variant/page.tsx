import { BrutalistBentoGrid } from "@/modules/variant/components/BrutalistBentoGrid/BrutalistBentoGrid";
import { BrutalistBidding } from "@/modules/variant/components/BrutalistBidding/BrutalistBidding";
import { BrutalistHero } from "@/modules/variant/components/BrutalistHero/BrutalistHero";
import { BrutalistStats } from "@/modules/variant/components/BrutalistStats/BrutalistStats";
import { MOCK_REVIEWS } from "@/modules/variant/data/mock-reviews";

export default function VariantPage() {
  return (
    <>
      <BrutalistHero />
      <BrutalistStats />
      <BrutalistBentoGrid reviews={MOCK_REVIEWS} />
      <BrutalistBidding />
    </>
  );
}
