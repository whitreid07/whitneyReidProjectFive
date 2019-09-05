import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.getRecipes}>
      <input className="form_input" type="text" name="recipeName" placeholder="pizza" />
      <button className="form_button">Find Recipe!</button>
    </form>
  )

};

export default Form;