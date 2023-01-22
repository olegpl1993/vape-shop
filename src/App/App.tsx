import React from 'react';
import { HashRouter } from 'react-router-dom';
import RootRouter from './RootRouter/rootRouter';

function App() {
  return (
    <HashRouter>
      <RootRouter />
    </HashRouter>
  );
}

export default App;
