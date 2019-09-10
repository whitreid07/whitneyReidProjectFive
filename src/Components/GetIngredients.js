import React from 'react';

const GetIngredients = (props, index) => {

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
          <a target="_blank" rel="noopener noreferrer" href={props.ingredientsObject.source_url}><i aria-hidden="true" title="External link icon let's user know external link will exit app" className="fas fa-external-link-alt"></i>  Get Recipe! </a>
        </button>

        <button onClick={() => props.closeModal(false)} className="closeButton"><i aria-hidden="true" title="Close icon let's user know to close button" className="fas fa-window-close"></i>  Close </button>
      </div>
    </div>
  )


};

export default GetIngredients;