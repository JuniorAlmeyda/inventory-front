import axios from "axios";

const URL_BASE = process.env.REACT_APP_API_URL_BASE || "http://localhost:8081";

const postUser = async (form) => {
  const data = {
    nombre: form.nombre,
    correo: form.correo,
    password: form.password,
    rol: form.rol,
  };
  const url = `${URL_BASE}/api/usuarios/api`;
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
    return error;
  }
};
export default postUser;
