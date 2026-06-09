import { ZineLayout } from "@/modules/variant/components/ZineLayout";
import { ZineHero } from "@/modules/variant/components/ZineHero";
import { ZineReviewGrid } from "@/modules/variant/components/ZineReviewGrid";

export const metadata = {
  title: "AfterClass Zine — The Underground Review",
  description:
    "Unfiltered course reviews, brutalist design, zero corporate polish.",
};

export default function ZinePage() {
  return (
    <ZineLayout>
      <ZineHero />
      <ZineReviewGrid />
    </ZineLayout>
  );
}
