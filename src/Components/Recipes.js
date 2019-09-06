import React from 'react';

const Recipes = (props) => {
  console.log(props)
  return (
    <div className="wrapper">
      <div className="container">
        {props.myRecipe.map(recipe => {
          return (
            <div className="recipeContainer">
              <img className="recipeImage" src={recipe.image_url} />
              <h2 className="recipeTitle">{recipe.title}</h2>
              <p className="recipePublisher"><span>Publisher:</span>{recipe.publisher}</p>
              <a className="recipeUrl" href={recipe.source_url}>Get Recipe</a>
            </div>
          )
        })}
      </div>
    </div>
  )

};

export default Recipes;