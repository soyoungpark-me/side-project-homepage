import React from 'react';
import styled from 'styled-components';

import springLogoPath from '../../../../../public/images/sk-spring.png';
import jenkinsLogoPath from '../../../../../public/images/sk-jenkins.png';
import pythonsLogoPath from '../../../../../public/images/sk-python.png';

const Wrapper = styled.div`
  position: relative;
`;

const LogoIcon = styled.span`
  position: absolute;
  display: inline-block;
  top: -5px;
  font-size: 2.9rem;
`;

const LogoImage = styled.img`
  width: 2.9rem;
  margin-bottom: 12px;
`;

const Progress = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  padding-left: 4rem;
`
const ProgressBar = styled.div`
  width: ${(props) => props.percent}%;
  background: ${(props) => props.color};
`;

const ProgressIcon = styled.i`
  border-color: ${(props) => props.color};
  color: ${(props) => props.color};
`;

const SkillItemComponent = (props) => {
  return (
    <Wrapper>
      <LogoIcon>
        { (props.name) == "spring"
          ? <LogoImage src={springLogoPath} /> : ""
        }
        { (props.name) == "jenkins"
          ? <LogoImage src={jenkinsLogoPath} /> : ""
        }
        { (props.name) == "python"
          ? <LogoImage src={pythonsLogoPath} /> : ""
        }
        { (props.name != "spring" && props.name != "jenkins" && props.name != "python")
          ? <i className={`devicon-${props.name}-plain${(props.wordmark == "true") ? "-wordmark" : ""} colored`}></i>
          : ""
        }
      </LogoIcon>
      <Progress>
        <p className={`progressbar-title ${(props.upper == "true") ? " upper-title" : ""}`}>
          {(props.name == "amazonwebservices") ? "AWS" : props.name}</p>
        <div className="progress">
          <ProgressBar className="level progress-bar" percent={props.percent} color={props.color}>
              <ProgressIcon className="progress-icon" color={props.color}>
                <i className="fas fa-check"></i>
              </ProgressIcon>
              <div className="progress-value">{props.percent}%</div>
          </ProgressBar>
        </div> 
      </Progress>
    </Wrapper>
  );
};

export default SkillItemComponent;
