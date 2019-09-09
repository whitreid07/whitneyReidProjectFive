import React from 'react';

const GetIngredients = (props) => {
  console.log("found ingredients", props.ingredients)
  return (
    <div className="modal">
      <h1>{props.ingredientsObject.title}</h1>
      {props.ingredientsObject.ingredients ? props.ingredientsObject.ingredients.map((ingredient, index) => {
        return (
          <li key={index}>{ingredient}</li>
        )

      }) : null}
      <button onClick={() => props.closeModal(false)} className="ingredientsButton">Close</button>
    </div>
  )


};

export default GetIngredients;