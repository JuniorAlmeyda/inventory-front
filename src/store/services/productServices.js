import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';

export const postAddProduct = async ({
  nombre,
  categoria,
  precio,
  description,
}) => {
  const data = {
    nombre,
    categoria,
    precio,
    description,
  };
  const url = `${URL_BASE}/api/productos`;
  const token = JSON.parse(localStorage.getItem('token'));

  const config = {
    method: 'post',
    url,

    headers: {
      'Content-Type': 'application/json',
      'x-token': token,
    },
    data,
  };
  try {
    const res = await axios(config);
    return res;
  } catch (error) {
    console.log(
      '🚀 ~ file: categoryServices.js ~ line 28 ~ postAddCategory ~ error',
      error
    );
    return error;
  }
};
export const getProducts = async () => {
  const url = `${URL_BASE}/api/productos`;

  const config = {
    method: 'get',
    url,
  };
  try {
    const res = await axios(config);
    return res;
  } catch (error) {
    console.log(
      '🚀 ~ file: categoryServices.js ~ line 28 ~ postAddCategory ~ error',
      error
    );
    return error;
  }
};
