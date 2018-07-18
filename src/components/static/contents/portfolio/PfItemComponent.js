import React from 'react';
import styled from 'styled-components';

import DevItemComopnent from '../../nav/DevItemComponent';

const Wrapper = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  border-bottom: 1px solid #C8C8C8;
`;

const TermWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
`

const TopLine = styled.div`
  width: 100%;
  border: 1px solid #DDDDDD;
  margin-bottom: 10px;
`

const Image = styled.img`
  border: 3px solid #DDDDDD;
  margin-bottom: 10px !important;
  background: src(${(props)=>props.title});
`

const ContentsWrapper = styled.div`
  padding-left: 50px;
`;

const Button = styled.a`
  width: 9rem;
  height: 3.3rem;
  margin-right: 13px;
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const WhiteButton = styled.h4`
  color: white;
  line-height: 2.5rem;
`;

const PfItemComponent = (props) => {
  return (
    <Wrapper className="row" id={"portfolio-"+props.title}>
      <div className="col-md-7">
        <a href="#">
          <Image className="img-fluid rounded mb-3 mb-md-0" src={props.image[0]} alt=""/>
          <Image className="img-fluid rounded mb-3 mb-md-0" src={props.image[1]} alt=""/>
        </a>
      </div>
      <ContentsWrapper className="col-md-5">
        <TermWrapper className="resume-date text-md-right">
          <p className="text-primary">{props.term}</p>
        </TermWrapper>
        <h2>{props.title}</h2>

        <TopLine />        
        <p>{props.description}</p>        
        <h3>role</h3>       
        <p>{props.role}</p>

        <h3>stack</h3>
        {props.stack}

        <ButtonWrapper>
          <Button className={"btn " + (props.link == "" ? 'btn-secondary disabled' : 'btn-danger')} target="_blank" href={props.link}>
            <WhiteButton><i class="fab fa-chrome"></i> WEB</WhiteButton>
          </Button>
          <Button className={"btn " + (props.demo == "" ? 'btn-secondary disabled' : 'btn-info')} target="_blank" href={props.demo}>
            <WhiteButton><i class="fas fa-video"></i> DEMO</WhiteButton>
          </Button>    
          <Button className={"btn " + (props.git == "" ? 'btn-secondary disabled' : 'btn-info')} target="_blank" href={props.git}>
            <WhiteButton><i class="fab fa-github"></i> GIT</WhiteButton>
          </Button>   
        </ButtonWrapper>      
      </ContentsWrapper>
    </Wrapper>
  );
};

export default PfItemComponent;