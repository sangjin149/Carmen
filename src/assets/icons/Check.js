import * as React from "react";
const SvgComponent = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={9} fill={props.fill ?? "#fff"} {...props}>
        <path d="m4.367 9-3.8-3.8.95-.95 2.85 2.85L10.483.983l.95.95L4.367 9Z" />
    </svg>
);
export default SvgComponent;
