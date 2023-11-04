import {Button} from "components/Button/Button";
import React, {ReactNode} from "react";
import {useTabs} from "components/Tabs/Tabs.provider.tsx";
import classNames from "classnames";

interface IProps {
  className?: string;
  label?: ({isActive}: { isActive: boolean }) => ReactNode | string;
  value: string;
  children?: ReactNode | string;
  disabled?: boolean;
}

export const Tab = ({className, label, value, children, disabled}: IProps) => {
  const {activeTab, setActiveTab} = useTabs();
  const isActive = activeTab === value;

  return (
    <Button
      className={classNames(className, "rounded-none")}
      id={`${value}-tab`}
      role={"tab"}
      buttonStyle={isActive ? "primary" : "empty"}
      onClick={() => {
        setActiveTab(value);
      }}
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      disabled={disabled}
    >
      {children}
      {label && label({isActive})}
    </Button>
  );
};