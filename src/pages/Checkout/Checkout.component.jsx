import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeButton from '../../components/StripeButton/StripeButton.component';

import {
  CheckoutPage,
  CheckoutHeader,
  HeaderBlock,
  Total,
  Warning
} from './Checkout.styles';

const Checkout = ({cartItems, cartTotal}) => {
  return (
    <CheckoutPage>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {
        cartItems.map(item => (
          <CheckoutItem key={item.id} cartItem={item}/>
        ))
      }

      <Total>
        <span>
          TOTAL: $ {cartTotal}
        </span>
      </Total>

      <Warning>
        * Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: Date > Now - CVV: Any 3 digits
      </Warning>

      <StripeButton price={cartTotal} />

    </CheckoutPage>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});


export default connect(mapStateToProps)(Checkout);