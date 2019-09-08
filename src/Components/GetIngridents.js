import React from 'react';

const GetIngridents = (props) => {
  // console.log("found ingredients", props.ingredients)
  return (
    <div className="modal">
      <h1>{props.ingredientsObject.title}</h1>
      {props.ingredientsObject.ingredients ? props.ingredientsObject.ingredients.map((ingredient, index) => {
        return (
          <li key={index}>{ingredient}</li>
        )

      }) : <h1>No data!</h1>}
    </div>
  )


};

export default GetIngridents;