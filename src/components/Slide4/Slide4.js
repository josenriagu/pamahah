import React from 'react';

import { Slide4Div } from './Slide4.styled';

const Slide4 = () => {
  return (
    <Slide4Div id="slide4">
      <div id="overlay"></div>
      <div id="parent41">
        <div id="child41"></div>
        <div id="child42"></div>
      </div>
      <div id="loner41"></div>
      <div id="loner42"></div>
      <div id="parent42">
        <div id="child43"></div>
        <div id="child44">
          <h2>Adding</h2>
          <h2><strong>Value</strong></h2>
        </div>
      </div>
    </Slide4Div>
  );
}

export default Slide4;
