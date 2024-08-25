import { createGlobalStyle } from 'styled-components';

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

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }

  ul, ol, li {
    list-style: none;
    padding-left: 0px;
  }

  button {
    color: inherit;
  }

  svg {
    display: block;
    fill: currentColor;
    pointer-events: none;
  }

  img {
    object-fit: contain;
  }

  input {
    border: none;
    outline: none;
  }

  textarea {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth; 
  }
}
`;

export default GlobalStyle;
