import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 200px;
  padding: 10px;
  background-color: green;
  `;

const ItemWrapper = styled.div`
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  background-color: violet;
  `;

const ItemText = styled.p`
  display: inline-block;  
  font-family: 'Patua One', cursive;
  font-size: 15px;
  `;

const ProfileComponent = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <ItemText>Seoul, Korea</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemText>soyoungpark.me@gmail.com</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemText>3457soso</ItemText>
      </ItemWrapper>
    </Wrapper>
  );
};

export default ProfileComponent;