import React from "react";
import ReactSelect from "react-select";
import {StateManagerProps} from "react-select/dist/declarations/src/useStateManager";
import {GroupBase} from "react-select/dist/declarations/src/types";
import {Label} from "components/Label/Label.tsx";

interface IProps<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> extends StateManagerProps<Option, IsMulti, Group> {
  label?: string;
}

// TODO add id to select
export const Select = <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> ({
  label,
  ...props
}: IProps<Option, IsMulti, Group>) => {
  return (
    <Label label={label}>
      <ReactSelect
        {...props}
      />
    </Label>
  );
};