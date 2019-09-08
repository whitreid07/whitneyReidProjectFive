import React from 'react';
// import Modal from './Modal';

const Recipes = (props) => {
  console.log(props)
  return (
    <div className="wrapper">
      <div className="innerWrapper">
        <div className="container">
          {props.myRecipes.map(recipe => {
            return (
              < div tabindex="0" className="recipeContainer" >
                <img className="recipeImage" src={recipe.image_url} alt={recipe.title} />
                <h2 className="recipeTitle">{recipe.title}</h2>
                <p className="recipePublisher"><span>Publisher:</span>{recipe.publisher}</p>
                <a onChange className="recipeButtons" href={recipe.source_url}>View Recipe</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

};

export default Recipes;