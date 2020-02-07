import { CartActionTypes } from './cart.types';
import { addItemToCart, reduceItemQuantity } from './cart.utils';

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
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== payload.id)
      };

    case CartActionTypes.REDUCE_QUANTITY:
      return {
        ...state,
        cartItems: reduceItemQuantity(state.cartItems, payload)
      };

    default:
      return state;
  }
};

export default cartReducer;