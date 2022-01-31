import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    width: 100%;
    font-size: 10px;
    font-family: 'Exo 2', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
