import type {Meta, StoryObj} from "@storybook/react";
import {Radio} from "components";

const meta = {
  title: "Example/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultRadio: TStory = {
  args: {
    label: "Radio"
  },
};
