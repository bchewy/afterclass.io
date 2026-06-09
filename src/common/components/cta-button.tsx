import {
  type ReactNode,
  type ReactElement,
  type ComponentProps,
  isValidElement,
  cloneElement,
} from "react";

import { ProgressLink } from "@/common/components/progress-link";
import { cn } from "@/common/functions";

export type CtaButtonProps = ComponentProps<typeof ProgressLink> & {
  ctaText: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

export const CtaButton = ({
  ctaText,
  iconLeft,
  iconRight,
  className,
  ...props
}: CtaButtonProps) => {
  const renderIcon = (iconElement: ReactNode) => {
    if (!isValidElement(iconElement)) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return cloneElement(iconElement as ReactElement<any>, {
      className: "size-6",
    });
  };

  return (
    <ProgressLink
      className={cn(
        "h-fit w-full items-center justify-between self-stretch rounded-sm border p-5 has-[>svg]:px-5 hover:bg-foreground hover:text-background",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        {renderIcon(iconLeft)}
        <span className="text-base font-semibold">{ctaText}</span>
      </div>
      {renderIcon(iconRight)}
    </ProgressLink>
  );
};
