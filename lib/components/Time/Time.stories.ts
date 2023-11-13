import type {Meta, StoryObj} from "@storybook/react";
import {Time} from "components/Time/Time.tsx";

const meta = {
  title: "Example/Time",
  component: Time,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Time>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultTime: TStory = {
  args: {
    date: new Date(),
    format: "yyyy-MM-dd"
  },
};
