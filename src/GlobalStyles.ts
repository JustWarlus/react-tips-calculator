import { createGlobalStyle } from "styled-components";
import shape from "./assets/icons/shape.svg";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background: top left no-repeat url(${shape}) #EAF2F2;
        font-family: 'Raleway', sans-serif;
    }
`;
