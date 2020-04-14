import React from 'react';
import RecipeList from "./RecipeList.js";
import Search from "./Search"

import './App.css';

const App = () => {
  const [toggle, setToggle] = React.useState(false);

const toggleComponents = () => {
    setToggle(!toggle)
} 
  return (
    <div className="App">
        <p>
          hello
        </p>
        <button onClick={toggleComponents}>ok</button>
        {toggle ? <RecipeList /> : <Search />}
    </div>
  );
}

export default App;
