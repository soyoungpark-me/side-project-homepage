import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  position: absolute;
  width: -webkit-calc(100% - 220px);
  width:    -moz-calc(100% - 220px);
  width:         calc(100% - 220px);
  margin-left: 220px;
  height: 45px;
  bottom: 20px;
  background-color: black;
  z-index: 1;
  `;

const Button = styled.div`
  display: inline-block;
  width: 100px;
  height: 100%;
  background-color: red;
  margin-right: 15px;
  font-family: 'Gothic A1', sans-serif;
  font-size: 20px;
  `;

const NavComponent = () => {
  return (
    <Wrapper>
      <Button>
        HOME
      </Button>
      <Button>
        PROJECT
      </Button>
    </Wrapper>
  );
};

export default NavComponent;