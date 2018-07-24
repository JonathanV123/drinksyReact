import React from 'react';
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
    margin: 8,
  },
  input: {
    display: 'none',
  },
});

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password_digest: '',
      responseMessage: null,
      accountCreated: false,
    };
  }

  handleSubmit = (event, data) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/createUser',
      data: {
        name: this.state.name,
        email: this.state.email,
        password_digest: this.state.password_digest
      }
    }).then((response) => {
      sessionStorage.setItem('jwtToken', response.data.token)
      this.setState((prevState, props) => {
        return {
          accountCreated: true,
          responseMessage: 'Account created. You may now login',
        }
      })
    }).catch((err) => {
      const errorMessage = err.response.data.message;
      this.setState({
        responseMessage: errorMessage,
      });
    });
    event.preventDefault();
  };

  clearNotification = () => {
    this.setState((prevState, props) => {
      return {
        responseMessage: ''
      }
    })
  }

  clearAndRedirect = () => {
    this.setState((prevState, props) => {
      return {
        responseMessage: ''
      }
    })
    window.location.reload();
  }

  handleChange = (email, password_digest, name) => event => {
    this.setState({
      [name]: event.target.value,
      [email]: event.target.value,
      [password_digest]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    if (this.state.accountCreated) {
      return (
        <div id="centerSignupNotification">
          <Notification
            type={'signUp'}
            responseMessage={this.state.responseMessage}
            clearAndRedirect={this.clearAndRedirect}
          />
        </div>
      )
    } else {
      return (
        <div className="loginSignupScreenContainer">
          <h1 className="filterTitle">Create Account</h1>
          <form id='signup-form' noValidate autoComplete='off' onSubmit={this.handleSubmit}>
            <TextField
              id="name"
              className={classes.textField}
              placeholder="Name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
              id="email"
              className={classes.textField}
              label="Email"
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
            />
            <TextField
              id="password-input"
              className={classes.textField}
              placeholder="Password"
              label="Password"
              type="password"
              onChange={this.handleChange('password_digest')}
              margin="normal"
            />
            <Button className={classes.button} variant="contained" type='submit' color="primary">
              Create Account
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

export default withStyles(styles)(SignUpForm);

