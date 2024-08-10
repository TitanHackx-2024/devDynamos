import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import MenuBar from './menubar/menubar';  // Adjust import path as necessary
import { Stack } from '@fluentui/react';

const UserHome = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Stack>
        {/* Menu Bar */}
        <MenuBar />
        {/* Main Content */}
        <Stack tokens={{ padding: '20px' }}>
          {/* Your main content goes here */}
        </Stack>
      </Stack>
    </FluentProvider>
  );
};

export default UserHome;
