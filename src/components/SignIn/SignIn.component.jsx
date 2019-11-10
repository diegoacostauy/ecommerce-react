import React, { Component } from 'react'
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = e => {
    e.preventDefault();
    const { type, value } = e.target;

    this.setState({[type]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            label="Password"
            required
          />
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    )
  }
}
