import React from "react";
import "./App.css";
import { SearchProvider } from "./components/SearchContext";
import SearchModule from "./components/SearchModule";
import RecipesCanvas from "./components/RecipeCanvas";

const App = () => {
  return (
    <SearchProvider>
      <div className="App">
        <SearchModule />
        <RecipesCanvas />
      </div>
    </SearchProvider>
  );
};

export default App;
