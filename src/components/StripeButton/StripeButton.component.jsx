import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
  const priceStripe = price * 100;
  const publishableKey = 'pk_test_JZYCJaS8y5sqjqsqMXzXNutr00tjlc4UHX';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful');
  }

  return (
      <StripeCheckout
        label='Pay now'
        name='Ecommerce React'
        billingAddress
        shipingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
  );
};

export default StripeButton;