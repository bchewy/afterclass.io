"use client";

import { useEffect, useState } from "react";

type StatItem = {
  value: string;
  label: string;
  accent: "cyan" | "green" | "purple" | "amber";
};

const STATS: StatItem[] = [
  { value: "12,000+", label: "reviews", accent: "cyan" },
  { value: "500+", label: "courses", accent: "green" },
  { value: "200+", label: "professors", accent: "purple" },
  { value: "100%", label: "student-built", accent: "amber" },
];

const accentClasses: Record<StatItem["accent"], string> = {
  cyan: "text-[var(--neon-primary)]",
  green: "text-[var(--neon-accent)]",
  purple: "text-[var(--neon-secondary)]",
  amber: "text-[oklch(0.82_0.18_70)]",
};

function AnimatedCounter({ target }: { target: string }) {
  const [displayed, setDisplayed] = useState("0");
  useEffect(() => {
    const num = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (isNaN(num)) {
      setDisplayed(target);
      return;
    }
    const duration = 1200;
    const steps = 30;
    const increment = num / steps;
    let current = 0;
    const suffix = target.replace(/[0-9]/g, "").replace(",", "");
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        clearInterval(timer);
        setDisplayed(target);
      } else {
        setDisplayed(
          Math.floor(current).toLocaleString() + (suffix ? suffix : ""),
        );
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);
  return <>{displayed}</>;
}

export function CyberpunkHeroBanner() {
  return (
    <div className="relative mb-4 overflow-hidden border border-[var(--neon-primary)]/20 bg-card/40 px-4 py-6 backdrop-blur-sm md:mb-6 md:px-8 md:py-8">
      {/* Corner brackets */}
      <div className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-[var(--neon-primary)]/80" />
      <div className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-[var(--neon-primary)]/80" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-[var(--neon-primary)]/80" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-[var(--neon-primary)]/80" />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--neon-primary)]/3 via-transparent to-[var(--neon-secondary)]/3" />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Top row: system label + headline */}
        <div className="flex flex-col gap-2">
          <div className="font-mono-ui flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--neon-primary)]/70">
            <div className="status-dot-neon size-1.5 shrink-0" />
            <span>smu academic intel · v2.0 · online</span>
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Course reviews,{" "}
            <span className="gradient-text-cyan">unfiltered.</span>
          </h2>
          <p className="max-w-lg text-sm text-muted-foreground">
            Read honest reviews from fellow students. Find the right courses,
            the right professors. Make smarter decisions.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-hover-glow group relative border border-border/40 bg-background/60 px-4 py-3 backdrop-blur-sm"
            >
              {/* Neon accent left strip */}
              <div
                className={`pointer-events-none absolute inset-y-0 left-0 w-0.5 ${accentClasses[stat.accent]} opacity-60`}
                style={{
                  background: "currentColor",
                  boxShadow: "0 0 6px currentColor",
                }}
              />
              <div
                className={`font-display text-xl font-bold md:text-2xl ${accentClasses[stat.accent]}`}
              >
                <AnimatedCounter target={stat.value} />
              </div>
              <div className="font-mono-ui mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
