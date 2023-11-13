import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
type TPosition = "top" | "right" | "bottom" | "left";
interface IProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    label?: string;
    position?: TPosition;
}
export declare const Label: ({ className, label, children, position }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
