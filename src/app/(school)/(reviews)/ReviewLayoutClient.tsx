"use client";

import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

import {
  RadicalHomeShell,
  RadicalHomeSidebar,
} from "@/modules/home/components/RadicalHome";

type ReviewLayoutClientProps = {
  header: ReactNode;
  rating: ReactNode;
  filter: ReactNode;
  information: ReactNode;
  reviews: ReactNode;
  standardAside: ReactNode;
};

export function ReviewLayoutClient({
  header,
  rating,
  filter,
  information,
  reviews,
  standardAside,
}: ReviewLayoutClientProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <RadicalHomeShell sidebar={<RadicalHomeSidebar />}>{reviews}</RadicalHomeShell>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-6">
      {header}
      {rating}
      {filter}
      {information}
      <div className="relative flex w-full justify-center gap-6">
        {reviews}
        {standardAside}
      </div>
    </div>
  );
}
