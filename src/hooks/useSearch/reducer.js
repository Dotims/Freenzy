export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_PHRASE": {
      return { ...state, searchPhrase: action.data };
    }
  }
};
