import React from "react";

const Search = ({
  handleSearch,
  handleRecipeName,
  handleInput,
  recipeName,
  inputValue,
  keyPress,
  setIngredients,
  ingredients,
  deleteIngredient,
}) => {
  return (
    <div>
      <p>salut</p>
      <div className="search-container">
        <input type="text" onChange={handleRecipeName} value={recipeName} />
        <input
          type="text"
          onChange={handleInput}
          onKeyDown={keyPress}
          value={inputValue}
        />
        <div>
          {ingredients.map((ingredient) => (
            <div>
              <li key={ingredient}>{ingredient}</li>
              <button onClick={() => deleteIngredient(ingredient)}>
                Delete ingredient
              </button>
            </div>
          ))}
        </div>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
