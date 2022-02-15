import { createStore, combineReducers, applyMiddleware } from "redux";
import searchReducer from "../reducers/search";
import userReducer from "../reducers/user";
import postsReducer from "../reducers/posts";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
