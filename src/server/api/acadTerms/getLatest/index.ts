import { publicProcedure } from "@/server/api/trpc";
import { isMockDataEnabled } from "@/server/mock/enable";
import { mockAcadTerm } from "@/server/mock/handlers";

export const getLatest = publicProcedure.query(({ ctx }) => {
  if (isMockDataEnabled()) {
    return mockAcadTerm;
  }

  return ctx.db.acadTerm.findFirst({
    orderBy: {
      startDt: "desc",
    },
  });
});
