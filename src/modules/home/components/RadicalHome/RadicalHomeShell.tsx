import { type ReactNode } from "react";

import { bebasNeue, spaceMono } from "@/common/fonts";
import { cn } from "@/common/functions";

import { RadicalHomeFeatures } from "./RadicalHomeFeatures";
import { RadicalHomeHero } from "./RadicalHomeHero";
import { RadicalHomeMarquee } from "./RadicalHomeMarquee";

import "./radical-home.scss";

type RadicalHomeShellProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export function RadicalHomeShell({ children, sidebar }: RadicalHomeShellProps) {
  return (
    <div
      className={cn(
        "radical-home relative -mx-2 w-[calc(100%+1rem)] md:-mx-4 md:w-[calc(100%+2rem)]",
        spaceMono.variable,
        bebasNeue.variable,
      )}
    >
      <RadicalHomeHero />
      <RadicalHomeMarquee />
      <RadicalHomeFeatures />

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_280px]">
        <div className="min-w-0 border-r-0 border-[var(--radical-border)] lg:border-r-2">
          {children}
        </div>
        {sidebar ? (
          <aside className="hidden flex-col gap-0 lg:flex">{sidebar}</aside>
        ) : null}
      </div>
    </div>
  );
}
