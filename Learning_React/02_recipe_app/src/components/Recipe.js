import React from "react";
import "./Recipe.css";

const Recipe = ({ label, ingredients, calories, image }) => {
  return (
    <div className="recipe-container">
      <h3 className="recipe-label">
        {label} <br /> ({calories.toFixed(1)} cal.)
      </h3>
      <div className="recipe-specs-container">
        <div className="image-container">
          <img className="recipe-image" src={image} alt="" />
        </div>
        <ul className="recipe-ingredients-list">
          {ingredients.map((ingredient) => (
            <li className="recipe-ingredients-item">{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
