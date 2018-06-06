import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { setAddField, requestDummyData } from '../actions';
import { connect } from 'react-redux';
import GetPeople from '../components/GetPeople'
// import axios from 'axios';
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
  // constructor(props) {
  //   super(props);
  // }


  // componentDidMount() {
  //   this.props.onRequestDummyData();
  // };

  render() {
    const { people, isPending } = this.props;
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
