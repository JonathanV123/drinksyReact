import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Notification from '../Presentational/Notification';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class LoginForm extends Component {
    constructor(props) {
        super();
        console.log(props);
    }
    state = {
        email: '',
        password_digest: '',
    };


    handleChange = (email, password_digest) => event => {
        this.setState({
            [email]: event.target.value,
            [password_digest]: event.target.value,
        });
    };

    handleSubmit = (event, data) => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            data: {
                email: this.state.email,
                password_digest: this.state.password_digest
            }
        }).then((response) => {
            sessionStorage.setItem('jwtToken', response.data.token)
            this.props.userInfo(response.data.user_profile);
            this.props.userLoggedIn();
        }).catch((err) => {
            const errorMessage = err.response.data.message;
            this.props.renderResponse(errorMessage)
        })
        event.preventDefault();
    };

    render() {
        const userId = this.props.userProfile.userId
        const { classes } = this.props;
        if (this.props.loggedIn) {
            return (
                <Redirect to={{ pathname: `/home/${userId}` }} />
            )
        } else {
            return (
                <div>
                    <form id='login-form' noValidate autoComplete='off' onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            label="Email"
                            value={this.state.email}
                            className={classes.textField}
                            onChange={this.handleChange('email')}
                            margin="normal"
                        />
                        <TextField
                            id="password-input"
                            placeholder="Password"
                            className={classes.textField}
                            label="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password_digest')}
                            margin="normal"
                        />
                        <Button variant="contained" onClick={this.handleSubmit} color="primary">
                            Login
                    </Button>
                    </form>
                    <Notification
                        responseMessage={this.state.responseMessage}
                        showNotification={this.state.showNotification}
                        clearNotification={this.clearNotification}
                    />
                </div>
            );
        }
    }
}
export default withStyles(styles)(LoginForm);


