import React from 'react';
import typing from '../../../../../public/js/typing';
import SocialComponent from './SocialComponent';

import './_about.css';

class AboutComponent extends React.Component {
  componentDidMount() {
    typing();
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Soyoung
            <span className="text-primary"> Park</span>
          </h1>
          <div className="md-5 head-wrapper">
            <i className="running em em-woman-running"></i>
            <div className="subheading">            
              Senior Student, Majoring in <strong>Software Engineering</strong> at Konkuk University
            </div>
          </div>          
          <div className="subheading mb-5">
            <a href="mailto:soyoungpark.me@gmail.com">soyoungpark.me@gmail.com</a>
          </div>
          <p className="bio">웹 백엔드 개발자를 꿈꾸는 박소영입니다.</p>
          <p id="demo" className="mb-5"></p>
          <ul className="list-inline list-social-icons mb-0">
            <SocialComponent name="facebook-f" link="https://www.facebook.com/3457soso" />
            <SocialComponent name="twitter"  link="https://www.facebook.com/3457soso" />
            <SocialComponent name="linkedin-in" link="https://www.linkedin.com/in/soyoung-park-737a57168/" />
            <SocialComponent name="github"   link="https://www.github.com/3457soso" />
          </ul>
        </div>
      </section>
    );
  }
};

export default AboutComponent;