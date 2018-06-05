import React, { Component } from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { setAddField, requestDummyData } from '../actions';
import { connect } from 'react-redux';
// import axios from 'axios';
import Navigation from '../components/Navigation.js';
// import AddItemForm from '../components/AddItemForm.js';
// import Places from '../components/Places.js';
import '../App.css';

const mapStateToProps = (state) => {
  return {
    addField: state.addItem.addField,
    people: state.requestDummyData.people,
    isPending: state.requestDummyData.isPending,
    error: state.requestDummyData.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItemChange: (event) => dispatch(setAddField(event.target.value)),
    onRequestDummyData: () => dispatch(requestDummyData())
  }
}



class App extends Component {
  // constructor(props) {
  //   super(props);
  // }


  componentDidMount() {
    this.props.onRequestDummyData();
    console.log(this.props);
    console.log(this.state);
  };

  render() {
    const { people, isPending } = this.props;
    return (
      isPending ?
        <h1>Loading</h1> :
        <Router>
          <div id="appContainer">
            <Navigation />
          </div>
        </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
