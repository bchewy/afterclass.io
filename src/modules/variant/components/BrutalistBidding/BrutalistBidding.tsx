export const BrutalistBidding = () => {
  const windows = [
    { round: "R1", status: "CLOSED", color: "bg-[#0a0a0a] text-white" },
    { round: "R2", status: "CLOSED", color: "bg-[#0a0a0a] text-white" },
    { round: "R3", status: "OPENS SOON", color: "bg-[#d4ff00] text-[#0a0a0a]" },
    { round: "R4", status: "UPCOMING", color: "bg-white text-[#0a0a0a]" },
  ];

  return (
    <section
      id="bidding"
      className="relative z-10 border-t-[3px] border-[#0a0a0a] bg-[#0a0a0a] p-6 text-white md:p-10"
    >
      <p className="text-xs font-bold tracking-[0.25em] text-[#d4ff00]">
        BID ANALYTICS
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tighter uppercase md:text-5xl">
        Win your bids
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {windows.map((w) => (
          <div
            key={w.round}
            className={`border-[3px] border-[#d4ff00] p-5 ${w.color}`}
          >
            <p className="text-4xl font-bold">{w.round}</p>
            <p className="mt-2 text-xs font-bold tracking-[0.15em]">
              {w.status}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 brutal-card-inverted border-[#d4ff00]! p-6">
        <p className="text-xs font-bold tracking-[0.2em] text-[#d4ff00]">
          ML PREDICTION
        </p>
        <p className="mt-2 text-2xl font-bold">
          COR-MGMT1302 · Section G · 98.2% safe at 12 e$points
        </p>
      </div>
    </section>
  );
};
