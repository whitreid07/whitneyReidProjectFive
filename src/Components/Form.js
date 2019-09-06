import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.getRecipes}>
      <input className="formInput" type="text" name="recipeName" placeholder="pizza" />
      <button className="formButton">Find Recipe!</button>
    </form>
  )

};

export default Form;