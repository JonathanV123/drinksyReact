import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PeopleList from '../components/PeopleList'


class GetPeople extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentDidMount() {
        this.props.onRequestDummyData();
    };
    render() {
        if (this.props.people.length === 0) {
            return <h1> Loading </h1>
        } else {
            return <PeopleList people={this.props.people} />

        }
        // return <h1> test</h1>
    }
}

export default GetPeople;
