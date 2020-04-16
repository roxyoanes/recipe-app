import React from "react";
import RecipeList from "./RecipeList.js";
import Search from "./Search";
import { recipeApi } from "./api";

import "./App.css";

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [recipeName, setRecipeName] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [error, setError] = React.useState(null);

  const handleSearch = () => {
    if (recipeName && inputValue) {
      recipeApi(recipeName, inputValue).then((data) => {
        setResult(data.results)
      });
    } else{
      setResult([]);
    }

    setToggle(!toggle);
  };

  const handleRecipeName = (e) => {
    setRecipeName(e.target.value);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      setIngredients([...ingredients, e.target.value]);
      console.log("value", e.target.value);
    }
  };

  const deleteIngredient = (ingredient) => {
    const newArray = ingredients.filter((element) => element !== ingredient);
    setIngredients(newArray);
  };

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="App">
      <p>Search recipe:</p>
      <div className="btn-container">
        {toggle ? (
          <RecipeList 
            result={result}
          />
        ) : (
          <Search
            recipeName={recipeName}
            inputValue={inputValue}
            handleSearch={handleSearch}
            handleRecipeName={handleRecipeName}
            handleInput={handleInput}
            keyPress={keyPress}
            setIngredients={setIngredients}
            ingredients={ingredients}
            deleteIngredient={deleteIngredient}
          />
        )}
        <div className="search-btn-container">
          <button className="toggle-btn" onClick={handleSearch}>
            Search recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
