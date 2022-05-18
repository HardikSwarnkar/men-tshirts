import {
  ADD_TO_BAG,
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM,
} from "./actionTypes";

const init = {
  loading: false,
  error: false,
  cart: [],
  mrp: 0,
  discountPrice: 0,
};

export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: payload,
        error: false,
      };
    }
    case GET_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case REMOVE_CART_ITEM: {
      return {
        ...state,
        loading: false,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    }
    case ADD_TO_BAG: {
      return {
        ...state,
        loading: false,
        cart: [...state.cart, payload],
      };
    }
    default: {
      return state;
    }
  }
};
