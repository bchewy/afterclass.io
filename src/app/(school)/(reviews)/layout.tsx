import { type ReactNode } from "react";

import { BooksIcon, PenIcon, SearchIcon } from "@/common/components/icons";
import { ProgressLink } from "@/common/components/progress-link";

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
    <div className="flex flex-col items-center space-y-4 md:space-y-6">
      {header}
      {rating}
      {filter}
      {information}
      <div className="relative flex w-full justify-center gap-6">
        {reviews}
        <aside className="sticky top-24 hidden h-fit w-[19rem] flex-col gap-4 lg:flex">
          <div className="shadow-primary/10 rounded-[2rem] border bg-[#130d2f] p-5 text-white shadow-xl">
            <p className="text-xs font-semibold tracking-[0.24em] text-white/45 uppercase">
              Decision kit
            </p>
            <h2 className="mt-3 text-2xl leading-none font-black tracking-[-0.05em]">
              Turn class gossip into a sharper plan.
            </h2>
            <div className="mt-5 grid gap-2">
              {["Search first", "Compare patterns", "Pay it forward"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white/75"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
          <ProgressLink
            href="/submit"
            className="bg-card h-auto justify-between rounded-[1.5rem] border p-5 text-left shadow-sm"
            data-test="cta-write-review"
            data-umami-event="cta-btn-write-review"
          >
            <span className="flex items-center gap-3">
              <PenIcon className="text-primary size-5" />
              <span className="text-base font-black">Write a review</span>
            </span>
            <span className="text-muted-foreground text-sm">Add signal</span>
          </ProgressLink>
          <ProgressLink
            href="/search"
            variant="outline"
            className="bg-card h-auto justify-between rounded-[1.5rem] border p-5 text-left shadow-sm"
          >
            <span className="flex items-center gap-3">
              <SearchIcon className="text-primary size-5" />
              <span className="text-base font-black">Search archive</span>
            </span>
            <span className="text-muted-foreground text-sm">Find intel</span>
          </ProgressLink>
          <ProgressLink
            href="/bidding"
            variant="outline"
            className="bg-card h-auto justify-between rounded-[1.5rem] border p-5 text-left shadow-sm"
          >
            <span className="flex items-center gap-3">
              <BooksIcon className="text-primary size-5" />
              <span className="text-base font-black">Bid tools</span>
            </span>
            <span className="text-muted-foreground text-sm">Plan modules</span>
          </ProgressLink>
        </aside>
      </div>
    </div>
  );
}
