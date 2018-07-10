import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
});

const token = sessionStorage.getItem('jwtToken');


const Welcome = (props) => {
    console.log(props);
    return (
        <h1>Welcome! : {props.match.params.id}</h1>
    )
}

class HomeContainer extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8080/home',
            headers: { 'Authorization': "bearer " + token },
        }).then((response) => {
            console.log(response)

        }).catch((err) => {
            console.log(err.response);
            // const errorMessage = err.response.data.message;
            // this.props.renderResponse(errorMessage)
        })
    };

    render() {
        if (this.props.loggedIn) {
            return (
                <Welcome {...this.props} />
            )
        } else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}

export default withStyles(styles)(HomeContainer);

