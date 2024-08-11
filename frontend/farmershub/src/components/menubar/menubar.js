import React from 'react';
import { Stack, Image  } from '@fluentui/react';
import ColorBrand from './UserDetails/Avatar';
import logoPath from '../../img/logo.png';
import SearchBar from './SearchBox';

const MenuBar = () => {
  return (
        <Stack 
          horizontal 
          verticalAlign="center" 
          tokens={{ padding: '10px' }} 
          styles={{ root: { borderBottom: '1px solid #ccc' } }}
        >
          {/* Logo */}
          <Stack.Item styles={{ root: { flexGrow: 1 } }}>
            <Image
              src={logoPath}
              alt="FarmHub Logo"
              width={160}
              height={40}
            />
          </Stack.Item>
          {/* Search Bar */}
          <Stack.Item styles={{ root: { flexGrow: 2 } }}>
            <SearchBar placeholder="Search..." />
          </Stack.Item>
          {/* ColorBrand Component */}
          <Stack.Item>
            <ColorBrand />
          </Stack.Item>
        </Stack>
  );
};

export default MenuBar;
