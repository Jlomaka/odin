import React from "react";
import DatePicker, {DatePickerProps} from "react-date-picker";
import {Label} from "components/Label/Label.tsx";

interface IProps extends DatePickerProps {
  label?: string;
}

export const Datepicker = ({
  label,
  ...props
}: IProps) => {
  return (
    <Label label={label}>
      <DatePicker {...props}/>
    </Label>
  );
};