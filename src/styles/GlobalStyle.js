import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  :root {
    --background-color: #000;
  }


  * {
    padding:0;
    margin:0;
    box-sizing:border-box;
    list-style: none;
    text-decoration:none;
  }
  body {
    background-color: var(--background-color)
  }
`;

export default GlobalStyled;
