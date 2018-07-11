import React from 'react';
import styled from 'styled-components';
import ProfileComponent from './ProfileComponent';
import HomeContentsComponent from './HomeContentsComponent';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  `;

const HomeComponent = () => {
  return (
    <Wrapper>
      <ProfileComponent />
      <HomeContentsComponent />
    </Wrapper>
  );
};

export default HomeComponent;