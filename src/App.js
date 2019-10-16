import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<div className="App-brand">
	  <img src={logo} className="App-logo" alt="logo" />
	</div>
      </header>
      <div className="App-content">
	<aside className="App-side">
	
	</aside>
	<main className="App-main">
	</main>
      </div>
    </div>
  );
}

export default App;
