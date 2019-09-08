import React from 'react';

const Form = (props, hasRecipes, myRecipes) => {
  return (
    <form onSubmit={props.getRecipes}>
      <div className="formContainer">
        <input className="formInput" type="text" name="recipeName" placeholder="enter word ie. pizza" />
        <button className="formButton">Find Recipe!
        </button>
      </div>
    </form>
  )

};



export default Form;