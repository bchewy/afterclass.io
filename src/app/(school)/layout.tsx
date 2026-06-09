import { type PropsWithChildren } from "react";

import { CoreLayout } from "@/common/components/core-layout";

export default async function SchoolLayout({ children }: PropsWithChildren) {
  return (
    <CoreLayout>
      <div className="mx-auto my-1 max-w-[954px] p-2 md:my-4">{children}</div>
    </CoreLayout>
  );
}
