interface IProps {
    label?: string;
    state?: boolean;
    onChange?: (state: boolean) => void;
    disabled?: boolean;
}
export declare const Switch: ({ label, state, onChange, disabled }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
