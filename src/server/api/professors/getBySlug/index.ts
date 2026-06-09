import { z } from "zod";

import { publicProcedure } from "@/server/api/trpc";
import { isMockDataEnabled } from "@/server/mock/enable";
import { mockProfessorBySlug } from "@/server/mock/handlers";

export const getBySlug = publicProcedure
  .input(z.object({ slug: z.string() }))
  .query(async ({ input, ctx }) => {
    if (isMockDataEnabled()) {
      return mockProfessorBySlug(input.slug);
    }

    return await ctx.db.professors.findUnique({
        include: {
          belongToUniversity: true,
        },
        where: {
          slug: input.slug,
        },
      });
  });
