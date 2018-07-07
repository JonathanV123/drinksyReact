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

const Notification = (props) => {
    if (props.showNotification) {
        return (
            <Paper elevation={5}>
                <Typography variant="headline" component="h3">
                    {/* {props.responseMessage} */}
                </Typography>
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

    renderResponse = (err) => {
        console.log(err.stack);
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
                <Notification responseMessage={this.state.responseMessage} showNotification={this.state.showNotification} />
            </div>
        )
    }
}

export default LoginContainer;
