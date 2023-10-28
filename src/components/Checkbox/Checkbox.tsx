import {Label} from "components";
import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import classNames from "classnames";

interface IProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type"> {
  label?: string;
  className?: string;
}

export const Checkbox = ({label, className = "", id, name}: IProps) => {
  return (
    <Label
      label={label}
      position={"after"}
    >
      <input
        id={id || name}
        name={name}
        className={classNames(className)}
        type="checkbox"
      />
    </Label>
  );
};