import { LOGIN_SUCCESSFUL, LOGIN_FAILURE, LOGOUT } from "../types/authTypes";
import postLogin from "../services/AuthServices";

export const loginUserSucess = (user) => ({
  type: LOGIN_SUCCESSFUL,
  payload: user,
});

export const loginUserFailure = () => ({
  type: LOGIN_FAILURE,
  payload: null,
});

export const logoutUser = () => ({
  type: LOGOUT,
  payload: null,
});

export const fetchLogin = (email, password) => async (dispatch) => {
  const res = await postLogin(email, password);
  if (res.statusText !== "OK") {
    dispatch(loginUserFailure());
    return;
    // return usuario;
  }
  const user = res.data;
  localStorage.setItem("token", JSON.stringify(user.token));
  dispatch(loginUserSucess(user));
  return "ok";
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch(logoutUser());
};
