import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'

const Wrapper = styled.div`
  padding-top: 60px;
  border-bottom: 1px solid #C8C8C8;
`;

const Image = styled.img`
  width: 70%;
  height: auto;
  margin-top: 40px;
  margin-right: 10px;
`;

const Strong = styled.strong`
  margin-left: 10px;
`;

const ExItemComponent = (props) => {
  return (
    <Wrapper>
      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">{props.title}</h3>
          <div class="subheading mb-3">{props.company}</div>
          <p>{props.description}</p>
          <p>{props.role}</p>
          <Link href={props.link} to={props.link} spy={true} smooth={true} duration={500} >
            <p><i class="em em-point_right"></i>
              <Strong className={(props.link == null) ? 'disable-link':''}>프로젝트 보러 가기</Strong>
            </p>
          </Link>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{props.term}</span>
          <Image src={props.logo} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ExItemComponent;