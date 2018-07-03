import React, { Component } from 'react';
import { Route, Link, } from 'react-router-dom';
import SignUpForm from '../components/User/SignUpForm';
import LoginForm from '../components/User/LoginForm';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// const styles = theme => ({
//     root: {
//         ...theme.mixins.gutters(),
//         paddingTop: theme.spacing.unit * 2,
//         paddingBottom: theme.spacing.unit * 2,
//     },
// });

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
        console.log(props);
        this.state = {
            userHasAccount: false,
        }
    }
    accountJustCreated = (accountCreated) => {
        if (accountCreated === true) {
            this.setState((prevState, props) => {
                return {
                    userHasAccount: true
                }
            })
        } else {
            this.setState((prevState, props) => {
                return {
                    userHasAccount: false
                }
            })
        }
    }

    render() {
        return (
            <div id="loginContainer">
                <Route
                    path='/createAccount'
                    exact strict render={(props) =>
                        <SignUpForm
                            {...props}
                            loggedIn={this.props.loggedIn}
                            userLoggedIn={this.props.userLoggedIn}
                            retrieveToken={this.props.retrieveToken}
                        />
                    }
                />
                <Route
                    path='/login'
                    exact strict render={(props) =>
                        <LoginForm
                            {...props}
                            loggedIn={this.props.loggedIn}
                            userLoggedIn={this.props.userLoggedIn}
                            retrieveToken={this.props.retrieveToken}
                        />
                    }
                />
            </div>
        )
    }
}

export default LoginContainer;
