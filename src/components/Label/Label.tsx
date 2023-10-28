import React, {DetailedHTMLProps, LabelHTMLAttributes, useCallback} from "react";
import classNames from "classnames";

interface IProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  label?: string;
  position?: "before" | "after";
}

export const Label = ({className, label, children, position = "before"}: IProps) => {
  const renderLabel = useCallback((classNamePosition?: string) => (
    <p className={classNames("text-left text-gray text-sm mb-0.5", className, classNamePosition)}>{label}</p>), [className, label]);

  return (
    <label>
      {position === "before" && renderLabel()}
      {children}
      {position === "after" && renderLabel("inline-block !mb-0 ml-2")}
    </label>
  );
};