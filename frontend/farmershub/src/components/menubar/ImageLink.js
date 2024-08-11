import React from 'react';
import { Image } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';

const ImageLink = ({ src, alt, width, height }) => {
  const nevigate = useNavigate();

  const handleClick = () => {
    nevigate('/');
  };

  return (
    <div
      onClick={handleClick}
      style={{ cursor: 'pointer', marginBottom: '10px' }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageLink;
