import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './Checkout.styles.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeButton from '../../components/StripeButton/StripeButton.component';

const Checkout = ({cartItems, cartTotal}) => {
  console.log(cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {
        cartItems.map(item => (
          <CheckoutItem key={item.id} cartItem={item}/>
        ))
      }

      <div className="total">
        <span>
          TOTAL: $ {cartTotal}
        </span>
      </div>

      <div className="test-warning">
        * Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: Date > Now - CVV: Any 3 digits
      </div>

      <StripeButton price={cartTotal} />

    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});


export default connect(mapStateToProps)(Checkout);