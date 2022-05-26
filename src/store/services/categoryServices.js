import axios from "axios";

const URL_BASE = process.env.REACT_APP_API_URL_BASE || "http://localhost:8081";

export const postAddCategory = async (nombre) => {
  const data = {
    nombre,
  };
  const url = `${URL_BASE}/api/categorias`;
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    method: "post",
    url,

    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    data,
  };
  try {
    const res = await axios(config);
    return res;
  } catch (error) {
    console.log(
      "🚀 ~ file: categoryServices.js ~ line 28 ~ postAddCategory ~ error",
      error
    );
    return error;
  }
};
export const getCategory = async () => {
  const url = `${URL_BASE}/api/categorias`;

  const config = {
    method: "get",
    url,
  };
  try {
    const res = await axios(config);
    return res;
  } catch (error) {
    console.log(
      "🚀 ~ file: categoryServices.js ~ line 28 ~ postAddCategory ~ error",
      error
    );
    return error;
  }
};
export const editCategory = async (id,nombre) => {
  const data = {
    nombre
  };
  const url = `${URL_BASE}/api/categorias/${id}`;
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    method: "put",
    url,
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    data,
  };
  try {
    const res = await axios(config);
    console.log('🚀 ~ file: categoryServices.js ~ line 69 ~ editCategory ~ res', res)
    return res;
  } catch (error) {
    console.log(
      "🚀 ~ file: categoryServices.js ~ line 28 ~ postAddCategory ~ error",
      error
    );
    return error;
  }
};
export const deleteCategoryById = async (id) => {
  const url = `${URL_BASE}/api/categorias/${id}`;
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    method: "delete",
    url,
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
  };
  try {
    const res = await axios(config);
    return res;
  } catch (error) {
    console.log(
      "🚀 ~ file: categoryServices.js ~ line 28 ~ postAddCategory ~ error",
      error
    );
    return error;
  }
};