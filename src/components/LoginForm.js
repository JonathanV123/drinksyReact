import React, { Component } from 'react';




class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
            <input type="text" name='email' value={this.state.value} />
        </label>
        <label>
          Password:
            <input type="text" name='password' value={this.state.value} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginForm;