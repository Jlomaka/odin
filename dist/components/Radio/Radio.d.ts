import { DetailedHTMLProps, InputHTMLAttributes } from "react";
interface IProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type"> {
    label?: string;
}
export declare const Radio: ({ label, className, name, id, ...props }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
