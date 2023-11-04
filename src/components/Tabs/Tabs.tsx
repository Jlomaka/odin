import {Button} from "components/Button/Button";
import React, {ReactNode} from "react";
import {useTabs} from "components/Tabs/Tabs.provider.tsx";

interface IProps {
  label?: ReactNode | string;
  value?: string |  number;
}

export const Tab = ({label, value}: IProps) => {
  const {activeTab, setActiveTab} = useTabs();

  return (
    <Button role={"tab"} onClick={() => {setActiveTab();}}>
      Tabs
    </Button>
  );
};