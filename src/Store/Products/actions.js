import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_SEARCH,
  GET_SHIRTS_DISCOUNT,
  GET_SHIRTS_FILTERED,
  GET_SHIRTS_SUCESS,
  GET_SINGLE_PRODUCT,
} from './actionTypes';

export const getProductLoading = () => ({
  type: GET_PRODUCT_LOADING,
});

export const getShirtsSucess = (data) => ({
  type: GET_SHIRTS_SUCESS,
  payload: data,
});

export const getProductError = () => ({
  type: GET_PRODUCT_ERROR,
});

export const getShirtsDiscount = (data) => ({
  type: GET_SHIRTS_DISCOUNT,
  payload: data,
});

export const getShirtsFiltered = (data) => ({
  type: GET_SHIRTS_FILTERED,
  payload: data,
});

export const getSearch = (data) => ({
  type: GET_SEARCH,
  payload: data,
});

export const getSingleProduct = (data) => ({
  type: GET_SINGLE_PRODUCT,
  payload: data,
});
