import React, {DetailedHTMLProps, TextareaHTMLAttributes} from "react";
import {Label} from "components/Label/Label.tsx";
import classNames from "classnames";

interface IProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = ({label, className = "", ...props}: IProps) => {
  return (
    <Label label={label}>
      <textarea
        className={classNames("h-40 rounded-lg py-2 px-4 border-2 border-solid border-gray-200 w-full outline-none placeholder:text-gray autofill:bg-transparent disabled:bg-gray-text-input/20", className)}
        {...props}
      />
    </Label>
  );
};