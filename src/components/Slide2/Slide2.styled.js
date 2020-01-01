import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Slide2Div = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 3rem;
  position: relative;
  background: ${props => props.theme.body};
  background-image: url('/assets/slide2/slide2-bg.jpg');
  /* background color is the fallback for when the image is not available */
  background-color: ${props => props.theme.body};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  div {
    border-radius: 50%;
  }
  p {
    color: ${colors.secondary};
    font-weight: 500;
  }
  div#parent21,
  div#parent21Alt,
  div#parent22,
  div#parent22Alt {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: ${props => props.theme.body};
  }
  div#parent21,
  div#parent21Alt {
    width: 38rem;
    height: 38rem;
    top: -25%;
    left: 12.5%;
    div#child21 {
      width: 35.5rem;
      height: 35.5rem;
      background: ${colors.secondary};
      text-align: center;
      h5 {
        text-transform: uppercase;
        margin-top: 20rem;
      }
    }
  }
  div#parent21 {
    box-shadow: 0 0 1rem 0.3rem rgba(0, 0, 0, .5);
  }
  div#parent21Alt {
    box-shadow: 0 0 1rem 0.3rem rgba(255, 255, 255, .5);
  }
  div#parent22,
  div#parent22Alt {
    width: 28rem;
    height: 28rem;
    top: 12%;
    left: 2%;
    div#child22 {
      width: 25.5rem;
      height: 25.5rem;
      background: green;
      background: ${colors.secondary};
      background-image: url('/assets/slide1/slide1-3.jpg');
      background-color: ${props => props.theme.body};
      background-size: cover;
    }
  }
  div#parent22 {
    box-shadow: 0 0 1rem 0.3rem rgba(0, 0, 0, .5);
  }
  div#parent22Alt {
    box-shadow: 0 0 1rem 0.3rem rgba(255, 255, 255, .5);
  }
  div#intro21,
  div#intro22 {
    width: 45%;
    border-radius: 0;
    position: absolute;
    padding: 1rem;
    text-align: justify;
  }
  div#intro21 {
    bottom: 4rem;
    left: 4.5rem;
  }
  div#intro22 {
    bottom: 14rem;
    right: 4.5rem;
    p:nth-of-type(1){
      text-align: right;
    }
  }
`;