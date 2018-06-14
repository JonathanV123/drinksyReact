import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PeopleList from './PeopleList';
import RequestPeople from './RequestPeople';

const GetPeople = (props) => {
    console.log(props);
    const pending = props.isPending;
    if (pending === true) {
        return (
            <h1>Loading Data</h1>
        )
    } else if (props.peopleData.currentPeopleData.length === 0) {
        return (
            <div>
                <RequestPeople {...props} />
            </div>
        )
    } else {
        return (
            <PeopleList {...props} />
        )
    }

}

export default GetPeople;