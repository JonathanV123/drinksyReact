import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';
import SignUpForm from '../components/User/SignUpForm';
import LoginForm from '../components/User/LoginForm';
import Dashboard from '../components/Dashboard';

import { userHasLoggedIn, getTokenMe, setUserProfile } from '../actions/jwtActions';
import '../App.css';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loggedIn: state.userIsLoggedIn.isUserLoggedIn,
    userProfile: state.userProfile,
  }
}


// const Navbar = (props) => {
//   console.log(props);
//   return (
//     <div className="navBarContainer">
//       <nav>
//         <Link className="navBarLink" to={'/'}>Home</Link>
//         <Link className="navBarLink" to={'/restaurant'}>Restaurants</Link>
//         <Link className="navBarLink" to={'/account'}>Account</Link>
//       </nav>
//     </div>
//   )
// }

const mapDispatchToProps = (dispatch) => {
  return {
    userLoggedIn: () => dispatch(userHasLoggedIn()),
    retrieveToken: () => dispatch(getTokenMe()),
    userInfo: (userInfo) => dispatch(setUserProfile(userInfo)),
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props.userProfile);
    this.state = {
      userHasAccount: false,
      showNotification: false,
      responseMessage: '',

    }

  }
  render() {
    const userId = this.props.userProfile.userId
    // const path = this.state.loggedIn ? '/home' : '/login';
    return (
      <Router>
        <div id="appContainer">
          <Switch>
            <Route
              exact path='/'
              render={(props) => (
                this.props.loggedIn ?
                  <Redirect to={{ pathname: `/home/${userId}` }} />
                  :
                  <HomeContainer
                    {...props}
                    loggedIn={this.props.loggedIn}
                    userLoggedIn={this.props.userLoggedIn}
                    retrieveToken={this.props.retrieveToken}
                    userInfo={this.props.userInfo}
                    userProfile={this.props.userProfile}
                  />
              )}
            />
            <Route
              path='/home/:id'
              render={(props) =>
                <Dashboard
                  {...props}
                  loggedIn={this.props.loggedIn}
                  userLoggedIn={this.props.userLoggedIn}
                  retrieveToken={this.props.retrieveToken}
                  userInfo={this.props.userInfo}
                  userProfile={this.props.userProfile}
                />
              }
            />
            <Route
              path='/createAccount'
              render={(props) => (
                this.props.loggedIn ?
                  <Redirect to={{ pathname: `/home/${userId}` }} />
                  :
                  <SignUpForm
                    {...props}
                    loggedIn={this.props.loggedIn}
                    userLoggedIn={this.props.userLoggedIn}
                    retrieveToken={this.props.retrieveToken}
                    renderResponse={this.renderResponse}
                  />
              )}
            />
            <Route
              path='/login'
              render={(props) => (
                this.props.loggedIn ?
                  <Redirect to={{ pathname: `/home/${userId}` }} />
                  :
                  <LoginForm
                    {...props}
                    loggedIn={this.props.loggedIn}
                    userLoggedIn={this.props.userLoggedIn}
                    retrieveToken={this.props.retrieveToken}
                    renderResponse={this.renderResponse}
                    userInfo={this.props.userInfo}
                    userProfile={this.props.userProfile}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
