import {Button} from "components/Button/Button";
import React, {KeyboardEvent, ReactNode} from "react";
import {useTabs} from "components/Tabs/Tabs.provider.tsx";
import classNames from "classnames";

interface IProps {
  id?: string;
  className?: string;
  label?: ({isActive}: { isActive: boolean }) => ReactNode | string;
  value: string;
  children?: ReactNode | string;
  disabled?: boolean;
}

export const Tab = ({id, className, label, value, children, disabled}: IProps) => {
  const {activeTab, setActiveTab} = useTabs();
  const isActive = activeTab === value;

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowLeft": {
        // TODO find correct way to navigation action
      }
        break;
      case "ArrowRight": {
        // TODO find correct way to navigation action
      }
        break;
    }
  };

  return (
    <Button
      className={classNames(className, "rounded-none")}
      id={id || `${value}-tab`}
      role={"tab"}
      buttonStyle={isActive ? "primary" : "empty"}
      onClick={() => {
        setActiveTab(value);
      }}
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      disabled={disabled}
      onKeyDown={onKeyDown}
    >
      {children}
      {label && label({isActive})}
    </Button>
  );
};