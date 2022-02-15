export const TO_SEARCH = (searchValue) => {
  return {
    type: "TO_SEARCH",
    payload: {
      searchValue,
    },
  };
};
