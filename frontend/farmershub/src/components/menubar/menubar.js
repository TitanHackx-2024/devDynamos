import React from 'react';
import { Stack } from '@fluentui/react';
import ColorBrand from './UserDetails/Avatar';
import corplogoPath from '../../img/crop.png';
import namelogoPath from '../../img/name.png';
import SearchBar from './SearchBox';
import ImageLink from './ImageLink';
import IconLinkButton from '../IconLinkButton';

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
        <Stack horizontal tokens={{ childrenGap: 10 }} verticalAlign="center">
          <ImageLink
            src={corplogoPath}
            alt="FarmHub Logo"
            width={40}
            height={40}
          />
          <ImageLink
            src={namelogoPath}
            alt="FarmHub Logo Text"
            width={140}
            height={25}  // Increased height for the text logo
          />
        </Stack>
      </Stack.Item>
      {/* Search Bar */}
      <Stack.Item styles={{ root: { flexGrow: 2 } }}>
        <SearchBar placeholder="Search..." />
      </Stack.Item>
      {/* Icon Link Buttons with Descriptions */}
      <Stack.Item styles={{ root: { flexGrow: 1 } }}>
        <Stack 
          horizontal 
          tokens={{ childrenGap: 0 }} 
          verticalAlign="center"
        >
          <IconLinkButton
            iconName="CartFilled"
            ariaLabel="Products"
            url="/products"
            text="Products"
          />
          <IconLinkButton
            iconName="FilterAddRegular"
            ariaLabel="Filter"
            url="/filter"
            text="Filter"
          />
          <IconLinkButton
            iconName="ArrowCircleUpRightFilled"
            ariaLabel="Explore"
            url="/explore"
            text="Explore"
          />
        </Stack>
      </Stack.Item>
      {/* ColorBrand Component */}
      <Stack.Item >
        <ColorBrand init='MS' />
      </Stack.Item>
    </Stack>
  );
};

export default MenuBar;
