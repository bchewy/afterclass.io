import { type Metadata } from "next";

import {
  SignalDeckComparison,
  SignalDeckHero,
  SignalDeckReviewGrid,
} from "@/modules/variant/components";

export const metadata: Metadata = {
  title: "Signal Deck — AfterClass UI Variant",
  description:
    "Radical brutalist redesign of AfterClass: command deck layout, bento review grid, floating dock navigation.",
};

export default function VariantPage() {
  return (
    <>
      <SignalDeckHero />
      <SignalDeckReviewGrid />
      <SignalDeckComparison />
    </>
  );
}
