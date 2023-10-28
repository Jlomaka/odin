import type {Meta, StoryObj} from "@storybook/react";
import {Checkbox} from "components";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultCheckbox: TStory = {
  args: {
    label: "Checkbox"
  },
};
