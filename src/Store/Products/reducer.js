import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_SEARCH,
  GET_SHIRTS_DISCOUNT,
  GET_SHIRTS_FILTERED,
  GET_SHIRTS_SUCESS,
  GET_SINGLE_PRODUCT,
} from './actionTypes';

const init = {
  loading: false,
  error: false,
  shirt: [],
  search: [],
  singleProduct: [],
};
export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SHIRTS_SUCESS: {
      return {
        ...state,
        loading: false,
        shirt: payload,
      };
    }
    case GET_SHIRTS_DISCOUNT: {
      return {
        ...state,
        loading: false,
        shirt: payload,
      };
    }
    case GET_SHIRTS_FILTERED: {
      return {
        ...state,
        loading: false,
        shirt: payload,
      };
    }

    case GET_SEARCH: {
      return {
        ...state,
        search: payload,
        loading: false,
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_SINGLE_PRODUCT: {
      return {
        ...state,
        singleProduct: [payload],
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
