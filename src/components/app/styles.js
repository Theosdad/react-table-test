import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box
}

html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body,
  html {
    margin: 0;
  }

  body {
    min-height: 100%;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 13px;
    line-height: 138%;
    font-weight: 500;
    font-style: normal;
    color: #474955;
  }

  td {
    border: 1px solid #E3E6EC;
  }

  a {
    text-decoration: none;
  }
`;
