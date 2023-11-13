import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import classNames from "classnames";
import {Label} from "components/Label/Label.tsx";

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
}

// TODO eye for password type
export const Input = ({
  label,
  className,
  type = "text",
  id,
  name,
  ...props
}: IProps) => {
  return (
    <Label
      className={className}
      label={label}
    >
      <input
        name={name}
        id={id || name}
        className={classNames("h-10 rounded-lg py-2 px-4 border-2 border-solid border-gray-200 w-full outline-none placeholder:text-gray autofill:bg-transparent disabled:bg-gray-text-input/20")}
        type={type}
        {...props}
      />
    </Label>
  );
};