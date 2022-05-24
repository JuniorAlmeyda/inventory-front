import postUser from "../services/UserServices";
import { USER_CREATE } from "../types/userTypes";

export const loginUserSucess = (user) => ({
  type: USER_CREATE,
  payload: user.usuario,
});

export const fetchLogin = (form) => async (dispatch) => {
  const res = await postUser(form);
  if (res.statusText !== "OK") {
    return;
  }
  const user = res.data;
  dispatch(loginUserSucess(user));
  return user;
};
