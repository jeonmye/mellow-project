import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const styled = { createGlobalStyle };
const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'SDGothic', serif;
  }

  body {
    font-family: 'HelveticaNow';
    src: url('..assets/font/HelveticaNowText-black') format('truetype');
    font-weight: normal;
  }
`;

export default GlobalStyle;
