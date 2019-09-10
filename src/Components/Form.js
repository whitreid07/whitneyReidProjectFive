import React from 'react';
import { Link } from 'react-scroll';

//Once submitted, recipes will be displayed
//Link to do smooth scroll from submit button to recipe container
const Form = (props, keyDown) => {
  return (
    <form onSubmit={props.getRecipes}>
      <div className="formContainer">
        <input className="formInput" type="text" name="recipeName" placeholder="enter word ie. chicken" />

        <Link
          activeClass="active"
          to="container"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          className="formButton"
        >
          Find Recipe  <i aria-hidden="true" title="Down arrow icon let's user know to go down or more to see" className="fas fa-arrow-circle-down"></i>
        </Link>


      </div>
    </form >
  )
};


export default Form;