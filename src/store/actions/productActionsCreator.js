import { getProducts } from "../services/productServices";
import { GET_PRODUCT } from "../types/productTypes";

export const products = (categories) => ({
  type: GET_PRODUCT,
  payload: categories.productos,
});

export const fetchProducts = () => async (dispatch) => {
  const res = await getProducts();
  if (res.statusText !== "OK") {
    return;
  }
  dispatch(products(res.data));
  return "ok";
};
