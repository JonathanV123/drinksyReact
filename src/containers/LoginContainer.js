import React, { Component } from 'react';
import { Route, Link, } from 'react-router-dom';
import SignUpForm from '../components/User/SignUpForm';
import LoginForm from '../components/User/LoginForm';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

const Notification = (props) => {
    if (props.showNotification) {
        return (
            <Paper elevation={5}>
                <Typography variant="headline" component="h3">
                    {props.responseMessage}
                </Typography>
                <Button variant="contained" onClick={props.clearNotification} color="primary">
                    Ok
                </Button>
            </Paper>
        )
    } else {
        return null;
    }
}

const SignUp = (props) => {
    return (
        <div>
            <div className="welcomeContainer">
                <h1>Welcome to Drinksy!</h1>
            </div>
            <div className="blankForNow">
                <nav id="loginNav">
                    <Link className="navBarLink" to={'/createAccount'}>Create Account</Link>
                    <h2> Or </h2>
                    <Link className="navBarLink" to={'/login'}>Login</Link>
                </nav>
            </div>
        </div>
    )
}

const Test = (props) => {
    return (
        <div>
            <div className="testingContainer">
                <h1>Woah!</h1>
            </div>
        </div>
    )
}

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userHasAccount: false,
            showNotification: false,
            responseMessage: '',
        }
    }

    clearNotification = () => {
        this.setState((prevState, props) => {
            return {
                showNotification: false,
                responseMessage: ''
            }
        })
    }

    renderResponse = (err) => {
        console.log(err);
        if (err) {
            this.setState((prevState, props) => {
                return {
                    showNotification: true,
                    responseMessage: err
                }
            })
        }
    }

    render() {
        return (
            <div id="loginContainer">
                <SignUp />
                <Route
                    path='/createAccount'
                    render={(props) =>
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
                    render={(props) =>
                        <LoginForm
                            {...props}
                            loggedIn={this.props.loggedIn}
                            userLoggedIn={this.props.userLoggedIn}
                            retrieveToken={this.props.retrieveToken}
                            renderResponse={this.renderResponse}
                        />
                    }
                />
                <Route
                    path='/test'
                    exact strict render={(props) =>
                        <Test
                            {...props}
                            loggedIn={this.props.loggedIn}
                            userLoggedIn={this.props.userLoggedIn}
                            retrieveToken={this.props.retrieveToken}
                        />
                    }
                />
                <Notification
                    responseMessage={this.state.responseMessage}
                    showNotification={this.state.showNotification}
                    clearNotification={this.clearNotification}
                />
            </div>
        )
    }
}

export default withStyles(styles)(LoginContainer);

