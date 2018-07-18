import React from 'react'

import AboutComponent from './about/AboutComponent';
import ExperienceComponent from './experience/ExperienceComponent';
import PortfolioComponent from './portfolio/PortfolioComponent';
import SkillComponent from './skill/SkillComponent';

const WrapperComponent = () => {
  return (
    <div className="container-fluid p-0">
      <AboutComponent />
      <ExperienceComponent />
      <PortfolioComponent />
      <SkillComponent />
    </div>
  );
};

export default WrapperComponent;