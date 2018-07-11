import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: 224px;
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
  font-family: 'Roboto', sans-serif;
  font-weight: light;
  font-size: 13px;
  `;

const ItemIcon = styled.span`
  display: inline-block;
  font-size: 14px;
  `;

const ProfileComponent = () => {
  return (
    <Wrapper>    
      <ItemWrapper>
        <ItemIcon><ion-icon name="pin"></ion-icon></ItemIcon>
        <ItemText>Seoul, Korea</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemIcon><ion-icon name="school"></ion-icon></ItemIcon>
        <ItemText>SoftWare Engineering, Konkuk Univ.</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemIcon><ion-icon name="mail"></ion-icon></ItemIcon>
        <ItemText>soyoungpark.me@gmail.com</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemIcon><ion-icon name="logo-github"></ion-icon></ItemIcon>
        <ItemText>3457soso</ItemText>
      </ItemWrapper>
      <ItemWrapper>
        <ItemIcon><ion-icon name="logo-facebook"></ion-icon></ItemIcon>
        <ItemText>who_sy</ItemText>
      </ItemWrapper>
    </Wrapper>
  );
};

export default ProfileComponent;