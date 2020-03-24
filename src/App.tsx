import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ActivityChecker } from './ActivityChecker';

function App() {
  function onTimeout() {
    console.log('Timeout');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ActivityChecker timeout={10} onTimeout={onTimeout}></ActivityChecker>
    </div>
  );
}

export default App;
