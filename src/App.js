import React from 'react';
import RecipeList from "./RecipeList.js";
import Search from "./Search";
import { recipeApi } from "./api";

import './App.css';

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [recipeName, setRecipeName] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [searchedIngredients, setSearchedIngredients] = React.useState([]);
  const [error, setError] = React.useState(null);

  const handleSearch = () => {
    if(recipeName && ingredients){
      recipeApi(recipeName, ingredients).then(data => {
        setRecipeName(data)
        setIngredients(data)
      })
    } else{
      setRecipeName([]);
      setIngredients([]);
    }
  }

  const handleRecipeName = (e) => {
    setRecipeName(e.target.value)
  }

  const handleIngredients = (e) => {
    setIngredients(e.target.value)
  }  

  const toggleComponents = () => {
      setToggle(!toggle)
  }

  const keyPress = (e) => {
    if(e.keyCode === 13){
       console.log('value', e.target.value);
    }
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
          {toggle ? <RecipeList /> : 
            <Search
              recipeName={recipeName}
              ingredients={ingredients}
              handleSearch={handleSearch}
              handleRecipeName={handleRecipeName}
              handleIngredients={handleIngredients}
              keyPress={keyPress}
            />
          }
          </div>
          
      </div>
    );
  
}


export default App;
