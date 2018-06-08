import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { onRequestPeopleData, onPersonRemoval } from '../actions';
import { connect } from 'react-redux';
import GetPeople from '../components/GetPeople'
// import axios from 'axios';
import '../App.css';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    test: state.test,
    responseData: state.requestPeopleData.responseData,
    peopleData: state.peopleStorage.peopleData,
    isPending: state.requestPeopleData.isPending,
    error: state.requestPeopleData.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestPeopleData: () => dispatch(onRequestPeopleData()),
    onPersonRemoval: (name, arr) => dispatch(onPersonRemoval(name, arr))
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
    console.log(this.props);
    return (
      <Router>
        <div id="appContainer">
          <Navbar/>
          <Route
            path='/people'
            render={(props) => <GetPeople {...this.props} />}
          />
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
