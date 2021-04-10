import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  return (
    <SearchContext.Provider
      value={[recipes, setRecipes, search, setSearch, query, setQuery]}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
