import React from 'react';
import RecipeList from "./RecipeList.js";
import Search from "./Search";
import { recipeApi } from "./api";

import './App.css';

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [name, setName] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [error, setError] = React.useState(null);

  const handleSearch = () => {
    if(name && ingredients){
      recipeApi(name && ingredients).then(data => {
        setName(data)
        setIngredients(data)
      })
    } else{
      setName([]);
      setIngredients([]);
    }
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }  

  const toggleComponents = () => {
      setToggle(!toggle)
  }

  const searchRecipe = () => {
    recipeApi().then(data =>{
      setName(data)
      setIngredients(data)
    });
  }

  if(error){
    return <p>{error}</p>
  }
    return (
      <div className="App">
          <p>
            Search recipe
          </p>
          <div className="btn-container">
          <button className="toggle-btn" onClick={toggleComponents}>switch</button>
          {toggle ? <RecipeList /> : <Search name={name} ingredients={ingredients} handleSearch={handleSearch} handleChange={handleChange} searchRecipe={searchRecipe} />}
          </div>
          
      </div>
    );
  
}


export default App;
