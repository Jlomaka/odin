import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "components/Button/Button.tsx";

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
    label: "Primary"
  },
};
