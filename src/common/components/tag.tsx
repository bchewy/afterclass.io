// https://supercharged-shadcn-components.dykennethryan.com/docs/components/chip
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/common/functions";

const tagVariants = cva(
  "inline-flex items-center select-none appearance-none rounded-sm text-sm font-medium transition-colors data-[clickable=true]:cursor-pointer",
  {
    compoundVariants: [
      // Default color
      {
        variant: "filled",
        color: "default",
        className:
          "bg-foreground text-background data-[clickable=true]:hover:bg-foreground/75",
      },
      {
        variant: "outline",
        color: "default",
        className:
          "border border-foreground text-foreground data-[clickable=true]:hover:bg-accent",
      },
      {
        variant: "soft",
        color: "default",
        className:
          "bg-accent text-foreground data-[clickable=true]:hover:bg-foreground/15 dark:data-[clickable=true]:hover:bg-accent/65",
      },
      // Primary color
      {
        variant: "filled",
        color: "primary",
        className:
          "bg-foreground text-background data-[clickable=true]:hover:bg-foreground/75",
      },
      {
        variant: "outline",
        color: "primary",
        className:
          "border border-foreground text-foreground data-[clickable=true]:hover:bg-accent",
      },
      {
        variant: "soft",
        color: "primary",
        className:
          "bg-accent text-foreground data-[clickable=true]:hover:bg-muted",
      },
      // Secondary color
      {
        variant: "filled",
        color: "secondary",
        className:
          "bg-foreground text-background data-[clickable=true]:hover:bg-foreground/75",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "border border-foreground text-foreground data-[clickable=true]:hover:bg-accent",
      },
      {
        variant: "soft",
        color: "secondary",
        className:
          "bg-accent text-foreground data-[clickable=true]:hover:bg-muted",
      },
      // Info color
      {
        variant: "filled",
        color: "info",
        className:
          "bg-foreground text-background data-[clickable=true]:hover:bg-foreground/75",
      },
      {
        variant: "outline",
        color: "info",
        className:
          "border border-foreground text-foreground data-[clickable=true]:hover:bg-accent",
      },
      {
        variant: "soft",
        color: "info",
        className:
          "bg-accent text-foreground data-[clickable=true]:hover:bg-muted",
      },
      // Success color
      {
        variant: "filled",
        color: "success",
        className:
          "bg-foreground text-background data-[clickable=true]:hover:bg-foreground/75",
      },
      {
        variant: "outline",
        color: "success",
        className:
          "border border-foreground text-foreground data-[clickable=true]:hover:bg-accent",
      },
      {
        variant: "soft",
        color: "success",
        className:
          "bg-accent text-foreground data-[clickable=true]:hover:bg-muted",
      },
      // Warning color
      {
        variant: "filled",
        color: "warning",
        className:
          "bg-foreground text-background data-[clickable=true]:hover:bg-foreground/75",
      },
      {
        variant: "outline",
        color: "warning",
        className:
          "border border-foreground text-foreground data-[clickable=true]:hover:bg-accent",
      },
      {
        variant: "soft",
        color: "warning",
        className:
          "bg-accent text-foreground data-[clickable=true]:hover:bg-muted",
      },
      // Error color
      {
        variant: "filled",
        color: "error",
        className:
          "bg-foreground text-background data-[clickable=true]:hover:bg-foreground/75",
      },
      {
        variant: "outline",
        color: "error",
        className:
          "border border-foreground text-foreground data-[clickable=true]:hover:bg-accent",
      },
      {
        variant: "soft",
        color: "error",
        className:
          "bg-accent text-foreground data-[clickable=true]:hover:bg-muted",
      },
    ],
    variants: {
      variant: {
        filled: "",
        outline: "bg-transparent",
        soft: "",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        info: "",
        success: "",
        warning: "",
        error: "",
      },
      size: {
        xs: "h-5 [&>.label]:px-1.5 [&>.label]:text-xs [&>.start-icon]:size-3 [&>.start-icon>span]:size-3 [&>.start-icon>svg]:size-3 [&>.start-icon]:ml-0.5 [&>.start-icon]:-mr-1 [&>.deletable]:mr-0.5 [&>.deletable]:-ml-1",
        sm: "h-6 [&>.label]:px-2 [&>.start-icon]:size-5 [&>.start-icon>span]:size-5 [&>.start-icon>svg]:size-5 [&>.start-icon]:ml-0.5 [&>.start-icon]:-mr-1 [&>.deletable]:mr-0.5 [&>.deletable]:-ml-1",
        md: "h-8 [&>.label]:px-3 [&>.start-icon]:size-6 [&>.start-icon>span]:size-6 [&>.start-icon>svg]:size-6 [&>.start-icon]:ml-1 [&>.start-icon]:-mr-1.5 [&>.deletable]:mr-1 [&>.deletable]:-ml-1.5",
      },
    },
    defaultVariants: {
      color: "default",
      variant: "filled",
      size: "md",
    },
  },
);

const deletableVariants = cva(
  "cursor-pointer rounded-full flex items-center justify-center transition-[background-color] [&_svg]:text-current size-4 [&_svg]:size-2.5",
  {
    variants: {
      variant: {
        filled:
          "data-[variant=filled]:bg-white/45 data-[variant=filled]:hover:bg-white/80",
        outline: "text-accent",
        soft: "text-accent",
      },
      color: {
        default:
          "data-[variant=filled]:bg-accent/80 data-[variant=filled]:hover:bg-accent data-[variant=filled]:text-foreground bg-foreground/65 hover:bg-foreground",
        primary:
          "data-[variant=filled]:text-foreground bg-foreground/65 hover:bg-foreground",
        secondary:
          "data-[variant=filled]:text-foreground bg-foreground/65 hover:bg-foreground",
        info: "data-[variant=filled]:text-foreground bg-foreground/65 hover:bg-foreground",
        success:
          "data-[variant=filled]:text-foreground bg-foreground/65 hover:bg-foreground",
        warning:
          "data-[variant=filled]:text-foreground bg-foreground/65 hover:bg-foreground",
        error:
          "data-[variant=filled]:text-foreground bg-foreground/65 hover:bg-foreground",
      },
    },
    defaultVariants: {
      color: "default",
      variant: "filled",
    },
  },
);

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof tagVariants> {
  size?: "xs" | "sm" | "md";
  deletable?: boolean;
  avatar?: React.JSX.Element;
  deleteIcon?: React.JSX.Element;
}

function Tag({
  children,
  variant = "filled",
  size = "md",
  color = "default",
  avatar,
  deletable = true,
  deleteIcon,
  onClick,
  className,
}: TagProps) {
  return (
    <div
      className={cn(tagVariants({ variant, color, className, size }))}
      data-clickable={!!onClick}
      onClick={onClick}
    >
      {!!avatar && <div className="start-icon">{avatar}</div>}
      <div className="label align-middle">{children}</div>
      {!!deletable && (
        <div
          className={cn(deletableVariants({ variant, color }), "deletable")}
          data-variant={variant}
          data-color={color}
        >
          {deleteIcon ?? <X strokeWidth={3} />}
        </div>
      )}
    </div>
  );
}

export { Tag };
