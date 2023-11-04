import React, {createContext, useContext, ReactNode, useState} from "react";

interface IContext<Tabs extends string = ""> {
  activeTab: Tabs | string;
  setActiveTab: (tab: Tabs | string) => void;
}

export const Context = createContext<IContext>({
  activeTab: "",
  setActiveTab: () => {
  }
});
Context.displayName = "TabsContext";

export function useTabs (): IContext {
  const data = useContext(Context);
  if (data === null) {
    throw new Error("TabsData");
  }
  return data;
}

interface IProps {
  children: ReactNode;
}

// TODO function to change URL when change tab
export const TabsProvider = <Tabs extends string = ""> ({children}: IProps) => {
  const [activeTab, setActiveTab] = useState<Tabs | string>("");

  return (
    <Context.Provider
      value={{
        activeTab,
        setActiveTab
      }}
    >
      <div
        aria-label="scrollable force tabs"
        role={"tablist"}
      >
        {children}
      </div>
    </Context.Provider>
  );
};