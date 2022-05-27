import React from 'react';
import Escrow from './pages/Escrow';

import './index.css';
import ContextProvider from './contexts/ContextProvider';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextProvider endpoint="https://api.devnet.solana.com" >
        </ContextProvider>
          <Escrow />
      </header>
    </div>
  );
}

export default App;
