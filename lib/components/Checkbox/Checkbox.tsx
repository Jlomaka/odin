import {Label} from "components";
import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import classNames from "classnames";

interface IProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type"> {
  label?: string;
  className?: string;
}

// TODO add props to checked, unchecked and disabled status
export const Checkbox = ({label, className = "", id, name, ...props}: IProps) => {
  return (
    <Label
      label={label}
      position={"right"}
    >
      <input
        id={id || name}
        name={name}
        className={classNames(className)}
        type="checkbox"
        {...props}
      />
    </Label>
  );
};