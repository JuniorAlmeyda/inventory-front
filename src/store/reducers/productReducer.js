/* eslint-disable default-param-last */
import { GET_PRODUCT } from "../types/productTypes";

const initialState = {
  productos: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        productos: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
