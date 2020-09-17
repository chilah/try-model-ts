import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export interface ISearchInput {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  loading?: boolean;
}

const SearchInput: React.FC<ISearchInput> = ({
  value,
  onChange,
  onSearch,
  placeholder,
  loading,
}) => (
  <Search
    placeholder={placeholder}
    enterButton="Search"
    size="large"
    onSearch={onSearch}
    onChange={onChange}
    value={value}
    loading={loading}
  />
);

export default SearchInput;
