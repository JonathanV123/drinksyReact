import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

const AccountCreatedNotifcation = () => {
    return (
        <Paper elevation={5}>
            <Typography variant="headline" component="h3">
                Your Account Has Been Created. Login Below
            </Typography>
        </Paper>
    )
}

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userHasAccount: false,
        }
    }
    accountCreated = (accountCreated) => {
        console.log(accountCreated);
        if (accountCreated === true) {
            this.setState((prevState, props) => {
                return {
                    userHasAccount: true
                }
            })
        }
    }

    render() {
        if (this.state.userHasAccount === false) {
            return (
                <div>
                    <SignUpForm accountCreated={this.accountCreated} />
                </div>
            )
        } else {
            return (
                <div>
                    <AccountCreatedNotifcation />
                    <LoginForm />
                </div>
            )
        }

    }
}

export default LoginContainer;
