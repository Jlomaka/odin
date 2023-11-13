import { ReactNode } from "react";
interface IPortalProps {
    children: ReactNode;
    selector: string;
}
export declare const ClientOnlyPortal: ({ children, selector }: IPortalProps) => import("react").ReactPortal | null;
interface IProps {
    className?: string;
    children: ReactNode;
    title?: string;
    onClose: () => void;
}
export declare const Popup: ({ className, children, title, onClose }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
