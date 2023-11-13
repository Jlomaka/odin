import { ReactNode } from "react";
interface IProps {
    id?: string;
    className?: string;
    label?: ({ isActive }: {
        isActive: boolean;
    }) => ReactNode | string;
    value: string;
    children?: ReactNode | string;
    disabled?: boolean;
}
export declare const Tab: ({ id, className, label, value, children, disabled }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
