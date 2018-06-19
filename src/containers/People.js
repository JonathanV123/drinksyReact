import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handlePeopleData, onPersonRemoval, onEditPeopleData } from '../actions/peopleActions';
import PeopleForm from '../components/People/AddPeopleForm';
import GetPeople from '../components/People/GetPeople';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        peopleData: state.peopleData.currentPeopleData,
        isPending: state.peopleData.isPending,
        error: state.peopleDataFetch.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestPeopleData: () => dispatch(handlePeopleData()),
        onPersonRemoval: (name) => dispatch(onPersonRemoval(name)),
        onEditPeopleData: (person) => dispatch(onEditPeopleData(person)),
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
    const onEditPeopleData = props.onEditPeopleData;
    const requestPeopleData = props.requestPeopleData;
    const isPending = props.isPending;
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
                        isPending ={isPending}
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
