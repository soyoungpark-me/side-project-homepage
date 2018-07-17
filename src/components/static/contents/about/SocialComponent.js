import React from 'react';

const SocialComponent = (props) => {
  return (
    <li class="list-inline-item">
      <a href={props.link} target="_blank">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class={`fa fa-${props.name} fa-stack-1x fa-inverse`}></i>
        </span>
      </a>
    </li>
  );
};

export default SocialComponent;