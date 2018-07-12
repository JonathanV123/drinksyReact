import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';
import SignUpForm from '../components/User/SignUpForm';
import LoginForm from '../components/User/LoginForm';
import Dashboard from '../components/Dashboard';
import { userHasLoggedIn, getTokenMe, verifyToken } from '../actions/jwtActions';
import '../App.css';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loggedIn: state.userIsLoggedIn.isUserLoggedIn,
    token: state.verifyJWT.token,
    loading: state.verifyJWT.isPending,
    user: state.verifyJWT.user
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
    verifyToken: (token) => dispatch(verifyToken(token)),
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
                    loggedIn={this.props.loggedIn}
                    loading={this.props.loading}
                    userLoggedIn={this.props.userLoggedIn}
                    retrieveToken={this.props.retrieveToken}
                    userProfile={this.props.user}
                  />
              )}
            />
            <Route
              path='/home/:id'
              render={(props) => (
                this.props.loggedIn || this.props.token === 'Valid' ?
                  <Dashboard
                    {...props}
                    loggedIn={this.props.loggedIn}
                    loading={this.props.loading}
                    userLoggedIn={this.props.userLoggedIn}
                    retrieveToken={this.props.retrieveToken}
                    userProfile={this.props.user}
                  />
                  :
                  <Redirect to={{ pathname: `/` }} />

              )}
            />
            <Route
              path='/createAccount'
              render={(props) => (
                this.props.loggedIn || this.props.token === 'Valid' ?
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
                this.props.loggedIn || this.props.token === 'Valid' ?
                  <Redirect to={{ pathname: `/home/${userId}` }} />
                  :
                  <LoginForm
                    {...props}
                    loggedIn={this.props.loggedIn}
                    userLoggedIn={this.props.userLoggedIn}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
