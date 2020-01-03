import React from 'react';

import { Slide3Div } from './Slide3.styled';
import { positions } from './positions';

const Slide3 = () => {
  return (
    <Slide3Div id="slide3">
      <div id="parent31">
        <div id="child31"></div>
        <div id="child32"></div>
        <div id="child33"></div>
        <div id="child34"><h5>positions</h5></div>
      </div>
      <div id="siblings">
        <div>
          {
            positions.map((position, idx) =>
              position.side === 'left' ?
                (
                  <div id={idx}>
                    <p><strong>{position.title}</strong></p>
                    <p>{position.company}</p>
                    <a href={`https://${position.link}`} rel="noopener noreferrer">
                      <p>{position.link}</p></a>
                    {position.link2 && <a href={`https://${position.link2}`} rel="noopener noreferrer">
                      <p>{position.link2}</p></a>}
                  </div>
                )
                :
                null
            )
          }
        </div>
        <div>
          {
            positions.map((position, idx) =>
              position.side === 'right' ?
                (
                  <div id={idx}>
                    <p><strong>{position.title}</strong></p>
                    <p>{position.company}</p>
                    <a href={`https://${position.link}`} rel="noopener noreferrer">
                      <p>{position.link}</p></a>
                  </div>
                )
                :
                null
            )
          }
        </div>
      </div>
    </Slide3Div>
  );
}

export default Slide3;
