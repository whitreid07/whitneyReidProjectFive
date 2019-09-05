import React from 'react';

const Recipes = (props) => {
  return (
    <div>
      <h2>{props.myRecipe.title}</h2>
      <img src={props.myRecipe.image_url} />
      <p><span>Publisher:</span>{props.myRecipe.publisher}</p>
      <a href={props.myRecipe.source_url}>Get Recipe</a>

    </div>
  )

};

export default Recipes;