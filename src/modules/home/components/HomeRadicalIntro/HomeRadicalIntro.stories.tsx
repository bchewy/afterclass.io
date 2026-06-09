import type { Meta, StoryObj } from "@storybook/react";

import { HomeRadicalIntro } from "./HomeRadicalIntro";

const meta = {
  title: "Home/HomeRadicalIntro",
  component: HomeRadicalIntro,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-[#08070c] p-3 md:p-8">
        <div className="mx-auto max-w-6xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof HomeRadicalIntro>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
