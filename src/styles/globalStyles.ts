import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { customOverlayStyle } from '@components/PostDetail/Map/style';

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

    ${theme.media.tablet} {
      background-color: var(--color-gray1);
    }
   
  }
  
  h1 {
    ${theme.font.ko.h1}
  }

  h2 {
    ${theme.font.ko.h2}
  }

  h3 {
   ${theme.font.ko.h3}
  }

  button {
    ${theme.font.ko.button}
  }

  caption {
    ${theme.font.ko.caption}
  }

  ul, li, ol {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: #111;
  }

  :root {
    //Primary
    --color-primary-main: #000C4A;
    --color-primary-light: #333D6E;
    --color-primary-dark: #000834;
   
   //Secondary, Success
    --color-secondary-main: #00DB80;
    --color-secondary-light: #26FFA5;
    --color-secondary-dark: #00995A;
  
  //Tertiary
    --color-tertiary-main: #2A3642;
    --color-tertiary-light: #526476;
    --color-tertiary-dark: #3A4958;
  
  //Error, Alarm
    --color-error: #FF6969;
  
  //Warning
    --color-warning: #FFCC1C;
  
  //Gray, Scale
    --color-gray9: #414143;
    --color-gray8: #68696B;
    --color-gray7: #888A8F;
    --color-gray6: #ABACB2;
    --color-gray5: #C2C2C6;
    --color-gray4: #D6D6D8;
    --color-gray3: #E5E5E7;
    --color-gray2: #F4F4F7;
    --color-gray1: #F9F9FA;
  
  //Black
    --color-black: #070616;
  //White
    --color-white: #FEFEFE;
  //Yellow
    --color-yellow: #FAE407;  
  }
 
 ${customOverlayStyle}
`;

export default GlobalStyle;
