import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Slide4Div = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 3rem;
  position: relative;
  background: ${props => props.theme.body};
  background-image: url('/assets/slide4/slide4-bg.jpg');
  /* background color is the fallback for when the image is not available */
  background-color: ${props => props.theme.body};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  div#overlay {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background: ${colors.bgTint};
  }
  div#parent41 {
    position: absolute;
    width: 100%;
    top: 10rem;
    left: 38%;
    transform: rotate(-73deg);
    div#child41 {
      width: inherit;
      height: 8.5rem;
      margin-bottom: .8rem;
      background-color: rgba(255, 255, 255, .75);
    }
    div#child42 {
      width: inherit;
      height: 38rem;
      background-color: ${props => props.theme.slide4Alt};
    }
  }
  div#loner41 {
    width: 100%;
    height: 25rem;
    position: absolute;
    top: -10.7rem;
    left: 10rem;
    background-color: ${props => props.theme.slide4};
    transform: rotate(10deg);
    box-shadow: 0 0 1rem 0.3rem rgba(0, 0, 0, .3);
  }
  div#loner42 {
    width: 105%;
    height: 15rem;
    position: absolute;
    top: -6rem;
    left: -1rem;
    background-color: white;
    transform: rotate(-5deg);
    box-shadow: 0 0 1rem 0.3rem rgba(0, 0, 0, .3);
  }
  div#parent42 {
    position: absolute;
    bottom: 7.5rem;
    right: 4.5rem;
    display: flex;
    vertical-align: baseline;
    div#child43 {
      width: 1.8rem;
      height: 12.5rem;
      margin-right: 1rem;
      background-color: ${props => props.theme.body};
    }
    div#child44 {
      h2 {
        margin: 0 !important;
        text-transform: uppercase;
        color: white;
      }
    }
  }
`;