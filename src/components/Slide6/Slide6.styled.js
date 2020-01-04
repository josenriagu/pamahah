import styled from 'styled-components';

import { colors } from './../../styles/variables';

export const Slide6Div = styled.div`
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
  div#loner61 {
    width: 10rem;
    height: 20rem;
    position: absolute;
    top: 30.5rem;
    left: 15rem;
    border: .15rem solid ${props => props.theme.slide4Inverse};
    border-left: none;
  }
  div#loner62 {
    width: 15rem;
    height: calc(100% - (calc(10rem / 3) + 8rem));
    position: absolute;
    top: calc(10rem / 3);
    bottom: 8rem;
    left: 0rem;
    background: ${props => props.theme.body};
    background-image: url('/assets/slide6/slide6-1.jpg');
    background-color: ${props => props.theme.body};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    div#loner62overlay {
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.slide4};
    }
  }
  div#loner63 {
    width: 18.5rem;
    height: 18.5rem;
    position: absolute;
    top: 31.25rem;
    left: 5.5rem;
    background: ${props => props.theme.body};
    background-image: url('/assets/slide6/slide6-2.jpg');
    background-color: ${props => props.theme.body};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 10%;
    div#loner63overlay {
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.slide4Inverse};
    }
  }
  div#loner64 {
    position: absolute;
    top: 10rem;
    right: 15rem;
    padding: 2.15rem 1rem;
    border: .25rem solid ${colors.primary};
    h5 {
      text-transform: uppercase;
      color: ${props => props.theme.texth5Alt};
    }
  }
  div#statement {
    position: absolute;
    top: 22.5rem;
    left: 30rem;
    right: 4.5rem;
    /* padding: 0 .2rem; */
    
    h6 {
      text-transform: uppercase;
      color: ${colors.primary};
      text-align: center;
    }
    p {
      font-size: 1.8rem;
      font-weight: bold;
      color: ${colors.secondary};
    }
    div#siblings61 {
      display: flex;
      justify-content: space-between;
      /* border: .1rem solid green; */
      div#brother61,
      div#sister61 {
      width: 47%;
      height: 2rem;
      }
      div#brother61 {
        text-align: right;
      }
    }
  }
`;
