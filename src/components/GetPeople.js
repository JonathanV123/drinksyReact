import React, { Component } from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PeopleList from '../components/PeopleList'
import RequestPeople from '../components/RequestPeople'

class GetPeople extends Component {
    render() {
        const pending = this.props.isPending;
        if (this.props.people.length === 0) {
            return (
                <RequestPeople {...this.props} />
            )
        } else if (pending === true) {
            return (
                <h1>Loading Data</h1>
            )
        } else {
            return (
                <PeopleList people={this.props.people} />
            )
        }
    }
}

export default GetPeople;
