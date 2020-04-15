import React from 'react';
import RecipeList from "./RecipeList.js";
import Search from "./Search";
import { recipeApi } from "./api";

import './App.css';

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [recipeName, setRecipeName] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [error, setError] = React.useState(null);

  const handleSearch = () => {
    if(recipeName && inputValue){
      recipeApi(recipeName, inputValue).then(data => {
        setRecipeName(data)
        setInputValue(data)
      })
    } else{
      setRecipeName([]);
      setInputValue([]);
    }
  }

  const handleRecipeName = (e) => {
    setRecipeName(e.target.value)
  }

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }  

  const toggleComponents = () => {
      setToggle(!toggle)
  }

  const keyPress = (e) => {
    if(e.keyCode === 13){
      setIngredients([...ingredients, e.target.value])
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
              inputValue={inputValue}
              handleSearch={handleSearch}
              handleRecipeName={handleRecipeName}
              handleInput={handleInput}
              keyPress={keyPress}
              setIngredients={setIngredients}
              ingredients={ingredients}
            />
          }
          </div>
          
      </div>
    );
  
}


export default App;
