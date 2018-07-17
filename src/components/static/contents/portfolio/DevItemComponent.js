import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'

const IconWrapper = styled.span`
  color: #EAEAEA;
  font-size: 2rem;
`;

const IconSpan = styled.span`
  display: inline-block;
  position: absolute;
  top: ${(props)=>props.top};
  left: ${(props)=>props.left};
  font-size: ${(props)=>props.fontSize};
`;

const DevItemComponent = (props) => {
  return (
    <li className="list-inline-item devicon">
      <a href={props.link} target="_blank" data-tip={props.name}>
      <span className="fa-stack fa-2x">
        <IconWrapper>
          <i className="fa fa-circle fa-stack-2x"></i>          
        </IconWrapper>
        <IconSpan fontSize={props.fontSize} top={props.top} left={props.left}>
          <i className={`devicon-${props.name}-plain colored`}></i>
        </IconSpan>
        </span>
      </a>
      <ReactTooltip className='extraClass' place="top" type="dark" effect="solid"/>
    </li>
  );
};

export default DevItemComponent;