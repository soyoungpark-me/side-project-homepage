import React from 'react';
import styled from 'styled-components';
import LeftComponent from './nav/LeftComponent';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color:black;
`;

const BodyComponent = () => {
  return (
    <Wrapper>
      <LeftComponent />
      <div className="jumbotron">
          Hello there!
          <button type="button" className="btn btn-primary">
            Bootstrap Button!
          </button>
        </div>
    </Wrapper>
  );
};

export default BodyComponent;