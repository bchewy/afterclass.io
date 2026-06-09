import { type PropsWithChildren } from "react";

export default async function SchoolLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto my-0 max-w-[954px] p-2 md:my-4 [&:has(.radical-home)]:max-w-none [&:has(.radical-home)]:p-0">
      {children}
    </div>
  );
}
