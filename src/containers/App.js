import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import GetPeople from './GetPeople'
// import axios from 'axios';
import '../App.css';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    test: state.test,
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
      </nav>
    </div>
  )
}



class App extends Component {
  render() {
    console.log('APP RUNNING')
    console.log(this.props)
    return (
      <Router>
        <div id="appContainer">
          <Navbar/>
          <Route
            path='/people'
            render={(props) => <GetPeople />}
          />
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
