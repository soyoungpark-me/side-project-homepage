import React from 'react';
import styled from 'styled-components';
import HeaderComponent from './header/HeaderComponent';
import ContentsComponent from './ContentsComponent';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const BodyComponent = () => {
  return (
    <Wrapper>
      <HeaderComponent />
      <ContentsComponent />
    </Wrapper>
  );
};

export default BodyComponent;