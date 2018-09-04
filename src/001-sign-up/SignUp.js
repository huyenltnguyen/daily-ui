import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      username: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div className='Sign-Up'>
        <div className='wrapper'>
          <h1>Sign Up</h1>
          <form onSubmit={ (e) => this.handleFormSubmit(e) }>
            <input
              aria-label='Username'
              type='text'
              name='username'
              placeholder='Username'
              value={ this.state.username }
              onChange={ (e) => this.handleInputChange(e) } />
            <input
              aria-label='Email'
              type='email'
              name='email'
              placeholder='Email'
              value={ this.state.email }
              onChange={ (e) => this.handleInputChange(e) } />
            <input
              aria-label='Password'
              type='password'
              name='password'
              placeholder='Password'
              value={ this.state.password }
              onChange={ (e) => this.handleInputChange(e) } />
            <input
              className='submit-btn'
              type='Submit'
              value='Sign Up'
              readOnly />
          </form>
        </div>
      </div>
    );
  }
};

export default SignUp;
