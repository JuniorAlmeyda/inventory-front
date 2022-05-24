/* eslint-disable default-param-last */
import { USER_CREATE } from "../types/userTypes";

const initialState = {
  usuario: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CREATE:
      return {
        ...state,
        usuario: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
