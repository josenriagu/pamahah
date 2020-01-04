import styled from 'styled-components';

import { colors } from './../../styles/variables';

export const Slide5Div = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 3rem;
  position: relative;
  background: ${props => props.theme.body};
  background-image: url('/assets/slide5/slide56-bg.png');
  /* background color is the fallback for when the image is not available */
  background-color: ${props => props.theme.body};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  div#loner51 {
    width: 50%;
    height: 8rem;
    position: absolute;
    top: 10rem;
    left: 15rem;
    border: .25rem solid ${colors.primary};
    border-left: none;
  }
  div#loner52 {
    width: 10rem;
    height: 20rem;
    position: absolute;
    top: 30.5rem;
    left: 15rem;
    border: .15rem solid ${props => props.theme.slide4Inverse};
    border-left: none;
  }
  div#loner53 {
    width: 15rem;
    height: calc(100% - (calc(10rem / 3) + 8rem));
    position: absolute;
    top: calc(10rem / 3);
    bottom: 8rem;
    left: 0rem;
    background: ${props => props.theme.body};
    background-image: url('/assets/slide5/slide5-1.jpg');
    background-color: ${props => props.theme.body};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 37.5% 0%;
    div#loner53overlay {
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.slide4};
    }
  }
  div#loner54 {
    width: 18.5rem;
    height: 18.5rem;
    position: absolute;
    top: 31.25rem;
    left: 5.5rem;
    background: ${props => props.theme.body};
    background-image: url('/assets/slide5/slide5-2.jpg');
    background-color: ${props => props.theme.body};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    div#loner54overlay {
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.slide4Inverse};
    }
  }
  div#loner55 {
    position: absolute;
    top: 12.3rem;
    left: 8.5rem;
    h5 {
      text-transform: uppercase;
      color: ${props => props.theme.texth5Alt};
      span {
        font-size: inherit;
        color: white;
      }
    }
  }
  div#statement {
    position: absolute;
    top: 22.5rem;
    left: 30rem;
    right: 4.5rem;
    padding: 0 .5rem;
    h6 {
      text-transform: uppercase;
      color: ${colors.primary};
    }
    p {
      font-size: 2rem;
      font-weight: bold;
      color: ${colors.secondary};
    }
  }
`;
