import { CtaButton } from "@/common/components/cta-button";
import { EditIcon, GithubIcon, PlusIcon } from "@/common/components/icons";
import { env } from "@/env";

import { RadicalHomeBidCard } from "./RadicalHomeBidCard";

export function RadicalHomeSidebar() {
  return (
    <div className="sticky top-24 flex flex-col">
      <div className="border-b-2 border-[var(--radical-border)] bg-[var(--radical-surface)] px-4 py-2 text-xs tracking-widest text-[var(--radical-muted)]">
        ACTIONS
      </div>
      <div className="flex flex-col gap-0 p-4">
        <CtaButton
          variant="secondary"
          ctaText="Write a review"
          href="/submit"
          iconLeft={<PlusIcon />}
          iconRight={<EditIcon opacity={0.1} />}
          className="rounded-none border-2 border-[var(--radical-accent)] bg-[var(--radical-accent)] text-[var(--radical-bg)] hover:bg-transparent hover:text-[var(--radical-accent)]"
          data-test="cta-write-review"
          data-umami-event="cta-btn-write-review"
        />
        <CtaButton
          variant="outline"
          ctaText="Contribute to OSS"
          className="mt-3 rounded-none border-2 border-[var(--radical-border)] bg-transparent text-[var(--radical-muted)] hover:border-[var(--radical-text)] hover:text-[var(--radical-text)]"
          href={env.NEXT_PUBLIC_AC_GITHUB_LINK}
          target="_blank"
          iconLeft={<GithubIcon />}
          data-test="cta-contribute-oss"
          data-umami-event="cta-btn-contribute-oss"
        />
        <RadicalHomeBidCard />
      </div>
    </div>
  );
}
