import React from 'react'

import AboutComponent from './about/AboutComponent';
import ExperienceComponent from './experience/ExperienceComponent';
import PortfolioComponent from './portfolio/PortfolioComponent';

const WrapperComponent = () => {
  return (
    <div className="container-fluid p-0">
      <AboutComponent />
      <ExperienceComponent />
      <PortfolioComponent />
    </div>
  );
};

export default WrapperComponent;