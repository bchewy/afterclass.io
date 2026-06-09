import { type PropsWithChildren } from "react";
import { archivoBlack, jetbrainsMono } from "@/common/fonts";
import { ZineMarquee } from "./ZineMarquee";
import { ZineHeader } from "./ZineHeader";
import "@/modules/variant/styles/zine.scss";

type ZineLayoutProps = PropsWithChildren;

export function ZineLayout({ children }: ZineLayoutProps) {
  return (
    <div
      className={`zine-root ${archivoBlack.variable} ${jetbrainsMono.variable}`}
    >
      <ZineMarquee />
      <ZineHeader />
      <main>{children}</main>
      <footer className="border-t-[3px] border-black bg-black px-6 py-8 text-[#faf8f2]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="zine-display text-2xl text-[#ffbe0b]">
            AfterClass Zine
          </p>
          <p className="text-xs uppercase tracking-widest opacity-70">
            Radical UI variant — not affiliated with production design
          </p>
        </div>
      </footer>
    </div>
  );
}
