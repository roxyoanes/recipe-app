import React from "react";

const Search = ({handleSearch, handleRecipeName, handleIngredients, recipeName, ingredients, keyPress}) => {

  return(
  <div>
    <p>salut</p>
    <div className="search-container">
      <input type="text" onChange={handleRecipeName} value={recipeName} />
      <input type="text" onChange={handleIngredients} onKeyDown={keyPress} value={ingredients} />
      <div>
        <p>{ingredients}</p>
      </div>
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  </div>
  )
  
}

export default Search;