import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import RestaurantContainer from './RestaurantContainer';
import LoginContainer from './LoginContainer';
import { userHasLoggedIn, getTokenMe } from '../actions/jwtActions';

import '../App.css';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loggedIn: state.userIsLoggedIn.isUserLoggedIn,
  }
}

const Navbar = (props) => {
  console.log(props);
  return (
    <div className="navBarContainer">
      <nav>
        <Link className="navBarLink" to={'/'}>Home</Link>
        <Link className="navBarLink" to={'/restaurant'}>Restaurants</Link>
        <Link className="navBarLink" to={'/account'}>Account</Link>
      </nav>
    </div>
  )
}



const mapDispatchToProps = (dispatch) => {
  return {
    userLoggedIn: () => dispatch(userHasLoggedIn()),
    retrieveToken: () => dispatch(getTokenMe()),
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <Router>
        <div id="appContainer">
          <Switch>
            <Route
              path='/'
              render={(props) =>
                <LoginContainer
                  {...props}
                  loggedIn={loggedIn}
                  userLoggedIn={this.props.userLoggedIn}
                  retrieveToken={this.props.retrieveToken}
                />
              }
            />
            <Route render={() => <h1> 404 </h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
