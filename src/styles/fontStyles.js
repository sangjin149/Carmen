import { createGlobalStyle } from "styled-components";
import NanumGothic from "./fonts/NanumGothic.woff";
import NanumSquareB from "./fonts/NanumSquareB.woff";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'NanumGothic';
  src: url(${NanumGothic}) format('woff'),
       
}

@font-face {
    font-family: 'NanumSquareB';
    src: url(${NanumSquareB}) format('woff');
}
`;

export default FontStyles;
