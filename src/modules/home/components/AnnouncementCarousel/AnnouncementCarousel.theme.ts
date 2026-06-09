import { tv, type VariantProps } from "tailwind-variants";

export const announcementsCarouselTheme = tv({
  slots: {
    wrapper: ["flex", "flex-col", "items-start", "gap-4"],
    announcements: [
      "flex",
      "items-start",
      "gap-6",
      "self-stretch overflow-x-auto",
    ],
    heading: ["text-sm", "font-semibold", "text-foreground"],
    divider: ["my-4"],
    card: [
      "relative",
      "overflow-hidden",
      "rounded-sm",
      "border",
      "border-border",
      "shrink-0",
    ],
    text: [
      "absolute",
      "bottom-3",
      "left-4",
      "text-base",
      "font-medium",
      "text-foreground",
    ],
  },
});

export type AnnouncementCarouselVariants = VariantProps<
  typeof announcementsCarouselTheme
>;
