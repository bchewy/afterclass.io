const MARQUEE_ITEMS = [
  "12,847 REVIEWS AND COUNTING",
  "★ BREAK CLASSROOM BARRIERS ★",
  "BID SMARTER NOT HARDER",
  "SMU STUDENTS UNITE",
  "THE TRUTH ABOUT YOUR PROFS",
  "NO FILTER. NO CORPORATE BS.",
  "★ AFTERCLASS UNDERGROUND ★",
];

export function ZineMarquee() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="border-b-[3px] border-black bg-[#ff006e] py-2 text-black overflow-hidden">
      <div className="zine-marquee-track flex w-max whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="zine-display mx-6 text-sm tracking-widest md:text-base"
          >
            {item}
            <span className="mx-6 opacity-40">{"///"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
