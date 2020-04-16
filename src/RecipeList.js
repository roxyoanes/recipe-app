import React from "react";

const RecipeList = ({result}) => {
  return(
  <div>
        <div>
          {result.map((recipe) => (
            <div>
              <p key={recipe}>{recipe.title}</p>
            </div>
          ))}
        </div>
    </div>
  )
  
}

export default RecipeList;