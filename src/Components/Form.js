import React from 'react';
import { Link } from 'react-scroll';

const Form = (props) => {
  return (
    <form onSubmit={props.getRecipes}>
      <div className="formContainer">
        <input className="formInput" type="text" name="recipeName" placeholder="enter word ie. pizza" />

        <Link
          activeClass="active"
          to="container"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="recipeButtons"
        >Find Recipe! </Link>

      </div>
    </form >
  )

};




export default Form;