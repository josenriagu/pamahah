import React from 'react';

import { Slide2Div } from './Slide2.styled';

const Slide2 = ({ theme }) => {
  return (
    <Slide2Div id="slide2">
      <div id={theme === 'light' ? "parent21" : "parent21Alt"}>
        <div id="child21">
          <h5>Introduction</h5>
        </div>
      </div>
      <div id={theme === 'light' ? "parent22" : "parent22Alt"}>
        <div id="child22"></div>
      </div>
      <div id="intro21">
        <p><strong>PROMISE AMAHAH</strong> is a Strategy & Innovation expert, Young Farmer, Agribusiness Specialist, Youth activist, Humanitarian, Trainer & Executive Coach, Environmentalist & Serial Entrepreneur. His personal mantra is 'Discipline-Drive-Determination-Direction-Delivery' 5D. </p>
        <p>He studied Geology at the prestigious University of Nigeria, Nsukka.</p>
      </div>
      <div id="intro22">
        <p>His wealth of experience comes from<br />working in various capacities in Public,<br />Private and Non-Governmental Institutions<br />all at International, Federal, State and Local Government level.</p>
        <p>Promise has served as Strategy consultant for National Program for Food Security (NPFS), Iyatu Farms, Zaidan Group, Magma Group, Latins Security Ltd, National Oil Spill Detection and Response Agency (NOSDRA), Federal Ministry of Environment, Intrazones Group Ltd, Delta State Local Government Commission among others.</p>
        <p>He was a west African delegate to the UN World Youth Alliance 1st African Emerging Leaders Conference in Nairobi, Kenya (2010) and the current President of Nigerian Young Farmers Network. </p>
      </div>
    </Slide2Div>
  );
}

export default Slide2;
