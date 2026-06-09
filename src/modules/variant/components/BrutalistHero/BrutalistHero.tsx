import Link from "next/link";

export const BrutalistHero = () => {
  return (
    <section className="relative z-10 border-b-[3px] border-[#0a0a0a]">
      <div className="grid md:grid-cols-12">
        <div className="flex flex-col justify-between border-b-[3px] border-[#0a0a0a] p-6 md:col-span-7 md:border-r-[3px] md:border-b-0 md:p-10">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#ff4d00]">
              CAMPUS UNDERGROUND · VARIANT 7B80
            </p>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] font-bold tracking-tighter uppercase">
              After
              <span className="block text-[#d4ff00] [-webkit-text-stroke:3px_#0a0a0a]">
                Class
              </span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed font-medium md:text-base">
              Radical redesign. No sidebar. No soft purple. No 954px cage.
              Raw reviews, loud typography, hard edges.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/variant/compare" className="brutal-btn">
              See the diff
            </Link>
            <Link href="/" className="brutal-btn brutal-btn-outline">
              Classic site
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col justify-center bg-[#0a0a0a] p-6 text-white md:col-span-5 md:p-10">
          <div className="brutal-float absolute top-4 right-4 border-[3px] border-[#d4ff00] bg-[#ff4d00] px-3 py-1 text-xs font-bold tracking-widest text-white">
            BETA
          </div>
          <p className="text-xs font-bold tracking-[0.25em] text-[#d4ff00]">
            DESIGN MANIFESTO
          </p>
          <ul className="mt-4 space-y-3 text-sm font-medium">
            <li className="flex gap-3">
              <span className="text-[#d4ff00]">01</span>
              Bottom dock nav replaces sidebar
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4ff00]">02</span>
              Bento grid replaces vertical card stack
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4ff00]">03</span>
              Lime/black brutalism replaces soft purple
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4ff00]">04</span>
              Full-bleed layout replaces 954px container
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
