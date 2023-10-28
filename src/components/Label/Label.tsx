import React, {DetailedHTMLProps, LabelHTMLAttributes, useMemo} from "react";
import classNames from "classnames";

type TPosition = "top" | "right" | "bottom" | "left";

interface IProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  label?: string;
  position?: TPosition;
}

const classNamePosition: Record<TPosition, string> = {
  top: "mb-0.5",
  right: "inline-block mb-0 ml-2",
  bottom: "mt-0.5",
  left: "inline-block mb-0 mr-2"
};

export const Label = ({className, label, children, position = "top"}: IProps) => {
  const renderLabel = useMemo(() => {
    return (
      <p className={classNames("text-left text-gray text-sm", className, classNamePosition[position])}>{label}</p>);
  }, [className, label, position]);

  return (
    <label>
      {(position === "top" || position === "left") && renderLabel}
      {children}
      {(position === "right" || position === "bottom") && renderLabel}
    </label>
  );
};