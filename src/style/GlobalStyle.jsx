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
    font-family: 'helveticaNow';
  }

  body {
    font-family: 'helveticaNow';
  }
`;

export default GlobalStyle;
