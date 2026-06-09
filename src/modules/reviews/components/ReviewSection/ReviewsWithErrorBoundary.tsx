"use client";
import { Component, type ReactNode, Suspense } from "react";
import { ReviewItemSkeleton } from "@/modules/reviews/components/ReviewItem";

type State = { hasError: boolean };

class ReviewsErrorBoundary extends Component<
  { children: ReactNode },
  State
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-muted-foreground px-4 py-12 text-center text-sm">
          <p className="font-mono-ui text-primary/60 mb-2 text-xs uppercase tracking-widest">
            // connection error
          </p>
          <p>Reviews could not be loaded. Database unavailable.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const ReviewsLoadingFallback = () => (
  <div className="grid w-fit gap-1 md:gap-3">
    {Array.from({ length: 4 }).map((_, i) => (
      <ReviewItemSkeleton key={i} />
    ))}
  </div>
);

export function ReviewsWithErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReviewsErrorBoundary>
      <Suspense fallback={<ReviewsLoadingFallback />}>
        {children}
      </Suspense>
    </ReviewsErrorBoundary>
  );
}
