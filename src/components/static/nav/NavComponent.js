import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'

import AvatarComponent from './AvatarComponent';
import NavItemComponent from './NavItemComponent';
import DevItemComponent from './DevItemComponent';

const NoPadding = styled.a`
  padding: 0 !important;
`;

const HomeTitleIcon = styled.span`
  font-size: 2rem;
  line-height: 1;
  margin-top: 3px;
  color: white;
`;

const StackPWrapper = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const NavComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-setting fixed-top" id="sideNav">
      <Link className="navbar-brand js-scroll-trigger" to="page-top" spy={true} smooth={true} duration={500} >
        <HomeTitleIcon className="d-block d-lg-none"><ion-icon name="home"></ion-icon></HomeTitleIcon>
        <span className="d-none d-lg-block">
          <AvatarComponent />          
        </span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <NavItemComponent name="about" />
          <NavItemComponent name="experience" />
          <NavItemComponent name="portfolio" />
          <NavItemComponent name="skills" />
          <div className="top-line"></div>
          <NavItemComponent name="logs" />
          <NavItemComponent name="wiki" />          
        </ul>
      </div>
      <div className="stack-icon-wrapper">
      <StackPWrapper>Developed With</StackPWrapper>
          <DevItemComponent name="react" fontColor="#37D8FD" fontSize="1.7rem" />          
          <DevItemComponent name="node-js" fontColor="#8EC35C" fontSize="1.8rem" />
          <DevItemComponent name="docker" fontColor="#359FD8" fontSize="1.5rem" />
          <DevItemComponent name="jenkins" fontColor="#FF7272" fontSize="1.7rem" />
          <DevItemComponent name="aws" fontColor="#F9BC35" fontSize="1.5rem" />
      </div>
    </nav>
  );
};

export default NavComponent;