import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import MenuBar from './menubar/menubar';  // Adjust import path as necessary
import { Stack } from '@fluentui/react';
import Card from './Card'

// Sample Details for testing
const sampleProduct = {
  user: {
    desc: "User description goes here", // Example user description
  },
  name : "Lady Finger Apple",
  id: "12345", // Example product ID
  desc: "A detailed description of the product",
  price: "99.99",
  sellType: "/ Kg", // Sell type with unit
};

//
const UserHome = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Stack>
        {/* Menu Bar */}
        <MenuBar />
        {/* Main Content */}
        <Stack tokens={{ padding: '20px' }}>
          <Card product = {sampleProduct}/>
        </Stack>
      </Stack>
    </FluentProvider>
  );
};

export default UserHome;
