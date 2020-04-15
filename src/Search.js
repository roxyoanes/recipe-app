import React from "react";

const Search = ({handleSearch, handleRecipeName, handleInput, recipeName, inputValue, keyPress, setIngredients, ingredients}) => {

  return(
  <div>
    <p>salut</p>
    <div className="search-container">
      <input type="text" onChange={handleRecipeName} value={recipeName} />
      <input type="text" onChange={handleInput} onKeyDown={keyPress} value={inputValue} />
      <div>
        {ingredients.map((ingredient) =>(
          <li key={ingredient}>{ingredient}</li>
        ))}
      </div>
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  </div>
  )
  
}

export default Search;