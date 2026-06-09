import { z } from "zod";

import { publicProcedure } from "@/server/api/trpc";
import { PUBLIC_COURSE_FIELDS } from "../constants";
import { isMockDataEnabled } from "@/server/mock/enable";
import { mockCourseByCode } from "@/server/mock/handlers";

export const getByCourseCode = publicProcedure
  .input(z.object({ code: z.string() }))
  .query(async ({ ctx, input }) => {
    if (isMockDataEnabled()) {
      return mockCourseByCode(input.code);
    }

    return await ctx.db.courses.findUnique({
        select: PUBLIC_COURSE_FIELDS,
        where: {
          code: input.code,
        },
      });
  });

export type getByCourseCodeResolved = Awaited<
  ReturnType<typeof getByCourseCode>
>;
