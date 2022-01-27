const initialState = {};

export default function userReducer(state = initialState, action) {
  if (action.type === "SET_USER_DATA") {
    return { ...state, ...action.payload.data };
  }

  if (action.type === "USER_LOGOUT") {
    return { ...state };
  }
  return state;
}
