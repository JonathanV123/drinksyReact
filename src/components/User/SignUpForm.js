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
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class SignUpForm extends React.Component {
  constructor(props) {
    super();
  }
  state = {
    name: '',
    email: '',
    password_digest: '',
    showValidationMessage: false,
  };

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
      // const user_created = true;
      // this.props.accountJustCreated(user_created);
      sessionStorage.setItem('jwtToken', response.data.token)
    }).catch((err) => {
      const errorMessage = err.response.data.message;
      this.props.renderResponse(errorMessage)
    });
    event.preventDefault();
  };

  handleChange = (email, password_digest, name) => event => {
    this.setState({
      [name]: event.target.value,
      [email]: event.target.value,
      [password_digest]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    if (this.props.loggedIn) {
      return (
        <Redirect to="/home" />
      )
    } else {
      return (
        <div>
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
            <Button variant="contained" type='submit' color="primary">
              Create Account
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

export default withStyles(styles)(SignUpForm);

