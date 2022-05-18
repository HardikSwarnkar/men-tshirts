import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

const initState = { status: false };

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        status: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
};
