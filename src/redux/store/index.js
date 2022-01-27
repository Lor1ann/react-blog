import { createStore, combineReducers } from "redux";
import searchReducer from "../reducers/search";
import userReducer from "../reducers/user";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
