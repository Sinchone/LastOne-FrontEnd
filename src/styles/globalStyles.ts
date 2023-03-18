import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }
  html {
    width: 100%;
  }
  body {
    width: 100%;
    font-family: 'Pretendard';
    margin: 0 auto;
   
  }
  ul, li, ol {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: #111;
  }
 
`;

export default GlobalStyle;
