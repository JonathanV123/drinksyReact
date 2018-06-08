import React, { Component } from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PeopleList from '../components/PeopleList'
import RequestPeople from '../components/RequestPeople'


class GetPeople extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const pending = this.props.isPending;
        if (pending === true) {
            return (
                <h1>Loading Data</h1>
            )
        } else if (this.props.peopleData.length === 0) {
            return (
                <RequestPeople {...this.props} />
            )
        } else {
            return (
                <PeopleList {...this.props} />
            )
        }
    }
}

export default GetPeople;
