import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "NanumGothic";
    line-height: 1.5;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  ul, li {
    list-style: none;
  }

  button {
    color: inherit;
  }

  svg {
    height: 100%;
    width: 100%;
    fill: currentColor;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth; 
  }
}
`;

export default GlobalStyle;
