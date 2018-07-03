import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import RestaurantContainer from './RestaurantContainer';
import HomeContainer from './HomeContainer';
import LoginContainer from './LoginContainer';
import { userHasLoggedIn, getTokenMe } from '../actions/jwtActions';

import '../App.css';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loggedIn: state.userIsLoggedIn.isUserLoggedIn,
  }
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
                <HomeContainer
                  {...props}
                  loggedIn={loggedIn}
                  userLoggedIn={this.props.userLoggedIn}
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
