import {Label} from "components";
import React from "react";
import DatePicker, {DatePickerProps} from "react-date-picker";

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