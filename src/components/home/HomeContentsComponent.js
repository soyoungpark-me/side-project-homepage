import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: -webkit-calc(100% - 224px);
  width:    -moz-calc(100% - 224px);
  width:         calc(100% - 224px);
  height: 100%;
  background-color: yellow;
  `;

const BioWrapper = styled.div`
  display: inline-block;
  width: 46%;
  height: 300px;
  background-color: orange;
  margin: 1.9%;
  `;

const CareerWrapper = styled.div`
  display: inline-block;
  width: 46%;
  height: 300px;
  background-color: orange;
  margin: 2%;
  `;

const HomeContentsComponent = () => {
  return (
    <Wrapper>
      <BioWrapper />
      <CareerWrapper />
    </Wrapper>
  );
};

export default HomeContentsComponent;