import React, { ReactNode } from "react";
interface IContext<Tabs extends string = ""> {
    activeTab: Tabs | string;
    setActiveTab: (tab: Tabs | string) => void;
}
export declare const Context: React.Context<IContext<"">>;
export declare function useTabs(): IContext;
interface IProps<Tabs> {
    value?: Tabs | string;
    onChange?: (value: Tabs | string) => void;
    children: ReactNode;
}
export declare const TabsProvider: <Tabs extends string = "">({ value, onChange, children }: IProps<Tabs>) => import("react/jsx-runtime").JSX.Element;
export {};
