import { type PropsWithChildren } from "react";

import { syne, jetbrainsMono } from "@/common/fonts/signal-deck";

import { SignalDeckDock } from "./SignalDeckDock";
import { SignalDeckMarquee } from "./SignalDeckMarquee";

type SignalDeckLayoutProps = PropsWithChildren;

export function SignalDeckLayout({ children }: SignalDeckLayoutProps) {
  return (
    <div
      className={`signal-deck relative isolate overflow-x-hidden ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <div className="relative z-10 flex min-h-dvh flex-col">
        <SignalDeckMarquee />
        <main className="flex-1">{children}</main>
        <SignalDeckDock />
      </div>
    </div>
  );
}
