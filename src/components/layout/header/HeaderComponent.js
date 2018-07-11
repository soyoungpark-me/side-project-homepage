import React from 'react';
import styled from 'styled-components';
import NavComponent from './NavComponent';

import imagepath from '../../../../public/avatar.jpeg';

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 210px;
  background-color: pink;
  `;

const ContentsWrapper = styled.div`
  display: block;
  position: relative;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  z-index: 2;
  `;

const AvatarImage = styled.div`
  display: block;
  position: absolute;
  width: 180px;
  height: 180px;
  left: 20px;
  bottom: 0;
  border-radius: 10px;
  background-image: url(${imagepath});
  background-size: contain;
  z-index: 2;
  `;

const NameWrapper = styled.p`
  position: absolute;
  bottom: 40px;
  left: 220px;
  font-family: 'Patua One', cursive;
  font-size: 30px;
  z-index: 2;
  `;

const CoverImage = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 190px;
  background-color: gray;
  z-index: 1;
  `;

const HeaderComponent = () => {
  return (
    <Wrapper>
      <CoverImage />
      <ContentsWrapper>
        <AvatarImage />
        <NameWrapper>
          Soyoung Park
        </NameWrapper>
        <NavComponent />
      </ContentsWrapper>
    </Wrapper>
  );
};

export default HeaderComponent;

