import React from 'react';
import './Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cardNumber: '',
      expirationDate: '',
      cvv: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      name: '',
      cardNumber: '',
      expirationDate: '',
      cvv: ''
    });
  }

  render() {
    return (
      <div className="Checkout">
        <div className='wrapper'>
          <h1>Payment Details</h1>
          <form onSubmit={ (e) => this.handleFormSubmit(e) }>
            <label>
              Name on Card:
              <input
                type='text'
                name='name'
                placeholder='John Doe'
                value={ this.state.name }
                onChange={ (e) => this.handleInputChange(e) } />
            </label>
            <label>
              Card Number:
              <input
                type='text'
                name='cardNumber'
                placeholder='1234-5678-8765-4321'
                value={ this.state.cardNumber }
                onChange={ (e) => this.handleInputChange(e) } />
            </label>
            <label>
              Valid Through:
              <input
                type='text'
                name='expirationDate'
                placeholder='03/21'
                value={ this.state.expirationDate }
                onChange={ (e) => this.handleInputChange(e) } />
            </label>
            <label>
              CVV:
              <input
                type='text'
                name='cvv'
                placeholder='123'
                value={ this.state.cvv }
                onChange={ (e) => this.handleInputChange(e) } />
            </label>
            <input
              type='Submit'
              value='Proceed'
              readOnly />
          </form>
        </div>
      </div>
    );
  }
}

export default Checkout;
