import type {Meta, StoryObj} from "@storybook/react";
import {Switch} from "components";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultSwitch: TStory = {
  args: {
    label: "Switch view"
  },
};
