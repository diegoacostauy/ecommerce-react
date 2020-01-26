import { createSelector } from 'reselect';

// Input Selector
// Its a function that gets the hole state and just return a slice of it.
const selectCart = state => state.cart;



// This is a memoize selector because use createSelector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulated, item) => accumulated + item.quantity, 0)
)

