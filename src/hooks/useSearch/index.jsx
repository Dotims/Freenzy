import { useContext, useReducer } from "react";
import { SearchContext, defaultState } from "./context";
import { reducer } from "./reducer";

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const setSearchPhrase = (data) => {
    dispatch({ type: "SET_SEARCH_PHRASE", data });
  };

  return (
    <SearchContext.Provider value={{ ...state, setSearchPhrase }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
