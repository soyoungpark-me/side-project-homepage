import React from 'react';
import typing from '../../../../../public/js/typing';
import SocialComponent from './SocialComponent';

class AboutComponent extends React.Component {
  componentDidMount() {
    typing();
  }

  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">Soyoung
            <span class="text-primary"> Park</span>
          </h1>
          <div class="md-5 head-wrapper">
            <i class="running em em-woman-running"></i>
            <div class="subheading">            
              Senior Student, Majoring in <strong>Software Engineering</strong> at Konkuk University
            </div>
          </div>          
          <div class="subheading mb-5">
            <a href="mailto:soyoungpark.me@gmail.com">soyoungpark.me@gmail.com</a>
          </div>
          <p class="bio">웹 백엔드 개발자를 꿈꾸는 박소영입니다.</p>
          <p id="demo" class="mb-5"></p>
          <ul class="list-inline list-social-icons mb-0">
            <SocialComponent name="facebook" link="https://www.facebook.com/3457soso" />
            <SocialComponent name="twitter"  link="https://www.facebook.com/3457soso" />
            <SocialComponent name="linkedin" link="https://www.linkedin.com/in/soyoung-park-737a57168/" />
            <SocialComponent name="github"   link="https://www.github.com/3457soso" />
          </ul>
        </div>
      </section>
    );
  }
};

export default AboutComponent;