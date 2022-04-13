import { createGlobalStyle } from "styled-components";
// @ts-ignore
import TekoTTF from "./fonts/Teko/Teko-Light.ttf";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Teko';
    src: url(${TekoTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
