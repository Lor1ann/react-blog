import { createStore, combineReducers } from "redux";
import searchReducer from "../reducers/search";
import userReducer from "../reducers/user";
import postsReducer from "../reducers/posts";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer);

export default store;
