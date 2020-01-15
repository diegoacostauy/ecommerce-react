import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      }

    default:
      return state;
  }
};

export default cartReducer;