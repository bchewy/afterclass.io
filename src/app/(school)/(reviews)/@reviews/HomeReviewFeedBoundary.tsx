"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

import { ProgressLink } from "@/common/components/progress-link";
import { WarningCircleIcon } from "@/common/components/icons";

type HomeReviewFeedBoundaryProps = {
  children: ReactNode;
};

type HomeReviewFeedBoundaryState = {
  hasError: boolean;
};

export class HomeReviewFeedBoundary extends Component<
  HomeReviewFeedBoundaryProps,
  HomeReviewFeedBoundaryState
> {
  state: HomeReviewFeedBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): HomeReviewFeedBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Failed to load homepage review stream", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="bg-background/70 m-4 rounded-[1.5rem] border border-dashed p-6 md:m-0 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <div className="bg-primary/10 text-primary h-fit rounded-2xl p-3">
              <WarningCircleIcon className="size-5" />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-[-0.04em]">
                Review stream is waiting on live data.
              </h3>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-6">
                The redesigned shell still works when the local review API is
                unavailable. Connect the database to populate this stream with
                real student reviews.
              </p>
            </div>
          </div>
          <ProgressLink
            href="/submit"
            className="rounded-2xl px-5 py-3 font-bold"
            data-umami-event="review-error-cta"
          >
            Add a review
          </ProgressLink>
        </div>
      </div>
    );
  }
}
