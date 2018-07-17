import React from 'react'

import AboutComponent from './about/AboutComponent';
import PortfolioComponent from './portfolio/PortfolioComponent';

const WrapperComponent = () => {
  return (
    <div className="container-fluid p-0">
      <AboutComponent />
      <PortfolioComponent />
    </div>
  );
};

export default WrapperComponent;