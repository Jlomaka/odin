import React, {createContext, useContext, ReactNode, useState, useEffect} from "react";

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

interface IProps<Tabs> {
  value?: Tabs | string;
  // TODO add next params event from action
  onChange?: (value: Tabs | string) => void;
  children: ReactNode;
}

// TODO function to change URL when change tab
export const TabsProvider = <Tabs extends string = ""> ({value, onChange, children}: IProps<Tabs>) => {
  const [activeTab, setActiveTab] = useState<Tabs | string>(value || "");

  useEffect(() => {
    setActiveTab(value || "");
  }, [value]);

  return (
    <Context.Provider
      value={{
        activeTab,
        setActiveTab: (newValue: Tabs | string) => {
          onChange && onChange(newValue);
          setActiveTab(newValue);
        }
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