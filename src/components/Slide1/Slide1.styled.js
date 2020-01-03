import styled from 'styled-components';

import { colors } from '../../styles/variables';
import { boxShadowAlive, boxShadowAliveAlt } from '../../styles/Animations';

export const Slide1Div = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: ${props => props.theme.body};
  background-image: url('/assets/slide1/slide1-bg.jpg');
  /* background color is the fallback for when the image is not available */
  background-color: ${props => props.theme.body};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  div {
    border-radius: 50%;
  }
  div#overlay {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background: ${props => props.theme.bgColor};
  }
  div#parent1 {
    width: 9rem;
    height: 9rem;
    top: 5%;
    left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: ${colors.secondaryRGB};
    div#child1 {
      width: 4.5rem;
      height: 4.5rem;
      background: ${colors.primary};
    }
  }
  div#slide11 {
    width: 45rem;
    height: 45rem;
    top: -10rem;
    right: -10rem;
    position: absolute;
    opacity: .6;
    background: ${props => props.theme.body};
    background-image: url('/assets/slide1/slide1-1.jpg');
    background-color: ${props => props.theme.body};
    background-size: auto;
    background-position: 55% -5%;
    background-repeat: no-repeat;
    /* changes the background image to somewhat grayscale */
    background-blend-mode: luminosity;
  }
  div#slide12 {
    width: 50rem;
    height: 50rem;
    bottom: -15rem;
    left: -25rem;
    position: absolute;
    opacity: .4;
    z-index: 2; 
    background: ${props => props.theme.body};
    background-image: url('/assets/slide1/slide1-2.jpg');
    background-color: ${props => props.theme.body};
    background-size: contain;
    background-position: 85% 0%;
  }
  div#slide13 {
    width: 85rem;
    height: 85rem;
    bottom: -35rem;
    left: -20rem;
    position: absolute;
    opacity: .8;
    background: ${props => props.theme.body};
    background-image: url('/assets/slide1/slide1-3.jpg');
    background-color: ${props => props.theme.body};
    background-size: contain;
    background-position: 100% 0%;
  }
  div#brother {
    width: 9rem;
    height: 9rem;
    right: 3%;
    bottom: 10%;
    position: absolute;
    background: ${colors.secondary};
  }
  div#sister {
    width: 7rem;
    height: 7rem;
    right: 8%;
    bottom: calc((10% + 4.5rem ) - 3.5rem);
    position: absolute;
    background: ${colors.primary};
  }
  div#loner11{
    width: 30rem;
    height: 30rem;
    right: 22%;
    top: 22%;
    position: absolute;
    background: ${colors.secondaryRGB};
  }
  div#nameplate,
  div#nameplateAlt{
    width: 25rem;
    height: 25rem;
    position: absolute;
    z-index: 3;
    bottom: -7.5rem;
    left: 7.5rem;
    background: ${props => props.theme.body};
    text-align: center;
  }
  div#nameplate {
    animation: ${boxShadowAliveAlt} 4s infinite ease-in-out;
  }
  div#nameplateAlt{
    animation: ${boxShadowAlive} 4s infinite ease-in-out;
  }
  h4, p {
    text-transform: uppercase;
    margin-top: 2.5rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.primary};
  }
`;