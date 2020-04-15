import React from "react";

const Search = ({handleSearch, handleChange, name, searchRecipe}) => {

  return(
  <div>
    <p>salut</p>
    <div className="search-container">
      <input type="text" onChange={handleChange} value={name} />
      <input type="text" />
      <button className="search-btn" onClick={searchRecipe}>Search</button>
    </div>
  </div>
  )
  
}

export default Search;