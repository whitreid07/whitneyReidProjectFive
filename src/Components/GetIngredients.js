import React from 'react';

const GetIngredients = (props, index) => {
  console.log("found ingredients", props.ingredients)
  return (
    <div key={index} className="modal">
      <div className="modalImageContainer">
        <div className="modalImageSize">
          <img className="modalImage" src={props.ingredientsObject.image_url} alt={props.ingredientsObject.title} />
        </div>
      </div>
      <div className="modalContents">
        <h1 className="modalTitle">{props.ingredientsObject.title}</h1>
        <div className="modalIngredients">
          {props.ingredientsObject.ingredients ? props.ingredientsObject.ingredients.map((ingredient, index) => {
            return (
              <div>

                <li key={index}>{ingredient}</li>
              </div>
            )

          }) : null}
        </div>
        <button className="recipeButton">
          <a target="_blank" href={props.ingredientsObject.source_url}><i class="fas fa-external-link-alt"></i>  Get Recipe! </a>
        </button>

        <button onClick={() => props.closeModal(false)} className="closeButton"><i class="fas fa-window-close"></i>  Close </button>
      </div>
    </div>
  )


};

export default GetIngredients;