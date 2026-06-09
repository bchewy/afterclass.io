import { type PropsWithChildren } from "react";
import { headers } from "next/headers";
import { CoreLayout } from "@/common/components/core-layout";

export async function ShellSwitcher({ children }: PropsWithChildren) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const isVariantRoute = pathname.startsWith("/variant");

  if (isVariantRoute) {
    return <>{children}</>;
  }

  return <CoreLayout>{children}</CoreLayout>;
}
