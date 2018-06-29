import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PeopleContainer from './PeopleContainer';
import LoginContainer from './LoginContainer';
import { userHasLoggedIn } from '../actions/jwtActions';


// import axios from 'axios';
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
  }
}

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <nav>
        <Link className="navBarLink" to={'/'}>Home</Link>
        <Link className="navBarLink" to={'/people'}>People</Link>
        <Link className="navBarLink" to={'/createUser'}>Create Account</Link>
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
  constructor(props) {
    super(props);
  }
  render() {
    const loggedIn = this.props.loggedIn;
    if (loggedIn === true) {
      return (<h1> hey</h1>)
    } else {
      return (<Router>
        <div id="appContainer">
          <Navbar />
          <Switch>
            <Route
              path='/'
              exact component={Home}
            />
            <Route
              path='/createUser'
              render={(props) =>
                    <LoginContainer
                        {...props}
                        loggedIn={loggedIn}
                        userLoggedIn={this.props.userLoggedIn}
                    />
                }
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
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
