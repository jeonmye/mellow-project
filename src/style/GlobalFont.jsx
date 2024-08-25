import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import helveticaNow from '../assets/fonts/HelveticaNowText-Black.ttf';

const GlobalFont = createGlobalStyle`    
     @font-face {
        font-family: "helveticaNow";
        src:  url('../assets/fonts/HelveticaNowText-Black.ttf') format('truetype'); 
        font-weight: normal;
    }
`;

export default GlobalFont;
