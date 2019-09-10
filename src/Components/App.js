import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../Partials/App.scss';
import Form from './Form';
import Recipes from './Recipes';
import GetIngredients from './GetIngredients';


const apiKey = '623d02466ba37f9fdb32426a6972d06f';
const apiUrl = 'https://www.food2fork.com/api/search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      currentIngredients: [],
      hasRecipes: true,
      isModalShown: false,
      isLoading: true,
    }
  }

  setCurrentIngredients = (ingredients) => {
    this.setState({ currentIngredients: ingredients })
  }

  getRecipes = e => {
    e.preventDefault();
    console.log("submitted");
    const recipeName = e.target.elements.recipeName.value;

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
      .then(res => {

        if (res.data.recipes.length === 0) {
          swal({
            title: `Sorry..., That word cannot be found, please try another!`,
            icon: "error"
          })
        }
        else {
          console.log("testing", res.data.recipes);
          const threeRecipes = res.data.recipes.slice(0, 6);
          console.log(threeRecipes);
          this.setState({
            recipes: threeRecipes,
            hasRecipes: false,
            isLoading: false,
          })
        }
      }).catch(err => (err))
  }

  getModal = (state) => {
    // console.log("getModal", state);
    this.setState({ isModalShown: state })
  }

  closeModal = (close) => {
    console.log("closeModal", close);
    this.setState({ isModalShown: close })
  }

  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <div className="overlay">
            <div className="headerContents">
              <div className="foodieLogo">foodie</div>
              <h1 className="headerTitle">what's cooking tonight? <span role="img" aria-label="folk, plate and knife">🍽</span></h1>
              <p className="typeWord">Type a word to get a recipe!</p>

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
