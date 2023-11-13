import { DetailedHTMLProps, InputHTMLAttributes } from "react";
interface IProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type"> {
    label?: string;
    className?: string;
}
export declare const Checkbox: ({ label, className, id, name, ...props }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
