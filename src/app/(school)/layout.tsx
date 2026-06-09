import { type PropsWithChildren } from "react";

export default async function SchoolLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto my-2 max-w-[1100px] px-3 py-2 md:my-4 md:px-4">
      {children}
    </div>
  );
}
