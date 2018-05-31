import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { setAddField } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';
import Navigation from '../components/Navigation.js';
import AddItemForm from '../components/AddItemForm.js';
// import Places from '../components/Places.js';
import '../App.css';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    addField: state.addField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddItemForm: (event) => dispatch(setAddField(event.target.value))
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addItemField: '',
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    console.log('Submitted');
    event.preventDefault();
  }

  onAddItemChange = (event) => {
    console.log(event)
    this.setState({ addField: event.target.value })
  }

  render() {
    return (
      <Router>
        <div id="appContainer">
          <Navigation />
          {/* <Route
            path="/places"
            render={(props) => <Places {...props} onAddItemChange={this.onAddItemChange} />}
          /> */}
          <Route path={`/`} render={(props) => <AddItemForm {...props} onAddItemChange={this.onAddItemChange} />}/>

        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
