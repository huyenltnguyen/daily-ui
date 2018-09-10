import React from 'react';

const CheckoutForm = (props) => {
  return (
    <div className='CheckoutForm'>
      <h1>Payment Details</h1>
      <form onSubmit={ (e) => props.handleFormSubmit(e) }>
        <label>
          Name on Card:
          <input
            type='text'
            name='name'
            placeholder='John Doe'
            value={ props.name }
            onChange={ (e) => props.handleInputChange(e) } />
        </label>
        <label>
          Card Number:
          <input
            type='text'
            name='cardNumber'
            placeholder='1234-5678-8765-4321'
            value={ props.cardNumber }
            onChange={ (e) => props.handleInputChange(e) } />
        </label>
        <label>
          Valid Through:
          <input
            type='text'
            name='expirationDate'
            placeholder='03/21'
            value={ props.expirationDate }
            onChange={ (e) => props.handleInputChange(e) } />
        </label>
        <label>
          CVV:
          <input
            type='text'
            name='cvv'
            placeholder='123'
            value={ props.cvv }
            onChange={ (e) => props.handleInputChange(e) } />
        </label>
        <input
          type='Submit'
          value='Pay $100.00'
          readOnly />
      </form>
    </div>
  );
};

export default CheckoutForm;
