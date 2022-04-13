import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
