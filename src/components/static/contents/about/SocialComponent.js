import React from 'react';

const SocialComponent = (props) => {
  return (
    <li className="list-inline-item">
      <a href={props.link} target="_blank">
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={`fab fa-${props.name} fa-stack-1x fa-inverse`}></i>
        </span>
      </a>
    </li>
  );
};

export default SocialComponent;