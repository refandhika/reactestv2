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
import ChangingText from './ChangingText.js';
import MultiSection from './MultiSection.js';

function App() {
  return (
    <div className="App">
      <Router basename='/reactestv2/'>
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
	       <Link to="/multi-section" className="App-link">Multi Section</Link>
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
	      <Route path="/multi-section">
	        <MultiSection />
	      </Route>
	    </Switch>
	  </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
