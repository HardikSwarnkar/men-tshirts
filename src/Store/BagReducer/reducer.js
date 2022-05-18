import { ADD_TO_BAG, GET_ITEMS_TO_BAG, REMOVE_FROM_BAG } from "./actionTypes";


export const bagReducer = (state = [], action) => {
    switch( action.type ) {
        case GET_ITEMS_TO_BAG:
            return [...action.payload];
        case ADD_TO_BAG:
            return [...state, action.payload]
        case REMOVE_FROM_BAG:
            state = state.filter(({id}) => id !== action.payload);
            return [...state]
        default:
            return state;
    }
}      