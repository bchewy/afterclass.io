import { type ReactNode } from "react";

import { ReviewLayoutClient } from "./ReviewLayoutClient";
import { StandardReviewAside } from "./StandardReviewAside";

export default function ReviewLayout({
  header,
  rating,
  filter,
  information,
  reviews,
}: {
  header: ReactNode;
  rating: ReactNode;
  filter: ReactNode;
  information: ReactNode;
  reviews: ReactNode;
}) {
  return (
    <ReviewLayoutClient
      header={header}
      rating={rating}
      filter={filter}
      information={information}
      reviews={reviews}
      standardAside={<StandardReviewAside />}
    />
  );
}
