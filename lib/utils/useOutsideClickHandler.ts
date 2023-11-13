import {useEffect} from "react";

export const useOutsideClickHandler = (ref: any, onClick: Function) => {
  useEffect(() => {
    function handleClickOutside (event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setTimeout(() => {
          onClick();
        }, 100);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick, ref]);
};
