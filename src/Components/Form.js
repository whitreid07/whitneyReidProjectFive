import React from 'react';
import { Link } from 'react-scroll';

const Form = (props, recipe, onRecipeClick) => {
  return (
    <form onSubmit={props.getRecipes}>
      <div className="formContainer">
        <input className="formInput" type="text" name="recipeName" placeholder="enter word ie. pizza" />
        <button onClick={() => onRecipeClick(recipe.recipe_id)} className="formButton">Find Recipe!
        </button>
      </div>
    </form>
  )

};



export default Form;