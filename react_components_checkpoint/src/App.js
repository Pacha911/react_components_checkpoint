import React from 'react';
import './App.css';

import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Address';
import Portfolio from './Component/Profile/Portfolio';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilPhoto />
        <FullName />
        <Adress />
      </header>
        <Portfolio />
    </div>
  );
}

export default App;
