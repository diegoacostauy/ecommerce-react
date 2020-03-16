import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import Button from '../Button/Button.component';
import CartItem from  '../CartItem/CartItem.component';
import { CartDropdownContainer } from './CartDropdown.styles.jsx';


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <div className="cart-items">
      {
        cartItems.length ?
          cartItems.map(item => <CartItem item={item} key={item.id} />) :
          <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <Button onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartDropdown());
    }}>
      Go to checkout
    </Button>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// HOC connect provides a dispatch method in props
// we can use dispatch directly in our props instead of writing mapDispatch...
// const mapDispatchToProps = dispatch => ({
//   toggleCartDropdown: () => dispatch(toggleCartDropdown())
// })

export default withRouter(connect(mapStateToProps)(CartDropdown));