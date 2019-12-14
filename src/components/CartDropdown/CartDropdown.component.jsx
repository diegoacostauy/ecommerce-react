import React from 'react';
import Button from '../Button/Button.component';
import './CartDropdown.styles.scss';


const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      Items
    </div>
    <Button>
      Go to checkout
    </Button>
  </div>
);

export default CartDropdown;