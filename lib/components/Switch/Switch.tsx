import {Label} from "components";
import React, {useEffect, useState} from "react";

import "./Switch.css";

interface IProps {
  label?: string;
  state?: boolean;
  onChange?: (state: boolean) => void;
  disabled?: boolean;
}

export const Switch = ({label, state = false, onChange, disabled = false}: IProps) => {
  const [isSwitchState, setIsSwitchState] = useState<boolean>(state);

  useEffect(() => {
    setIsSwitchState(state);
  }, [state]);

  return (
    <div
      role="switch"
      aria-checked={`${isSwitchState}`}
      aria-disabled={`${disabled}`}
      tabIndex={0}
      onClick={(event) => {
        if (disabled) {
          return;
        }
        event.preventDefault();
        setIsSwitchState(prevState => {
          onChange && onChange(!prevState);
          return !prevState;
        });
      }}
      onKeyDown={(event) => {
        if (disabled) {
          return;
        }
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsSwitchState(prevState => {
            onChange && onChange(!prevState);
            return !prevState;
          });
        }
      }}
    >
      <Label label={label}>
        <span className="switch">
          <span></span>
        </span>
      </Label>
    </div>
  );
};