import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export interface ISearchInput {
  searchText?: string;
  onChange: (text: string) => void;
}

const SearchInput: React.FC<ISearchInput> = ({ searchText }) => (
  <Search
    placeholder="input search text"
    // enterButton="Search"
    size="large"
    onSearch={(value) => console.log(value)}
  />
);

export default SearchInput;
