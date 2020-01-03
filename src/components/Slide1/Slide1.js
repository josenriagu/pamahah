import React from 'react';

import { Slide1Div } from './Slide1.styled';

const Slide1 = ({ theme }) => {
  return (
    <Slide1Div id="slide1">
      <div id="overlay"></div>
      <div id="parent1">
        <div id="child1">
        </div>
      </div>
      <div id="slide11"></div>
      <div id="slide12"></div>
      <div id="slide13"></div>
      <div id="brother"></div>
      <div id="sister"></div>
      <div id="loner11"></div>
      <div id={theme === 'light' ? "nameplate" : "nameplateAlt"}>
        <h4>Amahah <br />Promise Ndidi</h4>
        <p>Polymath | Farmer | Humanitarian <br /> Serial Entrepreneur</p>
      </div>
    </Slide1Div>
  );
}

export default Slide1;
