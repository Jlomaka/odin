import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
type TButtonStyle = "primary" | "second" | "default" | "black" | "empty";
interface IProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "children"> {
    buttonStyle?: TButtonStyle;
    children: string | ReactNode;
}
export declare const Button: ({ buttonStyle, children, type, className, ...props }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
