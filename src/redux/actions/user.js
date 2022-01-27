export const SET_USER_DATA = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: { data },
  };
};

export const USER_LOGOUT = () => {
  return {
    type: "USER_LOGOUT",
  };
};
