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

const SignUp = () => {
    return (
        <div className="homePageContainer">
            <div className="welcomeContainer">
                <h1>Welcome to Drinksy!</h1>
            </div>
            <div className="blankForNow">
                <nav>
                    <Link className="navBarLink" to={'/createAccount'}>Create Account</Link>
                    <Link className="navBarLink" to={'/login'}>Login</Link>
                </nav>
            </div>
        </div>
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
        const token = sessionStorage.getItem('jwtToken');
        if (this.state.userHasAccount) {
            return (
                <div className="formContainer">
                    <LoginForm
                        loggedin={this.props.loggedIn}
                        userLoggedIn={this.props.userLoggedIn}
                        accountJustCreated={this.accountJustCreated}
                    />
                </div>
            )
        } else {
            return (
                <div className="formContainer">
                    <SignUpForm
                        accountJustCreated={this.accountJustCreated}
                        loggedin={this.props.loggedIn}
                        retrieveToken={this.props.retrieveToken}
                    />
                </div>
            )
        }

    }
}

export default LoginContainer;
