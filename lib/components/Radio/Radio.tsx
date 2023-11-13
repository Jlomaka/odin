import {Label} from "components";
import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import classNames from "classnames";

interface IProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type"> {
  label?: string;
}

// TODO add props to checked, unchecked and disabled status
export const Radio = ({label, className, name, id, ...props}: IProps) => {
  return (
    <Label
      label={label}
      position={"right"}
    >
      <input
        className={classNames(className)}
        id={id || name}
        name={name}
        type="radio"
        {...props}
      />
    </Label>
  );
};