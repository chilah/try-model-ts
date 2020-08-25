import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';

interface MyInterface {
  type: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<[] | undefined>();

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>{data ? data.map((i) => i) : 'loading'}</div>
    </div>
  );
};

export default App;
