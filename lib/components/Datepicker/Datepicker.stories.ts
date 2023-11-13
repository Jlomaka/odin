import type {Meta, StoryObj} from "@storybook/react";
import {Datepicker} from "components/Datepicker/Datepicker.tsx";

const meta = {
  title: "Example/Datepicker",
  component: Datepicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Datepicker>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultDatepicker: TStory = {
  args: {
    label: "Datepicker label"
  },
};
