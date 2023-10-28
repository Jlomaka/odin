import {Button} from "components";
import React, {ReactNode, useEffect, useRef, useState} from "react";
import {useOutsideClickHandler} from "utils/useOutsideClickHandler";
import {IconMenu} from "icons";

// eslint-disable-next-line react-refresh/only-export-components
export * from "./MenuItem.tsx";

interface IProps {
  className?: string;
  state?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

// TODO custom button
export const Menu = ({className, state = false, disabled, children}: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(state);
  }, [state]);

  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef, () => setIsOpen(false));

  return (
    <section className={className}>
      <nav ref={wrapperRef}>
        <Button
          buttonStyle={"empty"}
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <IconMenu
            width={30}
            height={30}
            className={`${disabled && "cursor-pointer"}`}
            fill={disabled ? "#4B4F64" : "#D9D9D9"}
          />
        </Button>
        {isOpen &&
          <ul className={"absolute top-[44px] left-0 rounded-xl w-[240px] z-10 border-solid border-gray-200 border-[1px] overflow-hidden"}>
            {children}
          </ul>
        }
      </nav>
    </section>
  );
};