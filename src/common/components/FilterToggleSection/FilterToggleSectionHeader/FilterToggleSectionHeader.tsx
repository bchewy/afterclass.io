import { ReviewType } from "@prisma/client";

import { Heading } from "@/common/components/heading";
import {
  GraduationCapIcon,
  BooksIcon,
} from "@/common/components/icons";

export const FilterToggleSectionHeader = ({ type }: { type: ReviewType }) => {
  return (
    <div className="flex items-center gap-2 pl-1 text-lg md:gap-4 md:pl-0 md:text-2xl">
      {type === ReviewType.COURSE ? (
        <>
          <BooksIcon className="size-4 md:size-6" />
          <Heading as="h2">Courses</Heading>
        </>
      ) : (
        <>
          <GraduationCapIcon className="size-4 md:size-6" />
          <Heading as="h2">Professors</Heading>
        </>
      )}
    </div>
  );
};
