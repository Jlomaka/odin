import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import { GroupBase } from "react-select/dist/declarations/src/types";
interface IProps<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> extends StateManagerProps<Option, IsMulti, Group> {
    label?: string;
}
export declare const Select: <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ label, ...props }: IProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export {};
