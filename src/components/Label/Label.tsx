import React, {DetailedHTMLProps, LabelHTMLAttributes} from "react";
import classNames from "classnames";

interface IProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  label?: string;
}

export const Label = ({className, label, children}: IProps) => {
  return (
    <label>
      <p className={classNames("text-left text-gray text-sm mb-0.5", className)}>{label}</p>
      {children}
    </label>
  );
};