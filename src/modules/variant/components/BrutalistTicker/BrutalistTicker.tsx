const TICKER_ITEMS = [
  "12,847 REVIEWS AND COUNTING",
  "BID WINDOW 3 OPENS IN 4 DAYS",
  "NEW: ML BID PREDICTIONS LIVE",
  "SMU UNDERGROUND EDITION",
  "RATE YOUR PROFS. WIN YOUR BIDS.",
  "OPEN SOURCE · COMMUNITY DRIVEN",
];

export const BrutalistTicker = () => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative z-10 overflow-hidden border-b-[3px] border-[#0a0a0a] bg-[#0a0a0a] py-2 text-[#d4ff00]">
      <div className="brutal-marquee-track flex w-max whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-6 text-xs font-bold tracking-[0.2em] md:text-sm"
          >
            {item}
            <span className="mx-6 text-[#ff4d00]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};
