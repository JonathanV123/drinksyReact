import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation.js';
import Places from './components/Places.js';
import Home from './components/Home.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        <div id="appContainer">
          <Navigation />
          <Route path="/" component={Home} />
          <Route path="/places" component={Places} />
        </div>
      </Router>
    )
  }
}

export default App;
