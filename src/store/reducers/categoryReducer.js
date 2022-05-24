/* eslint-disable default-param-last */
import { GET_CATEGORIES } from "../types/categoryTypes";

const initialState = {
  categorias: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categorias: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
