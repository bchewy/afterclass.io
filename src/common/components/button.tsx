import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/common/functions";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none md:text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/40 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:!shadow-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-2 border-foreground shadow-[var(--nb-shadow)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[var(--nb-shadow-lg)]",
        destructive:
          "bg-destructive text-white border-2 border-foreground shadow-[var(--nb-shadow)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[var(--nb-shadow-lg)] focus-visible:ring-destructive/20",
        outline:
          "border-2 border-foreground bg-card shadow-[var(--nb-shadow)] hover:bg-accent hover:text-accent-foreground hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[var(--nb-shadow-lg)]",
        secondary:
          "bg-secondary text-secondary-foreground border-2 border-foreground shadow-[var(--nb-shadow)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[var(--nb-shadow-lg)]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
