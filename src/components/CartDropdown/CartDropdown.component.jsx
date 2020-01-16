import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button.component';
import CartItem from  '../CartItem/CartItem.component';
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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);