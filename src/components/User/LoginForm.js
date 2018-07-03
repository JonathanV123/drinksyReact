import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Menuitem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
        const token = sessionStorage.getItem('jwtToken')
        console.log(token);
        console.log('YAY!');
        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            headers: { 'Authorization': 'bearer ' + token },
            data: {
                email: this.state.email,
                password_digest: this.state.password_digest
            }
        }).then((response) => {
            const clearAcctCreation = false;
            this.props.accountJustCreated(clearAcctCreation);
            this.props.userLoggedIn();
        }).catch((err) => {
            console.log(err)
        })
        event.preventDefault();
    };

    render() {
        const { classes } = this.props;
        return (
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
                {/* <Link to={'/home'}> */}
                <Button variant="contained" type='submit' color="primary">
                    Login
                    </Button>
                {/* </Link> */}
            </form>
        );
    }
}

export default withStyles(styles)(LoginForm);

