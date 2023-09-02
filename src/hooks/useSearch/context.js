import React from "react";

export const defaultState = {
  searchPhrase: "",
};

export const SearchContext = React.createContext({
  ...defaultState,
  setSearchPhrase: (data) => undefined,
});
