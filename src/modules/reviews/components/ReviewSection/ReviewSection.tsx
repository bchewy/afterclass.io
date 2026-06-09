import type { ComponentPropsWithoutRef } from "react";

import { ReviewSectionHeader } from "./ReviewSectionHeader";
import { ReviewSectionHeaderSortGroup } from "./ReviewSectionHeaderSortGroup";
import { ReviewSectionList } from "./ReviewSectionList";
import { ReviewSectionListFilter } from "./ReviewSectionListFilter";
import { cn } from "@/common/functions";

export type ReviewSectionProps = ComponentPropsWithoutRef<"div">;

export const ReviewSection = ({ className, ...props }: ReviewSectionProps) => {
  return (
    <div
      className={cn(
        "relative grid gap-4 overflow-hidden rounded-none border border-[var(--neon-primary)]/25 bg-card pt-6 md:gap-9 md:p-6 md:pt-12",
        // Corner accent marks
        "before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-6 before:w-6 before:border-l before:border-t before:border-[var(--neon-primary)]/60 before:content-['']",
        "after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:h-6 after:w-6 after:border-b after:border-r after:border-[var(--neon-primary)]/60 after:content-['']",
        className,
      )}
      {...props}
    />
  );
};

export {
  ReviewSectionHeader,
  ReviewSectionHeaderSortGroup,
  ReviewSectionList,
  ReviewSectionListFilter,
};
