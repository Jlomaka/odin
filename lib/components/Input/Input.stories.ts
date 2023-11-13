import type {Meta, StoryObj} from "@storybook/react";
import {Input} from "components";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultInput: TStory = {
  args: {
    label: "First Name"
  },
};
