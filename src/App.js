import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

import logo from './logo.svg';

import Home from './Home.js';
import ChangingText from './ChangingText.js';
import ExpandingPop from './ExpandingPop.js';
import FramerMotion from './FramerMotion.js';
import IconTest from './IconTest.js';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
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
	       <Link to="/changing-text" className="App-link">Changing Text</Link>
	       <Link to="/expanding-pop" className="App-link">Expanding Pop</Link>
	       <Link to="/framer-motion" className="App-link">Framer Motion</Link>
	       <Link to="/icon-test" className="App-link">Icon Test</Link>
	    </nav>
	  </aside>
	  <main className="App-main">
	    <Switch>
	      <Route exact path="/">
	        <Home />
	      </Route>
	      <Route path="/changing-text">
	        <ChangingText />
	      </Route>
	      <Route path="/expanding-pop">
	        <ExpandingPop />
	      </Route>
	      <Route path="/framer-motion">
	        <FramerMotion />
	      </Route>
	      <Route path="/icon-test">
	        <IconTest />
	      </Route>
	    </Switch>
	  </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
