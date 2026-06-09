import type { PropsWithChildren } from "react";

import { spaceGrotesk } from "@/common/fonts";
import { BrutalistNav } from "../BrutalistNav";
import { BrutalistTicker } from "../BrutalistTicker";

type BrutalistLayoutProps = PropsWithChildren;

export const BrutalistLayout = ({ children }: BrutalistLayoutProps) => {
  return (
    <div
      className={`variant-brutalist ${spaceGrotesk.variable} pb-20`}
    >
      <BrutalistTicker />
      {children}
      <BrutalistNav />
    </div>
  );
};
