import { instance } from "../../axios";

const token = JSON.parse(localStorage.getItem("token"));

export const SET_USER_DATA = () => async (dispatch) => {
  const data = await instance.get("auth/me", {
    headers: { Authorization: token },
  });
  dispatch({ type: "SET_USER_DATA", payload: data });
};

export const USER_LOGOUT = () => {
  return {
    type: "USER_LOGOUT",
  };
};
