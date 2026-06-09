import type { Meta, StoryObj } from "@storybook/react";

import {
  SignalDeckComparison,
  SignalDeckHero,
  SignalDeckLayout,
  SignalDeckMarquee,
  SignalDeckReviewGrid,
} from "./components";

const SignalDeckShowcase = () => (
  <SignalDeckLayout>
    <SignalDeckHero />
    <SignalDeckReviewGrid />
    <SignalDeckComparison />
  </SignalDeckLayout>
);

const meta = {
  title: "Variant/Signal Deck",
  component: SignalDeckShowcase,
  parameters: {
    layout: "fullscreen",
    mockSession: {
      data: null,
      status: "unauthenticated",
      update: async () => null,
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-dvh">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SignalDeckShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPage: Story = {};

export const HeroOnly: Story = {
  render: () => (
    <SignalDeckLayout>
      <SignalDeckMarquee />
      <SignalDeckHero />
    </SignalDeckLayout>
  ),
};

export const ReviewGridOnly: Story = {
  render: () => (
    <SignalDeckLayout>
      <SignalDeckReviewGrid />
    </SignalDeckLayout>
  ),
};

export const ComparisonOnly: Story = {
  render: () => (
    <SignalDeckLayout>
      <SignalDeckComparison />
    </SignalDeckLayout>
  ),
};
