import axios from 'axios';
import {
  ADD_TO_WISHLIST,
  GET_ITEMS_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from './actionTypes';

export const getWishlist = (data) => ({
  type: GET_ITEMS_TO_WISHLIST,
  payload: data,
});
export const addToWishlist = (item) => async (dispatch) => {
  var data = await axios.post('https://myntradb.herokuapp.com/wishlist', item);
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: item,
  });
};

export const removeFromWishlist = (id) => async (dispatch) => {
  var data = await axios.delete(
    'https://myntradb.herokuapp.com/wishlist/' + id,
  );

  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: id,
  });
};
