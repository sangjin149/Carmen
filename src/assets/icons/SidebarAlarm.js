import * as React from "react";
const SvgSidebarAlarm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M0 14.167V12.5h1.852V6.667q0-1.73 1.157-3.073 1.158-1.344 3.01-1.76V1.25q0-.52.405-.885T7.407 0t.984.365q.405.365.405.885v.583q1.852.417 3.01 1.76 1.157 1.344 1.157 3.074V12.5h1.852v1.667zm7.407 2.5q-.764 0-1.307-.49-.544-.49-.544-1.177h3.703q0 .687-.544 1.177-.543.49-1.308.49M3.704 12.5h7.407V6.667q0-1.376-1.088-2.354-1.087-.98-2.616-.98-1.527 0-2.615.98-1.088.978-1.088 2.354z"
    />
  </svg>
);
export default SvgSidebarAlarm;
