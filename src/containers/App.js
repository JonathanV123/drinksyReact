import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeContainer from './HomeContainer';
import SignUpForm from '../components/User/SignUpForm';
import LoginForm from '../components/User/LoginForm';
import Dashboard from '../components/Dashboard';
import { verifyToken } from '../actions/jwtActions';
import { handleRestaurantData } from '../actions/restaurantActions';

import '../App.css';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    token: state.verifyJWT.token,
    loading: state.verifyJWT.isPending,
    user: state.verifyJWT.user,
    restaurants: state.restaurantData.currentRestaurantData
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    verifyToken: (token) => dispatch(verifyToken(token)),
    handleRestaurantData: (userId) => dispatch(handleRestaurantData(userId)),
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem('jwtToken');
    // Check for token in case user refreshes page. If there is a token, keep the user logged in.
    if (token) {
      props.verifyToken(token);
    }
    this.state = {
      userHasAccount: false,
      showNotification: false,
      responseMessage: '',
    }
  }

  render() {
    console.log(this.props);
    const userId = this.props.user.id
    // const path = this.state.loggedIn ? '/home' : '/login';
    return (
      <Router>
        <div id="appContainer">
          <Switch>
            <Route
              exact path='/'
              render={(props) => (
                this.props.token === 'Valid' ?
                  <Redirect to={{ pathname: `/home/${userId}` }} />
                  :
                  <HomeContainer
                    {...props}
                    loading={this.props.loading}
                    retrieveToken={this.props.retrieveToken}
                    userProfile={this.props.user}
                  />
              )}
            />
            <Route
              path='/home/:id'
              render={(props) => (
                this.props.token === 'Valid' ?
                  <Dashboard
                    {...props}
                    loading={this.props.loading}
                    retrieveToken={this.props.retrieveToken}
                    userProfile={this.props.user}
                    fetchRestaurantData={this.props.handleRestaurantData}
                    restaurantData={this.props.restaurants}
                  />
                  :
                  <Redirect to={{ pathname: `/` }} />

              )}
            />
            <Route
              path='/createAccount'
              render={(props) => (
                this.props.token === 'Valid' ?
                  <Redirect to={{ pathname: `/home/${userId}` }} />
                  :
                  <SignUpForm
                    {...props}
                    retrieveToken={this.props.retrieveToken}
                    renderResponse={this.renderResponse}
                  />
              )}
            />
            <Route
              path='/login'
              render={(props) => (
                this.props.token === 'Valid' ?
                  <Redirect to={{ pathname: `/home/${userId}` }} />
                  :
                  <LoginForm
                    {...props}
                    retrieveToken={this.props.retrieveToken}
                    renderResponse={this.renderResponse}
                    userProfile={this.props.user}
                    loading={this.props.loading}
                    verifyToken={this.props.verifyToken}
                  />

              )}
            />
            <Route render={() => <h1> 404 </h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  token: PropTypes.string,
  loading: PropTypes.bool,
  user: PropTypes.object,
  retrieveToken: PropTypes.func,
  verifyToken: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
