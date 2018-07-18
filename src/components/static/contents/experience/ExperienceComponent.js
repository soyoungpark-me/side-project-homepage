import React from 'react';
import ExItemComponent from './ExItemComponent';

import './_experience.css';

import smilegateLogo from '../../../../../public/images/ex-smilegate.jpg';
import gofounderLogo from '../../../../../public/images/ex-gofounder.png';
import likelionLogo from '../../../../../public/images/ex-likelion.png';
import fourthreethreeLogo from '../../../../../public/images/ex-433.jpg';

const ExperienceComponent = () => {
  return (
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h1 class="mb-5">Experience</h1>

          <ExItemComponent 
            title="Smilegate ServerDev Camp 3rd"
            company="Smilegate"             
            term="January 2018 ~ February 2018"
            description="스마일게이트에서 진행한 서버개발캠프에 3기로 참여했습니다. 
              스마일게이트 서버개발캠프는 대학생들이 직접 소프트웨어 개발 프로젝트를 진행하며 개발자로 성장할 수 있는 기회를 제공하는 프로그램입니다. 
              팀 빌딩부터 주제 선정, 개발까지 모든 과정에 직접 참여해야 했고, 덕분에 개발자로서 배워가는 게 굉장히 많았던 경험이었습니다. 
              웹 언어라고는 PHP 밖에 몰랐었는데, 캠프에 참가한 이후 시야가 많이 넓어졌고 무엇을 공부해야 하는지 감을 잡을 수 있었습니다." 
            role="팀 빌딩을 통해 만난 팀원들과 각자 리액트 공부를 하면서 프론트 엔드 개발까지 경험해보자고 의견을 모았고, 
              스마일게이트의 스토브 서비스를 참고해 비슷한 서비스를 개발하기로 기획했습니다. 두 달간 리액트와 comet, node와 레디스까지 
              직접 써먹어가며 공부해서인지 빠르게 익힐 수 있었습니다."
            link="portfolio-bewe"
            logo={smilegateLogo} />

          <ExItemComponent 
            title="Junior Web Backend Developer"
            company="Gofounder"
            description="설명하기"
            term="January 2018 ~ February 2018"
            description="대학교 선배의 소개를 통해 교내 스타트업인 고파운더에서 백엔드 개발자로 일할 기회를 얻었습니다.
              개발한 결과물을 누군가 사용한다는 경험을 처음 해보았던 프로젝트였습니다. 
              실제로 배포 중인 서비스에 추가 기능을 개발하면서, 기존의 팀 프로젝트와는 다른 긴장감과 책임감을 맛볼 수 있었습니다. 
              팀에 합류할 때는 900여 명의 회원이 존재했는데, 현재 1700명이 넘는 회원이 가입한 상태입니다. 
              실제로 제가 추가한 기능을 사용자들이 이용해 활동하는 모습을 보며 뿌듯함을 느꼈고, 
              개발자라는 진로를 더 확고히 했던 계기가 되었습니다.
            "
            role="지원하기 기능, 전체 메일 전송 기능, 사진 업로드 기능 등 추가적인 기획을 맡아 개발했는데, 
              깃을 본격적으로 공부해 사용해야 했고, 함께 일할 수 있는 장소가 없다는 문제를 해결하기 위해 트렐로, 잔디 등 협업 툴을 사용했습니다. 
              ec2에 올라간 서버의 메모리를 주기적으로 지워주는 등 배포과 관리 관련된 경험도 할 수 있었습니다."
            link="portfolio-gofounder"
            logo={gofounderLogo} />

          <ExItemComponent 
            title="LikeLion 4th at Konkuk Univ"
            company="LikeLion"
            description="멋쟁이 사자처럼은 비전공자를 대상으로 코딩을 알려주기 위해 만들어진 대학 연합 동아리입니다. 
              저는 전공자였지만 당시 전공을 살려 진로를 정할지, 다른 진로를 찾아볼지 고민하고 있었던 상황이었기 때문에 지원해 활동하게 되었습니다.
              당시 이두희 님께서 직접 촬영한 인터넷 강의를 보며 공부하고, 과제를 통해 배운 내용을 바로바로 활용하며 공부했는데, 
              웹 개발자로 진로를 정하게 되는 데 큰 계기가 되었던 경험이었습니다. ruby on rails를 공부해, 
              생산성이 좋은 언어로 빠르게 개발해나가는 것이 신기했고 재미있었습니다."
            term="January 2018 ~ February 2018"
            logo={likelionLogo} />

          <ExItemComponent 
            title="Internship in Communication Department"
            company="4:33"
            description="게임 회사 네시삼십삼분의 커뮤니케이션실에서 2달간 인턴을 했습니다. 
              짧았지만 첫 직장이었던 만큼 두 달 내내 긴장하며 지냈던 것 같습니다. 
              자유로운 기업 문화와 분위기에서 좋은 분들을 만나 즐겁게 일했고, 게임 회사에 관심이 더 많아지는 계기가 되었습니다."
            role="커뮤니케이션실에서 일하게 되어, 네시삽십삼분의 공식 페이스북에 올라갈 콘텐츠들을 기획하고 디자인하는 역할을 맡았습니다. 
              기획은 매일 짧게 아이디어 회의를 가질 때 조금 참여하는 정도였고, 주 업무는 콘텐츠 디자인이었습니다. 
              올라갈 이미지를 직접 그리거나, 포토샵을 통해 만드는 업무였고, 종종 카드 뉴스로 만들어 업로드했습니다. "
            term="January 2018 ~ February 2018"
            logo={fourthreethreeLogo} />
        </div>
      </section>
  );
};

export default ExperienceComponent;