import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/navigation.js';
import Header from './components/header.js';
import About from './components/about.js';
import Topics from './components/topics.js';

import './App.css';

// function Testing() {   console.log('testinggo')   return (     <h1>Test</h1>
// ) }; function FriendsList(props) {   return (     <ul>       {props .friends
//      .map((name) => (           <li key={name}> {name}           </li> ))}
//  </ul>   ) }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ['Jordyn', 'Mikenzi', 'Jake']
    }
  }
  componentDidMount() {
    // console.log("querying"); axios   .get('http://localhost:8080/')
    // .then(function (response) {     console.log(response);   })   .catch(function
    // (error) {     console.log(error);   });
  }
  render() {
    return (
      <Router>
        <div>
          <div id="appContainer">
            <Header/>
            <Navigation/>
          </div>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </Router>
    )
  }
}

export default App;
