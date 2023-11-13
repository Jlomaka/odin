import {Button} from "components";
import {IconClose} from "icons";
import {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import classNames from "classnames";

interface IPortalProps {
  children: ReactNode;
  selector: string;
}

export const ClientOnlyPortal = ({children, selector}: IPortalProps) => {
  const ref = useRef<Element | DocumentFragment | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setIsMounted(true);
  }, [selector]);

  return isMounted ? createPortal(children, ref.current!) : null;
};

interface IProps {
  className?: string;
  children: ReactNode;
  title?: string;
  onClose: () => void;
}

export const Popup = ({className, children, title, onClose}: IProps) => {
  const body = document.body;

  const closeOnEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    body?.classList.add("overflow-hidden");
    window.addEventListener("keyup", closeOnEscape);

    return (() => {
      body?.classList.remove("overflow-hidden");
      window.removeEventListener("keyup", closeOnEscape);
    });
  }, [body?.classList, closeOnEscape]);

  return (
    <ClientOnlyPortal selector="#popup">
      <div
        className={classNames("absolute z-50 inset-0 flex flex-col justify-center items-center w-auto h-auto overflow-hidden box-border", className)}
        aria-hidden={false}
      >
        <div
          className={"absolute inset-0 bg-black/50"}
          onClick={onClose}
        />
        <div className={"relative flex flex-col my-6 mx-0 bg-main-black border-4 overflow-hidden rounded-md"}>
          <header
            className={"relative flex flex-row shrink-0 items-center h-[60px] pl-4 pr-[68px] box-border border-b-[1px] border-solid border-main-black"}
          ><h3 className={"flex-[1_1_75%] text-2xl py-4 px-0"}>{title}</h3>
            <Button
              className={"absolute z-10 right-0 top-0 flex flex-row justify-center items-center w-[56px] h-[56px]"}
              onClick={onClose}
              buttonStyle={"empty"}
              type={"button"}
            >
              <IconClose
                width={16}
                onClick={onClose}
              />
            </Button>
          </header>
          <section className={"max-h-full p-4 box-border overflow-y-auto overflow-x-hidden"}>
            {children}
          </section>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};
