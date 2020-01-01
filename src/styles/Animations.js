import { keyframes } from 'styled-components';

export const boxShadowAlive = keyframes`
  0% {
    box-shadow: 0 0 1rem 0.1rem rgba(255, 255, 255, 1);
  }
  50% {
    box-shadow: 0 0 1rem 1rem rgba(255, 255, 255, 1);
  }
  100% {
    box-shadow: 0 0 1rem 0.1rem rgba(255, 255, 255, 1);
  }
`;

export const boxShadowAliveAlt = keyframes`
  0% {
    box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 1);
  }
  50% {
    box-shadow: 0 0 1rem 1rem rgba(0, 0, 0, 1);
  }
  100% {
    box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 1);
  }
`;