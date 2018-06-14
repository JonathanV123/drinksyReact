import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { handlePeopleData, onPersonRemoval } from '../actions/peopleActions';
import PeopleList from '../components/PeopleList'
import RequestPeople from '../components/RequestPeople'

const mapStateToProps = (state) => {
    return {
        peopleData: state.peopleData,
        isPending: state.peopleData.isPending,
        error: state.peopleData.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestPeopleData: () => dispatch(handlePeopleData()),
        onPersonRemoval: (name) => dispatch(onPersonRemoval(name)),
    }
}

const GetPeople = (props) => {
    const pending = props.isPending;
    if (pending === true) {
        return (
            <h1>Loading Data</h1>
        )
    } else if (props.peopleData.currentPeopleData.length === 0) {
        return (
            <div>
                <RequestPeople {...props} />
                <Link className="navBarLink" to={'/addPeople'}>Add People</Link>
            </div>
        )
    } else {
        return (
            <PeopleList {...props} />
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(GetPeople);
