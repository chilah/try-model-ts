import React, { useEffect, useState } from 'react';
import { Card } from './components';
import 'antd/dist/antd.css';
import './App.css';
import { pokemonlistService, PokemonList, PokemonDetail } from './api/pokeApi';

interface MyInterface {
  type: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<[] | undefined>();

  const getList = async () => {
    try {
      const result = await pokemonlistService();

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>{data ? data.map((i: object) => i) : 'loading'}</div>
    </div>
  );
};

export default App;
