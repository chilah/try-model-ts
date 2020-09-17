import React, { useEffect, useState } from 'react';
import { observer, useLocalStore } from 'mobx-react-lite';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { PokeListStore } from './model/pokeModel';
import SearchInput from './components/SearchInput';

const pokeStore = PokeListStore.create({});

const App: React.FC = observer(() => {
  return (
    <div className="App">
      <SearchInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          pokeStore.setSearchText(e.target.value);
        }}
        value={pokeStore.searchText}
        onSearch={(searchText: string) => {
          pokeStore.fetchPokelist(pokeStore.searchText);
          pokeStore.setSearchText('');
        }}
        placeholder="Catch your pokemon!"
        loading={pokeStore.isLoading}
      />
    </div>
  );
});

export default App;
