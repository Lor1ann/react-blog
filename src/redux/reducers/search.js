export default function search(state, action) {
  if (action.type === "TO_SEARCH") {
    return [
      {
        searchValue: action.payload.searchValue,
      },
    ];
  }
  return state;
}
