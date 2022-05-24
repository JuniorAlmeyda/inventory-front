/* eslint-disable default-param-last */
import { LOGIN_FAILURE, LOGIN_SUCCESSFUL, LOGOUT } from "../types/authTypes";

const initialState = {
  token: JSON.parse(localStorage.getItem("token")) ?? "",
  user: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.usuario,
      };
    case LOGIN_FAILURE:
      return {
        token: action.payload,
      };
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
