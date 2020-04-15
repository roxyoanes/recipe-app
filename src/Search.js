import React from "react";

const Search = ({handleSearch, handleRecipeName, recipeName, searchRecipe}) => {

  return(
  <div>
    <p>salut</p>
    <div className="search-container">
      <input type="text" onChange={handleRecipeName} value={recipeName} />
      <input type="text" />
      <button className="search-btn" onClick={searchRecipe}>Search</button>
    </div>
  </div>
  )
  
}

export default Search;