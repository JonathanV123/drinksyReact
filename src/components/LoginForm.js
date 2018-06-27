import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menuitem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


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

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    showValidationMessage: false,
  };

  handleChange = (email, password) => event => {
    this.setState({
      [email]: event.target.value,
      [password]: event.target.value,
    });
    console.log(this.state);
  };


  handleSubmit(event) {
    const state = this.state;
    if(state.email === ''){

    }
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
    const validation = 'Required';

    return (
      <form id='login-form' noValidate autocomplete='off' onSubmit={this.handleSubmit}>
        <TextField
          id="error"
          label="error"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
          id="password-input"
          placeholder="Password"
          label="Password"
          type="password"
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <Button variant="contained" type='submit' color="primary">
          Login
        </Button>
      </form>
    );
  }
}

export default LoginForm;