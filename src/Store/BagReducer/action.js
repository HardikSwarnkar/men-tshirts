import axios from "axios";
import { ADD_TO_BAG, GET_ITEMS_TO_BAG, REMOVE_FROM_BAG } from "./actionTypes";

export const getItemsToBag = () => async (dispatch) => {
  var data = await axios.get("https://tangy-watery-scion.glitch.me/todos5");
  data = data.data;

  console.log(data);

  dispatch({
    type: GET_ITEMS_TO_BAG,
    payload: data,
  });
};

// export const addToBag = (item) => async (dispatch) => {
//     var data = await axios.post("https://tangy-watery-scion.glitch.me/todos5", item);
//     dispatch({
//         type: ADD_TO_BAG,
//         payload: item
//     })
// }

export const removeFromBag = (id) => async (dispatch) => {
  var data = await axios.delete(
    "https://tangy-watery-scion.glitch.me/todos5/" + id
  );

  dispatch({
    type: REMOVE_FROM_BAG,
    payload: id,
  });
};
