import {
  ADD_TO_BAG,
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM,
} from "./actionTypes";

export const getCartLoading = () => ({
  type: GET_CART_LOADING,
});

export const getCartSuccess = (data) => ({
  type: GET_CART_SUCCESS,
  payload: data,
});

export const getCartError = () => ({
  type: GET_CART_ERROR,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const addToBag = (data) => ({
  type: ADD_TO_BAG,
  payload: data,
});
