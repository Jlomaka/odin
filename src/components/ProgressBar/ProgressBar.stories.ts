import type {Meta, StoryObj} from "@storybook/react";
import {ProgressBar} from "components/ProgressBar/ProgressBar.tsx";

const meta = {
  title: "Example/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultProgressBar: TStory = {
  args: {
    label: "Progress Bar"
  },
};
