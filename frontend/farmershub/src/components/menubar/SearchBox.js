import React from 'react';
import { Field, SearchBox } from '@fluentui/react-components';

const SearchBar = (props) => {
  return (
    <Field>
      <SearchBox size="large" {...props} />
    </Field>
  );
};

export default SearchBar;
