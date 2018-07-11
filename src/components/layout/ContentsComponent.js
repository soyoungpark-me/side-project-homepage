import React from 'react';
import styled from 'styled-components';
import HomeComponent from '../home/HomeComponent';

const Wrapper = styled.div`
  display: block;
  width: 1024px;
  height: 100px;
  margin: 0 auto;
  background-color: blue;
  `;

const ContentsComponent = () => {
  return (
    <Wrapper>
      <HomeComponent />
    </Wrapper>
  );
};

export default ContentsComponent;