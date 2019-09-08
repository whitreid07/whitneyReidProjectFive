import React from 'react';
import axios from 'axios'
// import GetIngredients from './GetIngridents';

// import Modal from './Modal';


const apiKey = '30c105daaed4f60bf6a575ed72e9bb81';


const Recipes = (props) => {
  console.log(props)
  // Go onclick on your recipe cards.
  const onRecipeClick = async (rId) => {
    const response = await axios.get(`https://www.food2fork.com/api/get?key=${apiKey}&rId=${rId}`);
    console.log("on recipe click", response.data);
    props.setCurrentIngredients(response.data.recipe)
    // Make an API call to the recipe ingredient END point. USING the recipe_id to fetch
    //ingredients.

    // Want to set those ingredients as state.
    // Create a  recipe ingredients component to render out the ingredients.
  }
  return (
    <div className="wrapper">
      <div className="innerWrapper">
        <div className="container">
          {props.myRecipes.map(recipe => {
            console.log(recipe.recipe_id)
            // You have recipe ID here.
            return (
              < div onClick={() => onRecipeClick(recipe.recipe_id)} tabIndex="0" className="recipeContainer" >
                <img className="recipeImage" src={recipe.image_url} alt={recipe.title} />
                <h2 className="recipeTitle">{recipe.title}</h2>
                <p className="recipePublisher"><span>Publisher:</span>{recipe.publisher}</p>
                {/*<a onChange className="recipeButtons" href={recipe.source_url}>View Recipe</a>*/}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

};

export default Recipes;