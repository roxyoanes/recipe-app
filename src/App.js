import React from 'react';
import RecipeList from "./RecipeList.js";
import Search from "./Search";
import { recipeApi } from "./api";

import './App.css';

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [recipeName, setRecipeName] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);
  const [error, setError] = React.useState(null);

  const handleSearch = () => {
    if(recipeName && ingredients){
      recipeApi(recipeName && ingredients).then(data => {
        setRecipeName(data)
        setIngredients(data)
      })
    } else{
      setRecipeName([]);
      setIngredients([]);
    }
  }

const toggleComponents = () => {
    setToggle(!toggle)
} 
  if(error){
    return <p>{error}</p>
  } else if(recipeName && ingredients){
    return (
      <div className="App">
          <p>
            Search recipe
          </p>
          <div className="btn-container">
          <button className="toggle-btn" onClick={toggleComponents}>switch</button>
          {toggle ? <RecipeList /> : <Search recipeName={recipeName} ingredients={ingredients} />}
          </div>
          
      </div>
    );
  } else{
    return <p>Loading</p>
  }
  
}

export default App;
