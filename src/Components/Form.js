import React from 'react';
import { Link } from 'react-scroll';

const Form = (props) => {
  return (
    <form onSubmit={props.getRecipes}>
      <div className="formContainer">
        <input className="formInput" type="text" name="recipeName" placeholder="enter word ie. pizza" />
        <button>
          <Link
            activeClass="active"
            to="recipeContainer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="formButton"
          >Find Recipe!</Link>
        </button>
      </div>
    </form >
  )
};



export default Form;