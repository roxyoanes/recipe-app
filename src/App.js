import React from 'react';
import RecipeList from "./RecipeList.js";
import Search from "./Search";
import { recipeApi } from "./api";

import './App.css';

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [recipeName, setRecipeName] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    if(recipeName && ingredients){
      recipeApi(recipeName && ingredients).then(data => {
        setRecipeName(data)
        setIngredients(data)
      })
    } else{
      setRecipeName([]);
      setIngredients([]);
    }
  }, [recipeName, ingredients])

const toggleComponents = () => {
    setToggle(!toggle)
} 
  return (
    <div className="App">
        <p>
          Search recipe
        </p>
        <div className="btn-container">
        <button className="toggle-btn" onClick={toggleComponents}>switch</button>
        {toggle ? <RecipeList /> : <Search />}
        </div>
        
    </div>
  );
}

export default App;
