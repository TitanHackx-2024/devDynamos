// src/components/LogoSection.js
import React from 'react';
import ImageLink from './menubar/ImageLink';
import corplogoPath from '../img/crop.png';
import namelogoPath from '../img/name.png';

function LogoSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '60px' }}>
      <ImageLink
        src={corplogoPath}
        alt="FarmHub Logo"
        width={180}
        height={90}
      />
      <ImageLink
        src={namelogoPath}
        alt="FarmHub Logo"
        width={300}
        height={52}
      />
    </div>
  );
}

export default LogoSection;
