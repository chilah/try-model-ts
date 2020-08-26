import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { PokeListStore } from './model/pokeModel';

const store = PokeListStore.create({});

interface MyInterface {
  type: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<[] | undefined>();

  return (
    <div className="App">
      <div>{data ? data.map((i) => i) : 'loading'}</div>
      <button onClick={() => store.fetchPokelit()}>click</button>
    </div>
  );
};

export default App;
