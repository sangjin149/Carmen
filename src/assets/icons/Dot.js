import * as React from "react";
const Dot = ({ width = 12, height = 12, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={props.fill ?? "#000"} {...props}>
        <rect width={width} height={height} rx={width / 2} />
    </svg>
);
export default Dot;
