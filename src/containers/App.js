import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PeopleContainer from './PeopleContainer'

// import axios from 'axios';
import '../App.css';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // requestPeopleData: () => dispatch(handlePeopleData()),
    // peopleUserInterfaceRender: () => dispatch(peopleUserInterfaceRender()),
    // onPersonRemoval: (name) => dispatch(onPersonRemoval(name)),
  }
}

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <nav>
        <Link className="navBarLink" to={'/'}>Home</Link>
        <Link className="navBarLink" to={'/people'}>People</Link>
        <Link className="navBarLink" to={'/login'}>Login</Link>
        <Link className="navBarLink" to={'/account'}>Account</Link>
      </nav>
    </div>
  )
}

const Home = () => {
  return (
    <h1> Home Page </h1>
  )
}

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Router>
        <div id="appContainer">
          <Navbar />
          <Switch>
            <Route
              path='/'
              exact component={Home}
            />
            <Route
              path='/'
              exact component={Login}
            />
            <Route
              path='/people'
              component={PeopleContainer}
            />
            <Route render={() => <h1> 404 </h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
