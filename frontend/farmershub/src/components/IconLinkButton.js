import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FilterAddRegular,
  CartFilled,
  ArrowCircleUpRightFilled,
  SignOutFilled,
  MoreHorizontalFilled,
  BotFilled
} from '@fluentui/react-icons';

// Map icon names to components
const iconMap = {
    FilterAddRegular,
    CartFilled,
    ArrowCircleUpRightFilled,
    SignOutFilled,
    MoreHorizontalFilled,
    BotFilled
};

const IconLinkButton = ({ iconName, ariaLabel, url, text }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(url);
  };

  // Get the icon component based on the iconName prop
  const IconComponent = iconMap[iconName] || null;

  return (
    <div 
      onClick={handleClick} 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer', 
        flexGrow: 1,
      }}
    >
      {IconComponent && (
        <IconComponent
          ariaLabel={ariaLabel}
          style={{ 
            marginRight: 8, // Adjust spacing between icon and text
            fontSize: 20, // Increase icon size
          }} 
        />
      )}
      <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{text}</span> {/* Bold text and increase size */}
    </div>
  );
};

export default IconLinkButton;
