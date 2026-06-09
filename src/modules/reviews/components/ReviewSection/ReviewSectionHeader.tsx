export type ReviewSectionHeaderProps = {
  children?: React.ReactNode;
};

export const ReviewSectionHeader = ({ children }: ReviewSectionHeaderProps) => {
  return (
    <div className="flex flex-col items-start justify-between gap-3 px-4 md:flex-row md:items-center">
      <div className="flex items-baseline gap-3">
        {/* Terminal prompt */}
        <span className="font-mono-ui neon-text-sm text-sm select-none">
          &gt;_
        </span>
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
          <span className="gradient-text-cyan">Reviews</span>
        </h1>
        {/* Blinking cursor */}
        <span className="font-mono-ui text-primary hidden animate-pulse text-2xl font-light md:inline">
          |
        </span>
      </div>
      {children}
    </div>
  );
};
