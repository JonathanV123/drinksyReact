import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PeopleList from './PeopleList';
import RequestPeople from './RequestPeople';
import EditPeopleForm from './EditPeopleForm';

const People = (props) => {
    const pending = props.isPending;
    if (pending === true) {
        return (
            <h1>Loading Data</h1>
        )
    } else if (props.peopleData.length === 0) {
        return (
            <div>
                <RequestPeople {...props} />
            </div>
        )
    } else {
        return (
            <div>
                <PeopleList {...props} />
            </div>
        )
    }

}

export default People;