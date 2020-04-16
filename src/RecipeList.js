import React from "react";

const RecipeList = ({result}) => {
  return(
  <div>
        <div>
          {result.map((recipe) => (
            <div className="recipe-container">
              <h4 key={recipe}>{recipe.title}</h4>
              <p>{recipe.ingredients}</p>
            </div>
          ))}
        </div>
    </div>
  )
  
}

export default RecipeList;