import { type ReactNode } from "react";

import { CtaButton } from "@/common/components/cta-button";
import { EditIcon, GithubIcon, PlusIcon } from "@/common/components/icons";
import { env } from "@/env";

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
    <div className="relative left-1/2 flex w-[calc(100vw-1rem)] max-w-[1440px] -translate-x-1/2 flex-col items-center space-y-4 overflow-hidden rounded-[2.25rem] bg-[#dfff31] p-3 md:space-y-6 md:rounded-[3.5rem] md:p-6">
      <div
        className="absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 0 47%, rgba(8, 9, 6, 0.45) 47% 49%, transparent 49% 100%)",
        }}
      />
      <div className="relative z-10 flex w-full flex-col items-center space-y-4 md:space-y-6">
        {header}
        {rating}
        {filter}
        {information}
        <div className="relative flex w-full justify-center gap-6">
          {reviews}
          <aside className="sticky top-24 hidden h-fit max-w-min flex-col items-start gap-6 text-nowrap lg:flex">
            <CtaButton
              variant="secondary"
              ctaText="Write a review"
              href="/submit"
              iconLeft={<PlusIcon />}
              iconRight={<EditIcon opacity={0.1} />}
              className="border-[#11130d] bg-[#11130d] text-lime-200 shadow-xl shadow-black/15 hover:bg-black"
              data-test="cta-write-review"
              data-umami-event="cta-btn-write-review"
            />
            <CtaButton
              variant="outline"
              ctaText="Contribute to AfterClass OSS"
              className="border-[#11130d]/20 bg-white/70 text-[#11130d] hover:bg-white"
              href={env.NEXT_PUBLIC_AC_GITHUB_LINK}
              target="_blank"
              iconLeft={<GithubIcon />}
              data-test="cta-contribute-oss"
              data-umami-event="cta-btn-contribute-oss"
            />
            <div className="w-full rounded-3xl border border-[#11130d]/15 bg-white/75 p-5 text-[#11130d] shadow-xl shadow-black/10">
              <p className="font-mono text-xs tracking-[0.22em] uppercase opacity-60">
                quick intel
              </p>
              <div className="mt-4 space-y-4">
                {["Bid windows", "Review drops", "Course search"].map(
                  (label, index) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-t border-[#11130d]/10 pt-3"
                    >
                      <span className="font-semibold">{label}</span>
                      <span className="font-mono text-xs tracking-[0.18em] uppercase opacity-60">
                        live 0{index + 1}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
