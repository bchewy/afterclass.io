import { type PropsWithChildren } from "react";

import { SignalDeckLayout } from "@/modules/variant/components";

export default function VariantLayout({ children }: PropsWithChildren) {
  return <SignalDeckLayout>{children}</SignalDeckLayout>;
}
