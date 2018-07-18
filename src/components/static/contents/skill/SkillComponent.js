import React from 'react';
import styled from 'styled-components';

import SkItemComponent from './SkItemComponent';

import './_skill.css';

const ColumnWrapper = styled.div`
  padding-right: 40px;
`;

const SkillTitle = styled.div`
  padding-bottom: 15px !important;
  color: #666666 !important;
`;

const RowWrapper = styled.div`
  margin-bottom: 15px;
`;

const TopLine = styled.div`
  width: 100%;
  border: 1px solid #DDDDDD;
  margin-top: 80px
  margin-bottom: 20px;
`;

const AboutIcon = styled.span`
  font-size: 1.3rem;
`;

const About = styled.p`
  display: inline-block;
  margin-left: 10px;
  color: #999999 !important;
`;

const AboutStrong = styled.strong`
  color: #666666 !important;
`;

const SkillComponent = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
      <div className="my-auto">
        <h1 className="mb-5">Skills</h1>      

        <RowWrapper className="row">
          <ColumnWrapper className="col-md-4">
            <SkillTitle className="subheading mb-3">Programming Languages</SkillTitle>
            <SkItemComponent name="java"       percent="80" color="#E14A34" wordmark="true" />
            <SkItemComponent name="javascript" percent="70" color="#EBDA5C" />
            <SkItemComponent name="c"          percent="60" color="#255A98" />
            <SkItemComponent name="php"        percent="50" color="#6680B3" upper="true" />
            <SkItemComponent name="python"     percent="30" color="#3F709F" />
          </ColumnWrapper>
          <ColumnWrapper className="col-md-4">
            <SkillTitle className="subheading mb-3">Frontend Languages &amp; Frameworks</SkillTitle>
            <SkItemComponent name="html5"      percent="70" color="#E14A34" wordmark="true" upper="true" />
            <SkItemComponent name="css3"       percent="70" color="#5A8EC2" wordmark="true" upper="true" />
            <SkItemComponent name="react"      percent="60" color="#6BDAF9" />
            <SkItemComponent name="android"    percent="50" color="#9FC347" />
          </ColumnWrapper>

          <ColumnWrapper className="col-md-4">
            <SkillTitle className="subheading mb-3">Backend Frameworks</SkillTitle>
            <SkItemComponent name="nodejs"     percent="80" color="#7ECD3C" />
            <SkItemComponent name="spring"     percent="60" color="#65BC4E" />
            <SkItemComponent name="rails"      percent="50" color="#A32C49" wordmark="true" />
            <SkItemComponent name="laravel"    percent="40" color="#FA4B3E" />
          </ColumnWrapper>
        </RowWrapper>

        <RowWrapper className="row">
          <ColumnWrapper className="col-md-4">
            <SkillTitle className="subheading mb-3">Databases</SkillTitle>
            <SkItemComponent name="mysql"      percent="80" color="#3B7087" wordmark="true" />
            <SkItemComponent name="mongodb"    percent="70" color="#4DA948" />
            <SkItemComponent name="redis"      percent="60" color="#D4282E" />
          </ColumnWrapper>
          <ColumnWrapper className="col-md-4">
            <SkillTitle className="subheading mb-3">Deployment Tools</SkillTitle>
            <SkItemComponent name="docker"     percent="40" color="#2B9AC3" wordmark="true" />
            <SkItemComponent name="jenkins"    percent="30" color="#D3353E" wordmark="true" />
          </ColumnWrapper>

          <ColumnWrapper className="col-md-4">
            <SkillTitle className="subheading mb-3">ETC</SkillTitle>
            <SkItemComponent name="git"        percent="70" color="#EF4B38" />
            <SkItemComponent name="amazonwebservices" percent="50" color="#F3A531" />
          </ColumnWrapper>
        </RowWrapper>

        <TopLine />
        
        <SkillTitle className="subheading mb-3">About Percentage</SkillTitle>
        <ul class="mb-0">
          <li>
            <AboutIcon><i class="em em-sunglasses"></i></AboutIcon>
            <About><AboutStrong>100% : </AboutStrong>관련 서적을 여러 권 보고, 프로젝트를 여러 번 진행해 나름대로 익숙해요.</About></li>
          <li>
            <AboutIcon><i class="em em-slightly_smiling_face"></i></AboutIcon>
            <About><AboutStrong>50% : </AboutStrong>관련 서적을 한 두 권 보면서 자세하게 공부해봤거나, 프로젝트를 진행했어요.</About></li>
          <li>
            <AboutIcon><i class="em em-thinking_face"></i></AboutIcon>
            <About><AboutStrong>10% : </AboutStrong>존재를 알고 (...) 예제를 따라해보면서 살짝 발만 담궈 봤어요.</About></li>
        </ul>
      </div>
    </section>
  );
};

export default SkillComponent;