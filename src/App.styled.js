import styled from 'styled-components';

import { screens, sizes } from './styles/variables';

export const AppDiv = styled.div`
  width: ${sizes.desktop};
  margin: 0 auto;
  
  /* the block of code below makes the site mobile responsive. However, you will have to define media queries to control how each component appears on mobile devices */

  /* @media ${screens.mobile} {
    width: ${sizes.mobileRes};
    margin: .5rem auto;
  } */
  div#slide1,
  div#slide2,
  div#slide3,
  div#slide4,
  div#slide5,
  div#slide6 {
    :hover {
      transition: box-shadow 2s;
      box-shadow: 0 0 1rem 0.3rem rgba(167, 167, 167, 1);
    }
  }
`;