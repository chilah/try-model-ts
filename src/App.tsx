import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { PokeListStore } from './model/pokeModel';
import SearchInput from './components/SearchInput';

const pokeStore = PokeListStore.create({});

const App: React.FC = observer(() => {
  const [data, setData] = useState<[] | undefined>();
  const [inputText, setInputText] = useState<string | undefined>();

  return (
    <div className="App">
      <button onClick={() => pokeStore.fetchPokelist()}>click</button>
      <SearchInput
        onChange={(value: string) => {
          console.log('value', value);
          pokeStore.setSearchText(value);
        }}
        value={pokeStore.searchText}
        // value={inputText}
        // onChange={(e) => setInputText(e)}
      />
      <p>{pokeStore.searchText}</p>
      <Input
        placeholder="Basic usage"
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputText(e.target.value)
        }
      />
      <p>{inputText}</p>
    </div>
  );
});

export default App;
