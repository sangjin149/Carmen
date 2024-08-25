import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="#e8eaed"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-384 288-576h384L480-384Z" />
  </svg>
);
export default SvgComponent;
