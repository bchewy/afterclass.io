import type { Meta, StoryObj } from "@storybook/react";

import { RadicalHomeFeatures } from "./RadicalHomeFeatures";
import { RadicalHomeHero } from "./RadicalHomeHero";
import { RadicalHomeMarquee } from "./RadicalHomeMarquee";
import { RadicalHomeFeedHeader } from "./RadicalHomeFeedHeader";

import "./radical-home.scss";

const meta: Meta = {
  title: "Home/RadicalHome",
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="radical-home min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Hero: StoryObj = {
  render: () => <RadicalHomeHero />,
};

export const Marquee: StoryObj = {
  render: () => <RadicalHomeMarquee />,
};

export const Features: StoryObj = {
  render: () => <RadicalHomeFeatures />,
};

export const FeedHeader: StoryObj = {
  render: () => <RadicalHomeFeedHeader />,
};

export const FullPage: StoryObj = {
  render: () => (
    <>
      <RadicalHomeHero />
      <RadicalHomeMarquee />
      <RadicalHomeFeatures />
      <RadicalHomeFeedHeader />
      <div className="border-2 border-dashed border-[var(--radical-border)] p-8 text-center text-[var(--radical-muted)]">
        [ Review feed renders here ]
      </div>
    </>
  ),
};
