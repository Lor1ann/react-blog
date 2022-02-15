const initialState = {};

export default function postsReducer(state = initialState, action) {
  if (action.type === "GET_POSTS") {
    return {
      ...state,
      posts: action.payload,
    };
  }
  return state;
}
