import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
interface IProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label?: string;
}
export declare const Textarea: ({ label, className, name, id, ...props }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
