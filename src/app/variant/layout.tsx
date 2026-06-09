import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import "@/common/styles/variant-brutalist.scss";
import { BrutalistLayout } from "@/modules/variant/components/BrutalistLayout/BrutalistLayout";

export const metadata: Metadata = {
  title: "AfterClass Underground — Design Variant",
  description:
    "Radical neo-brutalist redesign variant of AfterClass. Campus Underground edition.",
};

export default function VariantRootLayout({ children }: PropsWithChildren) {
  return <BrutalistLayout>{children}</BrutalistLayout>;
}
