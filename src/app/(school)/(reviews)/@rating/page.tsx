import {
  ChartLineIcon,
  CursorClickIcon,
  GraduationCapIcon,
} from "@/common/components/icons";

const cards = [
  {
    icon: <CursorClickIcon className="size-5" />,
    label: "Search",
    title: "Jump straight to the class decision.",
  },
  {
    icon: <ChartLineIcon className="size-5" />,
    label: "Compare",
    title: "Read patterns across grades, workload, and teaching style.",
  },
  {
    icon: <GraduationCapIcon className="size-5" />,
    label: "Contribute",
    title: "Leave the signal the next batch of students needs.",
  },
];

export default function HomeRating() {
  return (
    <section className="grid w-full gap-3 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="group bg-card rounded-3xl border p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="bg-primary/10 text-primary rounded-2xl p-3">
              {card.icon}
            </div>
            <div className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase">
              {card.label}
            </div>
          </div>
          <p className="text-xl leading-tight font-black tracking-[-0.04em]">
            {card.title}
          </p>
        </div>
      ))}
    </section>
  );
}
