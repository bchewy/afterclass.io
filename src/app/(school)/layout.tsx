import { type PropsWithChildren } from "react";

export default async function SchoolLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-full max-w-[960px] px-3 py-4 md:px-6 md:py-8">
      {children}
    </div>
  );
}
