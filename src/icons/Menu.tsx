import {SVGProps} from "react";

export const IconMenu = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={48}
        d="M88 152h336M88 256h336M88 360h336"
      />
    </svg>
  );
};