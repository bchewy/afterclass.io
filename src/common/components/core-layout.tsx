import { type PropsWithChildren } from "react";
import { CoreLayoutSwitcher } from "@/common/components/core-layout-switcher";

type CoreLayoutProps = PropsWithChildren;

export function CoreLayout({ children }: CoreLayoutProps) {
  return <CoreLayoutSwitcher>{children}</CoreLayoutSwitcher>;
}
