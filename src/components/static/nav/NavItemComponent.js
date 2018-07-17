import React from 'react';
import { Link } from 'react-scroll'

const NavItemComponent = (props) => {
  return(
    <li class="nav-item">
      <Link activeClass="active" className="nav-link js-scroll-trigger" 
        to={`${props.name}`} spy={true} smooth={true} duration={500} >{`${props.name}`}</Link>
    </li>
  );
};

export default NavItemComponent;