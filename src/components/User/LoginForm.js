import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Notification from '../Presentational/Notification';
import LoaderAnimation from '../Presentational/Loaders';


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
        super(props);
        this.state = {
            email: '',
            password_digest: '',
            responseMessage: null,
            loading: false,
        };
    }

    handleChange = (email, password_digest) => event => {
        this.setState({
            [email]: event.target.value,
            [password_digest]: event.target.value,
        });
    };

    handleSubmit = (event, data) => {
        this.setState((prevState, props) => {
            return {
                loading: true,
            }
        });
        axios({
            method: 'post',
            url: 'https://drinkys.herokuapp.com/login',
            data: {
                email: this.state.email,
                password_digest: this.state.password_digest
            }
        }).then((response) => {
            this.setState((prevState, props) => {
                return {
                    loading: false
                }
            })
            // Set token from server to session storage
            sessionStorage.setItem('jwtToken', response.data.token)
            const token = sessionStorage.getItem('jwtToken');
            // Verify the token, so that app has access to user information
            this.props.verifyToken(token);
        }).catch((err) => {
            this.setState({
                responseMessage: err.response.data.message,
            });
        })
        event.preventDefault();
    };

    // Clear notifications telling user if incorrect password, email, ect...
    clearNotification = () => {
        this.setState((prevState, props) => {
            return {
                responseMessage: ''
            }
        })
    }

    render() {
        const { classes } = this.props;
        console.log(this.state.loading)
        if (this.state.loading === true) {
            return (
                <LoaderAnimation />
            )
        } else {
            return (
                <div className="loginSignupScreenContainer">
                    <h1 className="filterTitle">Login</h1>
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
                        clearNotification={this.clearNotification}
                    />
                </div>
            );
        }
    }
}
export default withStyles(styles)(LoginForm);


