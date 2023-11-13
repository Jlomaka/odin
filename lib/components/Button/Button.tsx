import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import classNames from "classnames";

type TButtonStyle = "primary" | "second" | "default" | "black" | "empty";

interface IProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "children"> {
  buttonStyle?: TButtonStyle;
  children: string | ReactNode;
}

const ButtonStyle: Record<TButtonStyle, string> = {
  "primary": "bg-main text-white border-main hover:text-black hover:bg-white",
  "second": "bg-second text-white border-second hover:text-black hover:bg-white",
  "default": "bg-gray-600 text-white border-gray-600 hover:text-black hover:bg-white",
  "black": "border-gray-800 hover:bg-gray-800 hover:text-white",
  "empty": "border-transparent bg-transparent text-gray-800"
};

export const Button = ({
  buttonStyle = "default",
  children,
  type = "button",
  className,
  ...props
}: IProps) => {
  return (
    <button
      className={classNames("py-2 px-4 rounded-full border-2 border-solid ease-out duration-300", ButtonStyle[buttonStyle], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
