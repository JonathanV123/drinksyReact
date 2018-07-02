import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
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
        this.state = {
            userHasAccount: false,
        }
    }
    accountCreated = (accountCreated) => {
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
                    <SignUpForm
                        accountCreated={this.accountCreated}
                        loggedin={this.props.loggedIn}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <AccountCreatedNotifcation />
                    <LoginForm
                        loggedin={this.props.loggedIn}
                        userLoggedIn={this.props.userLoggedIn}
                    />
                </div>
            )
        }

    }
}

export default LoginContainer;
