import React from 'react';
import axios from 'axios'

const apiKey = '30c105daaed4f60bf6a575ed72e9bb81';


const Recipes = (props) => {
  //Within a recipe component display ( ie. name, publisher,recipe_id)
  // Go onclick on your recipe cards.
  // Make an API call to the recipe ingredient END point. USING the recipe_id to fetch
  const onRecipeClick = async (rId) => {
    const response = await axios.get(`https://www.food2fork.com/api/get?key=${apiKey}&rId=${rId}`);

    //ingredients.
    // Want to set those ingredients as state.
    props.setCurrentIngredients(response.data.recipe)
    //Modal to appear once clicked
    props.getModal(true)
    // Create a  recipe ingredients component to render out the ingredients.
  }

  return (
    <div className="wrapper">
      <div className="innerWrapper">
        <div id="formButton" className="container">

          {props.myRecipes.map((recipe, index) => {

            return (
              < div id="container" key={index} tabIndex="0" className="recipeContainer" >
                <div className="recipeImageTitle">
                  <img className="recipeImage" src={recipe.image_url} alt={recipe.title} />
                  <h2 className="recipeTitle">{recipe.title}</h2>
                </div>
                <div className="recipeContent">
                  <p className="recipePublisher"><span className="publisher">Publisher:</span>{recipe.publisher}</p>

                  <button onClick={() => onRecipeClick(recipe.recipe_id)} className="ingredientsButton">View Ingredients</button>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

};

export default Recipes;