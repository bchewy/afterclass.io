const filters = [
  "Professor vibe",
  "Workload spikes",
  "Bell curve rumors",
  "Attendance traps",
  "Exam survival",
  "Bid strategy",
];

export default function HomeFilter() {
  return (
    <section className="w-full overflow-hidden rounded-3xl border bg-[#130d2f] p-2 text-white">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => (
          <div
            key={filter}
            className="shrink-0 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white/80"
          >
            {filter}
          </div>
        ))}
      </div>
    </section>
  );
}
