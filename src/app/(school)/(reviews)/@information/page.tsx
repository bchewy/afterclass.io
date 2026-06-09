import {
  MemoIcon,
  SmileyIcon,
  WarningCircleIcon,
} from "@/common/components/icons";

const insights = [
  {
    icon: <WarningCircleIcon className="size-5" />,
    title: "Spot the hidden cost",
    body: "Surface workload, grading volatility, and lecture friction before add/drop week gets expensive.",
  },
  {
    icon: <MemoIcon className="size-5" />,
    title: "Read student language",
    body: "Keep raw peer reviews central, but frame them as decision material instead of anonymous noise.",
  },
  {
    icon: <SmileyIcon className="size-5" />,
    title: "Close the loop",
    body: "A strong write-review CTA turns every solved decision into better data for the next student.",
  },
];

export default function HomeInformation() {
  return (
    <section className="bg-card grid w-full gap-4 rounded-[2rem] border p-4 md:grid-cols-[0.85fr_1.15fr] md:p-6">
      <div className="from-primary rounded-[1.5rem] bg-gradient-to-br via-[#130d2f] to-cyan-950 p-6 text-white">
        <p className="text-sm font-semibold tracking-[0.24em] text-white/55 uppercase">
          Concept shift
        </p>
        <h2 className="mt-4 text-3xl leading-none font-black tracking-[-0.06em] md:text-5xl">
          From review archive to decision engine.
        </h2>
      </div>
      <div className="grid gap-3">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className="bg-background/60 grid gap-3 rounded-3xl border p-4 md:grid-cols-[auto_1fr] md:items-start"
          >
            <div className="bg-primary/10 text-primary w-fit rounded-2xl p-3">
              {insight.icon}
            </div>
            <div>
              <h3 className="font-black tracking-[-0.03em]">{insight.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm leading-6">
                {insight.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
