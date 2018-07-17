import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'

const IconWrapper = styled.span`
  font-size: 1.35rem;
  color: #353832;
`;

const IconSpan = styled.span`
color: ${(props)=>props.fontColor};
  font-size: ${(props)=>props.fontSize};
`;

const DevItemComponent = (props) => {
  return (
    <li className="list-inline-item devicon">
      <a href={props.link} target="_blank" data-tip={props.name}>
      <span class="fa-stack fa-lg">
        <IconWrapper fontColor={props.fontColor}>
          <i className="fa fa-circle fa-stack-2x"></i>          
        </IconWrapper>
        <IconSpan fontSize={props.fontSize} fontColor={props.fontColor}>
          <i className={`fab fa-${props.name} fa-stack-1x`}></i>
        </IconSpan>
        </span>
      </a>
      <ReactTooltip className='extraClass' place="top" type="dark" effect="solid"/>
    </li>
  );
};

export default DevItemComponent;