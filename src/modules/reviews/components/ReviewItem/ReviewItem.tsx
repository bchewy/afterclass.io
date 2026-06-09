import { useCallback } from "react";
import { useSession } from "next-auth/react";

import { LockedOverlay } from "@/common/components/locked-overlay";
import { type Review } from "@/modules/reviews/types";

import { ReviewerGroup } from "./ReviewerGroup";
import { RevieweeGroup } from "./RevieweeGroup";
import { ReviewBody } from "./ReviewBody";
import { ReviewFooter } from "./ReviewFooter";
import { ReviewModal } from "./ReviewModal";
import { ReviewItemViewEventTracker } from "../ReviewItemViewEventTracker";
import { FullWidthEnforcer } from "@/common/components/full-width-enforcer";

export type ReviewItemProps = {
  review: Review;
  isLocked?: boolean;
  variant?: "home" | "professor" | "course";
  isMocked?: boolean;
  seeMore?: boolean;
};

export const ReviewItem = ({
  review,
  isLocked,
  variant = "home",
  isMocked = false,
  seeMore,
}: ReviewItemProps) => {
  const session = useSession();

  const ReviewHeader = useCallback(
    () => (
      <div className="flex flex-col content-center gap-3 self-stretch md:flex-row-reverse md:justify-between">
        <ReviewerGroup review={review} />
        <RevieweeGroup review={review} variant={variant} />
      </div>
    ),
    [review, variant],
  );

  const sharedCardClasses =
    "card-hover-glow group relative flex h-fit max-w-prose cursor-pointer flex-col items-start gap-3 border border-border/50 bg-card/60 p-4 text-left transition-all duration-200 md:gap-4";

  return !(session.status === "authenticated") || isLocked ? (
    <div className={sharedCardClasses} data-test="review">
      {/* Top neon accent line */}
      <div className="neon-divider pointer-events-none absolute inset-x-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <ReviewHeader />
      <div className="text-muted-foreground relative line-clamp-5 flex h-16 w-full self-stretch overflow-hidden border border-border/30 wrap-anywhere md:line-clamp-3 md:text-sm">
        <LockedOverlay ctaType="review" />
        <FullWidthEnforcer />
      </div>
    </div>
  ) : (
    <ReviewModal review={review} variant={variant} seeMore={seeMore}>
      <div className={sharedCardClasses} data-test="review">
        {/* Top neon accent line on hover */}
        <div className="neon-divider pointer-events-none absolute inset-x-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <ReviewHeader />
        <ReviewBody review={review} />
        <ReviewFooter review={review} />
        {!isMocked && <ReviewItemViewEventTracker reviewId={review.id} />}
      </div>
    </ReviewModal>
  );
};
