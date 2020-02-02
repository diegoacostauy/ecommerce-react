import { createSelector } from 'reselect';

// Input Selector
// Its a function that gets the hole state and just return a slice of it.
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulated, item) => accumulated + item.quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalPrice, item) => (
    totalPrice + (item.price * item.quantity)
  ), 0)
)