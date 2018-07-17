import React from 'react';
import PfItemComponent from './PfItemComponent';
import DevItemComponent from './DevItemComponent';

import './_portfolio.css';
import studymateImagePath from '../../../../../public/images/studymate.jpg';
import beweImagePath from '../../../../../public/images/bewe.jpg';
import gofounderImagePath from '../../../../../public/images/gofounder.jpg';

const studymateStack = [
  <DevItemComponent name="php"               fontSize="3rem"   left="0.5rem"  top="0.3rem"/>,
  <DevItemComponent name="laravel"           fontSize="2.3rem" left="0.8rem"  top="0.2rem"/>,
  <DevItemComponent name="mysql"             fontSize="2.4rem" left="0.9rem"  top="0.2rem"/>,
  <DevItemComponent name="amazonwebservices" fontSize="3rem"   left="0.35rem" top="0.2rem"/>
];

const gofounderStack = [
  <DevItemComponent name="ruby"              fontSize="2.5rem" left="0.5rem"  top="0.1rem"/>,
  <DevItemComponent name="rails"             fontSize="2.7rem" left="0.5rem"  top="0.1rem"/>,
  <DevItemComponent name="mysql"             fontSize="2.4rem" left="0.9rem"  top="0.2rem"/>,
  <DevItemComponent name="amazonwebservices" fontSize="3rem"   left="0.35rem" top="0.2rem"/>,
  <DevItemComponent name="bitbucket"         fontSize="2.7rem" left="0.65rem" top="0.2rem"/>,
];

const beweStack = [  
  <DevItemComponent name="nodejs"            fontSize="3rem"   left="0.5rem"  top="0.2rem"/>,
  <DevItemComponent name="react"             fontSize="3rem"   left="0.5rem"  top="0.2rem"/>,
  <DevItemComponent name="mysql"             fontSize="2.4rem" left="0.9rem"  top="0.2rem"/>,
  <DevItemComponent name="redis"             fontSize="2.8rem" left="0.6rem"  top="0.15rem"/>,
  <DevItemComponent name="amazonwebservices" fontSize="3rem"   left="0.35rem" top="0.2rem"/>,
  <DevItemComponent name="gitlab"            fontSize="2.8rem" left="0.6rem"  top="0.2rem"/>
];

const PortfolioComponent = () => {
  return (
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio">
      <div class="my-auto">
        <h1 class="mb-5">portfolio</h1>
        <PfItemComponent 
          title="studymate"
          term="July 2017 - October 2017"
          description="요즘 대학생, 직장인, 취준생 등 대상을 막론하고 유행하고 있는 공부 방식인 ‘스터디’를 더 편하게 진행할 수 있도록 개발된 웹-앱 플랫폼입니다."
          role="웹 서비스와 API 개발 전반을 맡았습니다. 처음으로 EC2를 통해 배포했고, 도메인을 구입해 연동했습니다."
          image={studymateImagePath}
          stack={studymateStack}
          link="http://studymate.soyoungpark.me"
          demo="https://drive.google.com/file/d/1NcZw6EUkIEYO6WLRow7QYHAuTPKkZYH2/view?usp=sharing"
          git="https://github.com/3457soso/project_studymate" />

        <PfItemComponent 
          title="gofounder"
          term="August 2017 - December 2017"
          description="고파운더는 ‘스타트업을 위한 스타트업’으로, 주 기능은 프로젝트를 업로드하고, 연락을 주고 받아 팀 빌딩을 하는 데 도움을 주는 것입니다."
          role="고프로젝트에 지원하기 기능을 붙이거나, 고커뮤니티에 사진 업로드 기능을 붙이는 등, 초기 개발 단계에서 구현하지 못했던 추가적인 기획 사항들을 개발했습니다."
          image={gofounderImagePath}
          stack={gofounderStack}
          link="https://www.gofounder.net/"
          demo=""
          git="" />

        <PfItemComponent 
          title="bewe"
          term="January 2018 - February 2018"
          description="스마일게이트에서 진행한 서버개발캠프 3기에서 진행한 3인 팀 프로젝트로, 스마일게이트의 게임 플랫폼인 스토브를 모티브로 기획했습니다."
          role="socket.io와 롱 폴링, 레디스 등을 이용해 실시간 소셜 기능과 랭킹 기능 개발을 담당했으며, 모든 개발이 끝난 후 전체 css 마크업을 맡아 프로젝트를 마무리했습니다."
          image={beweImagePath}
          stack={beweStack}
          link="http://bewe.soyoungpark.me"
          demo="https://drive.google.com/file/d/12hDYtCrYzikdYCg3eWgbNp3v3gGkKnMq/view?usp=sharing"
          git="https://github.com/3457soso/project_bewe" />
        </div>
      </section>
  );
};

export default PortfolioComponent;