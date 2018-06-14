import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { handlePeopleData, onPersonRemoval, onEditPeopleData } from '../actions/peopleActions';
import PeopleList from '../components/People/PeopleList';
import RequestPeople from '../components/People/RequestPeople';
import PeopleForm from '../components/People/AddPeopleForm';
import GetPeople from '../components/People/GetPeople';

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
        onEditPeopleData: (id, name, email) => dispatch(onEditPeopleData(id, name, email)),
    }
}

const PeopleNav = (props) => {
    return (
        <nav>
            <Link className="navBarLink" to={'/people/addPeople'}>Add People</Link>
            <Link className="navBarLink" to={'/people/getPeople'}>Get People</Link>
        </nav>
    )
}

const PeopleContainer = (props) => {
    console.log(props);
    const peopleData = props.peopleData;
    const onPersonRemoval = props.onPersonRemoval;
    const requestPeopleData = props.requestPeopleData;
    return (
        <div>
            <PeopleNav />
            <Route
                exact path='/people/addPeople'
                component={PeopleForm}
            />
            <Route
                exact path='/people/getPeople'
                render={(props) =>
                    <GetPeople
                        {...props}
                        peopleData={peopleData}
                        onPersonRemoval={onPersonRemoval}
                        requestPeopleData={requestPeopleData}
                        onEditPeopleData={onEditPeopleData}
                    />
                }
            />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
