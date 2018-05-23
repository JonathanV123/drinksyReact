import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation.js';
import Header from './components/header.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ['Jordyn', 'Mikenzi', 'Jake']
    }
  }

  render() {
    return (
      <Router>
        <div id="appContainer">
          <Header/>
          <Navigation/>
        </div>
      </Router>
    )
  }
}

export default App;
