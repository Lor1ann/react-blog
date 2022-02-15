const initialState = {
  searchValue: "",
};

function searchReducer(state = initialState, action) {
  if (action.type === "TO_SEARCH") {
    return {
      searchValue: action.payload.searchValue,
    };
  }
  return state;
}

export default searchReducer;
