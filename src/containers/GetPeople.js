import React, { Component } from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { handlePeopleData, onPersonRemoval, peopleUserInteraceRender } from '../actions/peopleActions';
import PeopleList from '../components/PeopleList'
import RequestPeople from '../components/RequestPeople'

const mapStateToProps = (state) => {
    return {
        peopleData: state.peopleData,
        isPending: state.peopleData.isPending,
        error: state.peopleData.error,
        peopleButtonDescription: state.peopleButtonInformation.buttonTextDescription
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestPeopleData: () => dispatch(handlePeopleData()),
        peopleUserInterfaceRender: () => dispatch(peopleUserInteraceRender()),
        onPersonRemoval: (name) => dispatch(onPersonRemoval(name)),
    }
}

class GetPeople extends Component {
    constructor(props) {
        super(props);
        this.props.peopleUserInterfaceRender();
        console.log(this.state)
        console.log(this.props)
    }
    render() {
        const pending = this.props.isPending;
        if (pending === true) {
            return (
                <h1>Loading Data</h1>
            )
        } else if (this.props.peopleData.currentPeopleData.length === 0) {
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

export default connect(mapStateToProps, mapDispatchToProps)(GetPeople);
