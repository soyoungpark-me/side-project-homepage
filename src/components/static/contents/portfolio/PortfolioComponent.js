import React from 'react';
import PfItemComponent from './PfItemComponent';
import DevItemComponent from './DevItemComponent';

import './_portfolio.css';

import bewe1ImagePath from '../../../../../public/images/pf-bewe-1.jpg';
import bewe2ImagePath from '../../../../../public/images/pf-bewe-2.png';
import gofounder1ImagePath from '../../../../../public/images/pf-gofounder-1.jpg';
import gofounder2ImagePath from '../../../../../public/images/pf-gofounder-2.png';
import studymate1ImagePath from '../../../../../public/images/pf-studymate.jpg';
import studymate2ImagePath from '../../../../../public/images/pf-studymate-2.png';
import edgestudy1ImagePath from '../../../../../public/images/pf-edgestudy-1.png';
import edgestudy2ImagePath from '../../../../../public/images/pf-edgestudy-2.png';

const beweStack = [  
  <DevItemComponent name="nodejs"            fontSize="3rem"   left="0.5rem"  top="0.2rem"/>,
  <DevItemComponent name="react"             fontSize="3rem"   left="0.5rem"  top="0.2rem"/>,
  <DevItemComponent name="mysql"             fontSize="2.4rem" left="0.9rem"  top="0.2rem"/>,
  <DevItemComponent name="redis"             fontSize="2.8rem" left="0.6rem"  top="0.15rem"/>,
  <DevItemComponent name="amazonwebservices" fontSize="3rem"   left="0.35rem" top="0.2rem"/>,
  <DevItemComponent name="gitlab"            fontSize="2.8rem" left="0.6rem"  top="0.2rem"/>
];

const gofounderStack = [
  <DevItemComponent name="ruby"              fontSize="2.5rem" left="0.5rem"  top="0.1rem"/>,
  <DevItemComponent name="rails"             fontSize="2.7rem" left="0.5rem"  top="0.1rem"/>,
  <DevItemComponent name="mysql"             fontSize="2.4rem" left="0.9rem"  top="0.2rem"/>,
  <DevItemComponent name="bootstrap"         fontSize="2.4rem" left="0.9rem"  top="0.1rem"/>,
  <DevItemComponent name="bitbucket"         fontSize="2.7rem" left="0.65rem" top="0.2rem"/>,
  <DevItemComponent name="amazonwebservices" fontSize="3rem"   left="0.35rem" top="0.2rem"/>
];

const studymateStack = [
  <DevItemComponent name="php"               fontSize="3rem"   left="0.5rem"  top="0.1rem"/>,
  <DevItemComponent name="laravel"           fontSize="2.3rem" left="0.85rem" top="0.1rem"/>,
  <DevItemComponent name="mysql"             fontSize="2.4rem" left="0.9rem"  top="0.2rem"/>,
  <DevItemComponent name="bootstrap"         fontSize="2.4rem" left="0.9rem"  top="0.1rem"/>,
  <DevItemComponent name="amazonwebservices" fontSize="3rem"   left="0.35rem" top="0.2rem"/>
];

const edgestudyStack = [  
  <DevItemComponent name="ruby"              fontSize="2.5rem" left="0.5rem"  top="0.1rem"/>,
  <DevItemComponent name="rails"             fontSize="2.7rem" left="0.5rem"  top="0.1rem"/>,
  <DevItemComponent name="mysql"             fontSize="2.4rem" left="0.9rem"  top="0.2rem"/>,
  <DevItemComponent name="bootstrap"         fontSize="2.4rem" left="0.9rem"  top="0.1rem"/>,
  <DevItemComponent name="heroku"            fontSize="2.7rem" left="0.7rem"  top="0.1rem"/>
];

const PortfolioComponent = () => {
  return (
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio">
      <div class="my-auto">
        <h1 class="mb-5">portfolio</h1>
        
        <PfItemComponent 
          title="bewe"
          term="January 2018 - February 2018"
          description="스마일게이트에서 진행한 서버개발캠프 3기에서 진행한 팀 프로젝트로, 저를 포함해 3명이 팀을 이뤄 개발했습니다.
            스마일게이트의 게임 플랫폼인 스토브를 모티브로 기획했으며, 크게 게임을 업로드, 관리하고 구매할 수 있는 게임 CMS 기능과,
            구매한 게임을 다운로드해 타인과 방을 생성해 게임을 할 수 있는 매칭 기능, 
            친구를 맺고 메시지를 주고받는 소셜 기능과 랭킹 기능으로 나눌 수 있습니다."
          role="팀원 모두 프로젝트를 통해 프론트엔드와 백엔드에 대해 고루 경험해보고 지식을 쌓는 것을 목표로 했기 때문에,
            위에서 언급한 세 가지 기능을 하나씩 분담해 클라이언트와 서버를 모두 개발했습니다.
            저는 socket.io와 롱 폴링, 레디스 등을 이용해 마지막으로 기술한 소셜 기능과 랭킹 기능 개발을 담당했습니다.
            마지막으로 프론트엔드 디자인의 통일성을 위해, 모든 개발이 끝난 후 팀원들이 개발한 부분까지 모두 포함해
            css 마크업을 맡아 프로젝트를 최종적으로 마무리했습니다."
          image={[bewe1ImagePath, bewe2ImagePath]}
          stack={beweStack}
          link="http://bewe.soyoungpark.me"
          demo="https://drive.google.com/file/d/12hDYtCrYzikdYCg3eWgbNp3v3gGkKnMq/view?usp=sharing"
          git="https://github.com/3457soso/project_bewe" />        

        <PfItemComponent 
          title="gofounder"
          term="August 2017 - December 2017"
          description="고파운더는 ‘스타트업을 위한 스타트업’으로, 창업가에게 필요한 것들을 연결해주는 매칭 플랫폼입니다.
            스타트업을 할 때 가장 처음에 마주치게 되는 문제는 좋은 동료를 구하는 것입니다. 이를 위해 자신의 프로젝트를
            소개해 팀원을 구하는 기능인 ‘고프로젝트’, 자신의 프로필을 업로드하는 ‘고피플’, 스타트업에 관심이 많은 사람들을
            위한 ‘고커뮤니티’가 개발되어 있습니다. 가장 특징적이고 주된 기능은 코파운더를 찾기 위해 프로젝트를 업로드하고,
            관심이 있는 사람들끼리 연락을 주고 받아 팀 빌딩을 하는 데 도움을 주는 것입니다."
          role="저는 주된 큰 기능들이 모두 개발된 후에 투입되었기 때문에, 직접적으로 맡아서 개발한 기능은 없습니다.
            하지만 기존에 개발된 기능들에 추가 기능을 붙이는 일을 맡았습니다.
            고프로젝트에 지원하기 기능을 붙이거나, 회원 전체에게 메일을 전송하는 기능을 추가하거나, 고커뮤니티에 사진 업
            로드 기능을 붙이는 등, 개발 단계에서 구현하지 못했던 추가적인 기획 사항들을 맡아 반 년간 개발했습니다.
            이 때 스타트업의 특성상, 기획에도 참여하게 되어 다양한 업무를 경험할 수 있었습니다."
          image={[gofounder1ImagePath, gofounder2ImagePath]}
          stack={gofounderStack}
          link="https://www.gofounder.net/"
          demo=""
          git="" />

        <PfItemComponent 
          title="studymate"
          term="July 2017 - October 2017"
          description="요즘 대학생, 직장인, 취준생 등 대상을 막론하고 유행하고 있는 공부 방식인 
            ‘스터디’를 더 편하게 진행할 수 있도록 개발된 웹-앱 플랫폼입니다. 스터디 인원을 모으는 서비스는 많지만, 
            스터디가 개설된 후의 관리가 더 중요하다고 생각해 개발하게 되었습니다.
            하단에서 소개해드린 edgestudy를 좀 더 확장시킨 결과물입니다.
            스터디 개설, 찾기, 가입부터 스터디부터 일정과 과제, 질문 게시판을 만들어 관리할 수 있도록 했습니다."
          role="이 프로젝트에서 저는 웹 프론트 엔드와 안드로이드 UX/UI 개발, 백엔드 API 개발을 맡았습니다. 
            같이 프로젝트를 진행한 동기는 네이티브 안드로이드 기능 개발을 맡아 역할을 분배했습니다.
            클라이언트 플랫폼에 구애받지 않는 확장성 있는 개발을 위해 API를 만들어 데이터를 JSON으로 주고 받을 수 있도록 개발했습니다.
            또, 처음으로 EC2를 띄워 apache 서버를 통해 배포했고, 이에 도메인을 하나 구입해 연동했습니다."
          image={[studymate1ImagePath, studymate2ImagePath]}
          stack={studymateStack}
          link="http://studymate.soyoungpark.me"
          demo="https://drive.google.com/file/d/1NcZw6EUkIEYO6WLRow7QYHAuTPKkZYH2/view?usp=sharing"
          git="https://github.com/3457soso/project_studymate" />
        
        <PfItemComponent 
          title="edgestudy"
          term="June 2017 - July 2017"
          description="저는 EDGE라는 과 내의 게임 개발 동아리에서 활동하고 있는데, 엣지스터디는 동아리 내 스터디 관리 플랫폼입니다.
            동아리에서 쓰는 페이지이다 보니 동아리원들의 의견에 따라 필요하다고 생각되는 기능만 추가했습니다.
            공지사항, 과제 관리 게시판, 질문 게시판으로 이루어져 있습니다.
            과제 관리 게시판에서는 해당 글을 작성한 사람과 스터디장만 과제물을 확인할 수 있고, 스터디장은 과제물을 체크할
            수 있습니다. 또, AWS S3와 연동되어 이미지나 파일을 업로드 할 수 있습니다."
          role="과 동아리이다 보니 인원이 50명 정도로 많지 않았고, 그 중 웹 개발을 해 본 동아리원이 많지 않아서
            휴학을 하게 된 저 혼자 개발하게 되었습니다. 스터디원들이 24시간 쓰고 싶을 때 쓸 수 있게 언제나 서버를 개방한 상태로 유지해야 했는데,
            당시 AWS EC2에 Ruby on Rails를 구동시키는 방법을 공부하다 시간 상 문제로 그만 두고 Heroku에 배포하는 방법을 선택했습니다."
          image={[edgestudy1ImagePath, edgestudy2ImagePath]}
          stack={edgestudyStack}
          link="http://edgestudy.herokuapp.com/"
          demo=""
          git="https://github.com/3457soso/project_edgestudy" />
        
        </div>
      </section>
  );
};

export default PortfolioComponent;