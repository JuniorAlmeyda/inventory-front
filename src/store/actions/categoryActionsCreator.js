import { getCategory } from "../services/categoryServices";
import { GET_CATEGORIES } from "../types/categoryTypes";

export const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  payload: categories.categorias,
});

export const fetchCategories = () => async (dispatch) => {
  const res = await getCategory();
  if (res.statusText !== "OK") {
    return;
  }
  const categorias = res.data;
  dispatch(getCategories(categorias));
  return "ok";
};
