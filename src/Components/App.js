import React, { Component } from 'react';
import axios from 'axios';
import { animateScroll as scroll } from 'react-scroll';
import swal from 'sweetalert';
import '../Partials/App.scss';
import Form from './Form';
import Recipes from './Recipes';
import GetIngredients from './GetIngredients';

// Declare API Key and URL
const apiKey = '30c105daaed4f60bf6a575ed72e9bb81';
const apiUrl = 'https://www.food2fork.com/api/search';

//Set recipes, currentIngredients, has recipes and isModalShown data as initial state to an empty array
//Recipe url will be the food2folk API
class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      currentIngredients: [],
      hasRecipes: true,
      isModalShown: false,
    }
  }
  //Use arrow function to get ingredients parameter
  setCurrentIngredients = (ingredients) => {
    this.setState({ currentIngredients: ingredients })
  }
  //Stop form from refreshing on submit
  //Declare variable for recipeName
  getRecipes = e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;

    //Make ‘GET’ request using axios with the users input 
    axios({
      method: 'GET',
      url: apiUrl,
      dataResponse: 'json',
      params: {
        key: apiKey,
        q: recipeName,
        format: 'json',
      }
    })
      //Use .then() to get recipe results
      .then(res => {
        // Error handling for when the user doesn't input a word that returns recipes
        if (res.data.recipes.length === 0) {
          swal({
            title: `Sorry..., That word cannot be found, please try another!`,
            icon: "error"
          })
        }
        else {
          //Only return six recipes out of 30 from the API call
          const sixRecipes = res.data.recipes.slice(0, 6);
          this.setState({
            recipes: sixRecipes,
            hasRecipes: false,
          })
          scroll.scrollTo(600);
        }
      }).catch(err => (err))
  }
  //Function to open modal view
  getModal = (state) => {
    this.setState({ isModalShown: state })
  }
  //Function to close modal view
  closeModal = (close) => {
    this.setState({ isModalShown: close })
  }
  //Render foodieLogo, h1, an input field and get recipe button; once recipe is called, user has option to view recipes using modal concept
  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <div className="overlay">
            <div className="headerContents">
              <div className="foodieLogo">foodie <span role="img" aria-label="folk, plate and knife">🍽</span></div>
              <h1 className="headerTitle">what's cooking tonight? </h1>
              <p className="typeWord">Type a word to get a recipe below!</p>

              <Form getRecipes={(e) => this.getRecipes(e)} />

            </div>
          </div>
        </header>
        <div className="modalContainer">
          <Recipes id="recipe" myRecipes={this.state.recipes} setCurrentIngredients={this.setCurrentIngredients} getModal={this.getModal} />

          {this.state.isModalShown ? <GetIngredients ingredientsObject={this.state.currentIngredients} closeModal={this.closeModal} /> : null}
        </div>

        <footer className="recipeFooter">
          <p className="footerCopy"> Created by Whitney Reid &copy; 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
