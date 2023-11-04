import React, {ReactNode} from "react";
import {useTabs} from "components/Tabs/Tabs.provider.tsx";
import classNames from "classnames";

interface IProps {
  className?: string;
  value: string;
  children?: ReactNode | string;
}

export const TabContent = ({className, value, children}: IProps) => {
  const {activeTab} = useTabs();

  if (activeTab !== value) {
    return null;
  }

  return (
    <section
      className={classNames(className)}
      role={"tabpanel"}
    >
      {children}
    </section>
  );
};