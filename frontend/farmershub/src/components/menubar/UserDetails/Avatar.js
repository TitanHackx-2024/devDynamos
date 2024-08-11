import * as React from 'react';
import { Avatar, Button } from '@fluentui/react-components';
import {
  TeachingPopover,
  TeachingPopoverSurface,
  TeachingPopoverTrigger,
} from '@fluentui/react-components';
import IconLinkButton from '../../IconLinkButton';

const ColorBrand = ({ init }) => {
  const [showPopover, setShowPopover] = React.useState(false);

  const handlePopoverToggle = () => {
    setShowPopover(!showPopover);
  };

  return (
    <TeachingPopover
      open={showPopover}
      onOpenChange={handlePopoverToggle}
      styles={{ 
        surface: { 
          minWidth: 'auto',  // Fit width to content
        } 
      }}
    >
      <TeachingPopoverTrigger>
        <Button
          onClick={handlePopoverToggle}
          style={{ padding: 0, minWidth: 'auto', border: 'none' }} // Remove button border
        >
          <Avatar
            color="brand"
            initials={init}
            size={36}
            name="brand color avatar"
          />
        </Button>
      </TeachingPopoverTrigger>
      <TeachingPopoverSurface 
        style={{ padding: '10px',maxWidth: '100px' }} // Add padding around popover content
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}> {/* Add vertical spacing */}
          <IconLinkButton
            iconName="BotFilled"
            ariaLabel="Profile"
            url="/profile"
            text="Profile"
          />
          <IconLinkButton
            iconName="MoreHorizontalFilled"
            ariaLabel="About"
            url="/about"
            text="About"
          />
          <IconLinkButton
            iconName="SignOutFilled"
            ariaLabel="LogOut"
            url="/login"
            text="Log Out"
          />
        </div>
      </TeachingPopoverSurface>
    </TeachingPopover>
  );
};

export default ColorBrand;
