import * as React from "react";
const Dot = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill={props.fill ?? "#000"} {...props}>
        <rect width={12} height={12} rx={5.876} />
    </svg>
);
export default Dot;
