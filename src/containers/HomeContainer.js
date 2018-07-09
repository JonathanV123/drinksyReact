import React, { Component } from 'react';
import { Route, Link, } from 'react-router-dom';
import SignUpForm from '../components/User/SignUpForm';
import LoginForm from '../components/User/LoginForm';
import Dashboard from '../components/Dashboard';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
});

const Notification = (props) => {
    if (props.showNotification) {
        return (
            <Paper className="paperNotifcationContainer" elevation={5}>
                <Typography className="paperNotifcation" variant="headline" component="h3">
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



class HomeContainer extends Component {
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
        if (this.props.loggedIn) {
            return (
                <Route
                    path='/dashboard'
                    render={(props) =>
                        <Dashboard
                            {...props}
                            loggedIn={this.props.loggedIn}
                            userLoggedIn={this.props.userLoggedIn}
                            retrieveToken={this.props.retrieveToken}
                        />
                    }
                />
            )
        } else {
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
                                renderResponse={this.renderResponse}
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
                    <Notification
                        responseMessage={this.state.responseMessage}
                        showNotification={this.state.showNotification}
                        clearNotification={this.clearNotification}
                    />
                </div>
            )
        }

    }
}

export default withStyles(styles)(HomeContainer);

