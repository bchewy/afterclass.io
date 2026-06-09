"use client";

import { type PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

import { AppSidebar } from "@/modules/home/components/AppSidebar";
import { SidebarProvider, SidebarInset } from "@/common/components/sidebar";
import { CoreLayoutHeader } from "@/common/components/core-layout-header";
import { ScrollToTopButton } from "@/common/components/scroll-to-top-button";

type CoreLayoutSwitcherProps = PropsWithChildren;

const VARIANT_PREFIXES = ["/variant"];

export function CoreLayoutSwitcher({ children }: CoreLayoutSwitcherProps) {
  const pathname = usePathname();
  const isVariantRoute = VARIANT_PREFIXES.some((prefix) =>
    pathname?.startsWith(prefix),
  );

  if (isVariantRoute) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <CoreLayoutHeader />
        <div id="scroll-to-top"></div>
        <div className="flex flex-1 flex-col">{children}</div>
        <ScrollToTopButton />
      </SidebarInset>
    </SidebarProvider>
  );
}
