import React from 'react';
import styled from 'styled-components';

import imagepath from '../../../../public/profile.jpg';

const Wrapper = styled.div`
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 100vh;
`;

const ImageWrapper = styled.img`
  max-width: 10rem;
  max-height: 10rem;
  border: 0.5rem solid rgba(255, 255, 255, 0.2);
`;

const NavButton = styled.a`
  
`;

const LeftComponent = () => {
  return (
    <Wrapper className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <ImageWrapper className="img-fluid img-profile rounded-circle mx-auto mb-2" src={imagepath} />
    </Wrapper>
  );
};

export default LeftComponent;