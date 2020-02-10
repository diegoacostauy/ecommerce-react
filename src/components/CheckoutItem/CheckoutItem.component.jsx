import React from 'react';
import { connect } from 'react-redux';
import { removeItem, reduceQuantity, addItem } from '../../redux/cart/cart.actions';

import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem, cartItem: { name, imageUrl, price, quantity}, addItem, removeItem, reduceQuantity }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=> reduceQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">
          {quantity}
        </span>
        <div className="arrow" onClick={()=> addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={()=> removeItem(cartItem)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    reduceQuantity: cartItem => dispatch(reduceQuantity(cartItem)),
  }
};

export default connect(null, mapDispatchToProps)(CheckoutItem)