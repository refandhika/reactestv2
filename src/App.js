import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

import logo from './logo.svg';

import Home from './Home.js';
import FadingText from './FadingText.js';
import TypingText from './TypingText.js';

function App() {
  return (
    <div className="App">
      <Router basename='/reacteastv2'>
        <header className="App-header">
	  <div className="App-brand">
	    <Link to="/">
	      <img src={logo} className="App-logo" alt="logo" />
	    </Link>
	  </div>
        </header>
        <div className="App-content">
	  <aside className="App-side">
	    <nav className="App-nav">
	       <Link to="/" className="App-link">Home</Link>
	       <Link to="/changingtext" className="App-link">Changing Text</Link>
	    </nav>
	  </aside>
	  <main className="App-main">
	    <Switch>
	      <Route exact path="/">
	        <Home />
	      </Route>
	      <Route path="/changingtext">
	        <FadingText />
	        <TypingText />
	      </Route>
	    </Switch>
	  </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
