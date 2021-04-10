import React, { useContext } from "react";
import { SearchContext } from "./SearchContext";
import Recipe from "./Recipe";
import "./RecipeCanvas.css";

const RecipesCanvas = () => {
  const [recipes] = useContext(SearchContext);
  console.log(recipes);

  return (
    <div className="recipe-canvas-container">
      {recipes.map((recipe) => (
        <Recipe
          label={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default RecipesCanvas;
