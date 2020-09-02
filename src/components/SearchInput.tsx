import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export interface ISearchInput {
  value?: string;
  onChange?: (value: string) => void;
}

const SearchInput: React.FC<ISearchInput> = ({ value, onChange }) => (
  <Search
    placeholder="input search text"
    enterButton="Search"
    size="large"
    onSearch={onChange}
    value={value}
  />
);

export default SearchInput;
