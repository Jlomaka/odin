import type {Meta, StoryObj} from "@storybook/react";
import {Select} from "components/Select/Select.tsx";

const meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultInput: TStory = {
  args: {
    label: "Select label"
  },
};
