import React from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
  // from 0 to 100
  value?: number;
}

export const ProgressBar = ({className = "text-main", value = 0}: IProps) => {
  return (
    <div
      role="meter"
    >
      <svg
        className={classNames(className)}
        style={{
          width: `${value > 100 ? 100 : value}%`,
          borderRadius: "12px",
          transition: "all ease-out 300ms"
        }}
        height="8"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="currentcolor"
        ></rect>
      </svg>
    </div>
  );
};