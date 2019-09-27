import React, { Component } from 'react';
import { Link, animateScroll } from 'react-scroll';

//Once submitted, recipes will be displayed
//Link to do smooth scroll from submit button to recipe container

class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello", this.handleSubmit)
    this.props.getRecipes(e);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="formContainer">
          <input className="formInput" type="text" name="recipeName" placeholder="enter word ie. shrimp" />
          <button>
            <Link
              activeClass="active"
              to="container"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
              className="formButton"
            >

            </Link>
            <i aria-hidden="true" title="Arrow down icon" className="fas fa-arrow-down"></i> Find Recipe
          </button>
        </div>
      </form >
    )
  }
}




export default Form;