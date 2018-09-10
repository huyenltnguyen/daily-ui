import React from 'react';
import './Checkout.css';

import CheckoutForm from './CheckoutForm';

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
          <CheckoutForm
            handleFormSubmit={ this.handleFormSubmit }
            handleInputChange={ this.handleInputChange }
            { ...this.state } />
        </div>
      </div>
    );
  }
}

export default Checkout;
