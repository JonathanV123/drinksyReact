import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Notification from '../Presentational/Notification';
import LoaderAnimation from '../Presentational/Loaders';
import PropTypes from 'prop-types';

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
      confirm_password_digest: '',
      responseMessage: null,
      accountCreated: false,
      loading: false,
    };
  }

  handleSubmit = (event, data) => {
    event.preventDefault();
    if (this.state.password_digest !== this.state.confirm_password_digest) {
      this.setState((prevState, props) => {
        return {
          responseMessage: 'Passwords do not match. Try again.'
        }
      })
    } else {
      this.setState((prevState, props) => {
        return {
          loading: true,
        }
      })
      axios({
        method: 'post',
        url: 'https://drinkys.herokuapp.com/createUser',
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
            loading: false,
            responseMessage: 'Account created. Logging you in.',
          }
        })
      }).catch((err) => {
        const errorMessage = err.response.data.message;
        this.setState({
          loading: false,
          responseMessage: errorMessage,
        });
      });
    };
  }

  // Clear any error notifcations.
  clearNotification = () => {
    this.setState((prevState, props) => {
      return {
        responseMessage: ''
      }
    })
  }

  // Clear notification of account creation and login.
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
    if (this.state.loading === true) {
      return (
        <div>
          <LoaderAnimation />
        </div>
      )
    }
    // If account is successfully created, notify user the user and login.
    else if (this.state.accountCreated) {
      return (
        <div id="centerSignupNotification">
          <Notification
            type={'signUp'}
            responseMessage={this.state.responseMessage}
            clearAndRedirect={this.clearAndRedirect}
          />
        </div>
      )
      // Show the sign up form  
    } else {
      return (
        <div className="loginSignupScreenContainer">
          <h1 className="drinksyHeader">Create Account</h1>
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
            <TextField
              id="password-confirm"
              className={classes.textField}
              placeholder="confirm"
              label="Confirm Password"
              type="password"
              onChange={this.handleChange('confirm_password_digest')}
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

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);

