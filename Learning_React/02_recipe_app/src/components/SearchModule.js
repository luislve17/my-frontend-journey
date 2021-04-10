import React, { useEffect, useRef, useContext } from "react";
import { SearchContext } from "./SearchContext";
import "./SearchModule.css";

export const SearchModule = () => {
  const [recipes, setRecipes, search, setSearch, query, setQuery] = useContext(
    SearchContext
  );

  const API_ID = "<replace API_ID from edamam>";
  const API_KEY = "<replace API_KEY from edamam>";
  const refValues = useRef({ recipes, search, query });

  useEffect(() => {
    if (refValues.current.query !== query) {
      refValues.current.query = query;
      getRecipes();
    }
  });

  useEffect(() => {
    if (refValues.current.recipes !== recipes) {
      refValues.current.recipes = recipes;
    }
  });

  useEffect(() => {
    if (refValues.current.search !== search) {
      refValues.current.search = search;
    }
  });

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  return (
    <div className="search-module-container">
      <h1 className="search-module-title">
        Recipe
        <br />
        Search
      </h1>
      <form onSubmit={getSearch} action="" className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        <div className="search-button-container">
          <button className="search-button" type="submit">
            Submit
          </button>
          <hr className="search-button-indicator" />
        </div>
      </form>
    </div>
  );
};

export default SearchModule;
