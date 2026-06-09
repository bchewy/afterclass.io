import { VARIANT_STATS } from "@/modules/variant/data/mock-reviews";

const STATS = [
  { label: "Reviews", value: VARIANT_STATS.totalReviews },
  { label: "Courses", value: VARIANT_STATS.courses },
  { label: "Professors", value: VARIANT_STATS.professors },
  { label: "Bid accuracy", value: VARIANT_STATS.bidPredictions },
];

export const BrutalistStats = () => {
  return (
    <section className="relative z-10 grid grid-cols-2 border-b-[3px] border-[#0a0a0a] md:grid-cols-4">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`p-5 md:p-8 ${
            i < STATS.length - 1 ? "border-r-[3px] border-[#0a0a0a]" : ""
          } ${i < 2 ? "border-b-[3px] border-[#0a0a0a] md:border-b-0" : ""}`}
        >
          <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase">
            {stat.label}
          </p>
          <p className="mt-1 text-3xl font-bold tracking-tighter md:text-4xl">
            {stat.value}
          </p>
        </div>
      ))}
    </section>
  );
};
