import React from 'react';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">
        { itemCount }
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

// This is a REDUX SELECTOR, we get only a part of state, we compute
// out a new value based of the state. This is how redux suggest we do
// but the caveat here is every time state change including user related,
// the reduce function will run
//
// A “selector” is simply a function that accepts Redux state as an argument
// and returns data that is derived from that state.
// https://medium.com/@matthew.holman/what-is-a-redux-selector-a517acee1fe8
//
// const mapStateToProps = ({ cart: { cartItems } }) => {
//   return ({
//     itemCount: cartItems.reduce((accumulated, item) => accumulated + item.quantity, 0)
//   })
// }

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);