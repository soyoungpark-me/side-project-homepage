import React from 'react';

import ImagePath from '../../../../public/images/profile.jpg';

const AvatarComponent = () => {
  return (
    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={ImagePath} alt="0" />
  )
};

export default AvatarComponent;