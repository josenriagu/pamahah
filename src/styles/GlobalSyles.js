// Create global styles using styled components to be injected into components.
import { createGlobalStyle } from 'styled-components';
import { screens, colors } from './variables';

const GlobalStyle = createGlobalStyle`
:root {
   font-size: 62.5%;
}
*,  *::after, *::before {
   box-sizing: border-box;
}
html {
   scroll-behavior: smooth;
}
body{
   background-color: ${(props) => props.theme.body};
   color: ${(props) => props.theme.text};
   text-align: left;
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Montserrat' , 'Raleway', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
h1 {
   font-size: calc(2.5*3.2rem);
   margin: 0;
   font-weight: 400;
   color: ${props => (props.h1 ? `${colors.gold}` : props.theme.text)};
   @media ${screens.mobile}{
      font-size: calc(2.0*3.2rem);
   }
}
h2 {
   font-size: 5rem;
   margin-top: 1rem;
   font-weight: 400;
   color: ${colors.gold}
}
h3 {
   font-size: calc(1.5 * 2.4rem);
   margin-bottom: 0;
   font-weight: 400;
   @media ${screens.mobile}{
      font-size: calc(0.8 * 2.4rem);
   }
}
h4 {
   font-size: 3rem;
   margin: 1.5rem 0 0 0;
   font-family: 'Playfair Display', sans-serif;
   color: ${(props) => props.theme.texth4};
}
h5 {
   font-size: 2.7rem;
   font-weight: bold;
   color: ${(props) => props.theme.texth5};
   margin: 0;
}
p, ul, li, span, label {
   font-size: 1.8rem;
}
label {
   font-weight: bold;
}
a{
   font-size: 1.6rem;
   color: ${(props) => props.theme.text};
   text-decoration: none;
   transition: color 1s;
   outline: none;
   /* this line disables the blue highlight when touched in mobile chromium browsers */
   -webkit-tap-highlight-color: transparent;
   :hover {
      color: ${colors.gold};
   }
}
button {
   cursor: pointer;
   font-size: 1.5rem;
   font-weight: bold;
   margin: 1.5rem 0;
   padding: 1.2rem;
   border-radius: .5rem;
   border: .1rem solid ${colors.gold};
   background-color: transparent;
   color: ${props => props.theme.text};
   font-family: 'Raleway', san-serif;
   font-weight: 400;
   transition: transform .5s;
   :hover {
      -webkit-transform: scale(1.05);-ms-transform: scale(1.05);
      transform: scale(1.05);
   }
   :focus {
      outline: none;
   }
}
input, textarea, select {
   font-size: 1.5rem;
   /* inject font family for textarea */
   font-family: 'Roboto', sans-serif;
   margin-top: 1rem;
   padding: 1rem;
   border-radius: .5rem;
   border: .1rem solid #e5e5e5;
   /* make hover transforms a bit slower */
   transition: transform 1s;
   :focus {
      outline: none;
      border: .1rem solid gold;
   }
   :hover {
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
      box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   }
}
`;

export default GlobalStyle;
