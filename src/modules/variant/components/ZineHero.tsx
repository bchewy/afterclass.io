export function ZineHero() {
  return (
    <section className="zine-grid-bg zine-noise relative border-b-[3px] border-black">
      <div className="relative grid gap-0 md:grid-cols-12">
        <div className="border-b-[3px] border-black p-6 md:col-span-8 md:border-b-0 md:border-r-[3px] md:p-10">
          <p className="mb-4 text-xs font-bold tracking-[0.3em] uppercase">
            Vol. 47 — Sem 2 2026
          </p>
          <h1 className="zine-display text-[clamp(3rem,12vw,7rem)] leading-[0.85]">
            The
            <br />
            <span className="text-[#ff006e]">Underground</span>
            <br />
            Review
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed md:text-base">
            Your classmates wrote the syllabus. Raw takes on courses, profs, and
            bid strategies — printed like a zine, not a SaaS dashboard.
          </p>
        </div>

        <div className="flex flex-col md:col-span-4">
          <div className="flex-1 border-b-[3px] border-black bg-[#00f5d4] p-6">
            <p className="zine-display text-4xl md:text-5xl">12K+</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest">
              Unfiltered reviews
            </p>
          </div>
          <div className="flex-1 bg-black p-6 text-[#faf8f2]">
            <p className="zine-display text-4xl text-[#ffbe0b] md:text-5xl">
              FREE
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#00f5d4]">
              Always. No paywall.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap border-t-[3px] border-black">
        {["HOT TAKES", "BID INTEL", "PROF RATINGS", "COURSE WARNINGS"].map(
          (tag) => (
            <span
              key={tag}
              className="zine-stamp m-3 bg-[#ffbe0b] text-black"
            >
              {tag}
            </span>
          ),
        )}
      </div>
    </section>
  );
}
