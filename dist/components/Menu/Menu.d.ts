import { ReactNode } from "react";
export * from "./MenuItem.tsx";
interface IProps {
    className?: string;
    state?: boolean;
    disabled?: boolean;
    children: ReactNode;
}
export declare const Menu: ({ className, state, disabled, children }: IProps) => import("react/jsx-runtime").JSX.Element;
