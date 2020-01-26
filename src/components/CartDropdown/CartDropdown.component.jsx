import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button.component';
import CartItem from  '../CartItem/CartItem.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './CartDropdown.styles.scss';


const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(item => <CartItem item={item} key={item.id} /> )
      }
    </div>
    <Button>
      Go to checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);