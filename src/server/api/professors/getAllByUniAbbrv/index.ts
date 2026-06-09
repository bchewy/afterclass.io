import { type Prisma, UniversityAbbreviation } from "@prisma/client";
import { z } from "zod";

import { publicProcedure } from "@/server/api/trpc";
import { isMockDataEnabled } from "@/server/mock/enable";
import { mockProfessors } from "@/server/mock/handlers";

export const getAllByUniAbbrv = publicProcedure
  .input(
    z.object({
      universityAbbrv: z.nativeEnum(UniversityAbbreviation),
    }),
  )
  .query(async ({ ctx, input }) => {
    if (isMockDataEnabled()) {
      return mockProfessors;
    }

    return await ctx.db.professors.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
        } satisfies Prisma.ProfessorsSelect,
        where: {
          belongToUniversity: {
            abbrv: input.universityAbbrv,
          },
        },
      });
  });
