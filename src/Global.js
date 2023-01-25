import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
`


export default GlobalStyle;