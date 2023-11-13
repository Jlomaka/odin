import { DetailedHTMLProps, InputHTMLAttributes } from "react";
interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
}
export declare const Input: ({ label, className, type, id, name, ...props }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
