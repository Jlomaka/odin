import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "components";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultButton: TStory = {
  args: {
    children: "Primary"
  },
};
