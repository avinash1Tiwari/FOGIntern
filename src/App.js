// src/App.js
import React from 'react';
import './App.css';
import RainGrid1 from './components/RainGrid1';

function App() {
  return (
    <div className="App">
      <header className="App-header w-3/5 h-3/5">
        <h1 className="text-white text-3xl mb-4">Falling Rain Pattern</h1>
        {/* <RainGrid /> */}
        <RainGrid1 />
      </header>
    </div>
  );
}

export default App;
