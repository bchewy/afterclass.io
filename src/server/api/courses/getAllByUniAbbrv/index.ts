import { z } from "zod";
import { type Prisma, UniversityAbbreviation } from "@prisma/client";

import { publicProcedure } from "@/server/api/trpc";
import { isMockDataEnabled } from "@/server/mock/enable";
import { mockCourses } from "@/server/mock/handlers";

export const getAllByUniAbbrv = publicProcedure
  .input(
    z.object({
      universityAbbrv: z.nativeEnum(UniversityAbbreviation),
    }),
  )
  .query(async ({ ctx, input }) => {
    if (isMockDataEnabled()) {
      return mockCourses;
    }

    const courses = await ctx.db.courses.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      } satisfies Prisma.CoursesSelect,
      where: {
        belongToUniversity: { abbrv: input.universityAbbrv },
      },
    });
    return courses;
  });
