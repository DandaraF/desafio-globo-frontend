import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100%;
    font-size: 10px;
    font-family: 'Exo 2', sans-serif;
  }
  div{
    max-width: 414px;
  }

 
`;

export default GlobalStyle;
