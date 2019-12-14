import { CartActionTypes } from './cart.types';

const initialState = {
  hidden: true
};

const cartReducer = (state = initialState, { type }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};

export default cartReducer;