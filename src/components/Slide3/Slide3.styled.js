import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Slide3Div = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 3rem;
  position: relative;
  background: ${props => props.theme.body};
  background-image: url('/assets/slide3/slide3-bg.jpg');
  /* background color is the fallback for when the image is not available */
  background-color: ${props => props.theme.body};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  div#parent31 {
    display: flex;
    align-items: center;
    position: absolute;
    top: 4.5rem;
    left: 4.5rem;
    div#child31,
    div#child32,
    div#child33 {
      margin-right: .5rem;
      border-radius: .5rem;
    }
    div#child31 {
      width: .75rem;
      height: 5rem;
      background-color: ${colors.primary};
    }
    div#child32 {
      width: .4rem;
      height: 7rem;
      background-color: ${colors.primary};
    }
    div#child33 {
      width: .4rem;
      height: 3.5rem;
      background-color: ${colors.primary};
    }
    div#child34 {
      padding: .5rem 1rem;
      background-color: ${colors.secondary};
      h5 {
        text-transform: uppercase;
      }
    }
  }
  div#siblings {
    display: flex;
    position: absolute;
    top: 12.5rem;
    left: 4.5rem;
    div {
      width: 34%;
      margin-right: 2rem;
      div {
      width: 100%;
      margin-bottom: 2rem;
      word-wrap: break-word;
      p {
        padding: 0;
        margin: 0;
        color: ${colors.secondary};
      }
    }
    }
    
  }
`;
