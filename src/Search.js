import React from "react";

const Search = ({
  handleRecipeName,
  handleInput,
  recipeName,
  inputValue,
  keyPress,
  ingredients,
  deleteIngredient,
}) => {
  return (
    <div>
      <div className="search-container">
        <h4>Recipe name</h4>
        <input type="text" onChange={handleRecipeName} value={recipeName} />
        <h4>Ingredients:</h4>
        <input
          type="text"
          onChange={handleInput}
          onKeyDown={keyPress}
          value={inputValue}
        />
        <div>
          {ingredients.map((ingredient) => (
            <div className="ingredient-container">
              <li key={ingredient}>{ingredient}</li>
              <button className="delete-btn" onClick={() => deleteIngredient(ingredient)}>
                Delete ingredient
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
