import React, {ReactNode} from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
  children: ReactNode;
}

export const MenuItem = ({className, children}: IProps) => {
  return (
    <li className={classNames("text-center border-b-[1px] border-solid border-gray-stroke hover:bg-main-black last:border-none", className)}>
      {children}
    </li>
  );
};