import React, { Component } from 'react';
import axios from 'axios';
import '../Partials/App.scss';
import Form from './Form';
import Recipes from './Recipes';


const apiKey = '6fd58c2421e8e2469be5ea3e8d4c9e6d';
const apiUrl = 'https://www.food2fork.com/api/search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      userInput: '',
      isLoading: true,
    }
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
        console.log(res.data.recipes);
        this.setState({
          recipes: res.data.recipes,
          isLoading: false,
        })
      }).catch(err => (err))
  }

  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <h1>Recipe App! 🍽</h1>
          <Form getRecipes={(e) => this.getRecipes(e)} />
          {
            this.state.recipes.map((recipe, index) => {
              return (
                <div key={index}>
                  <Recipes myRecipe={recipe} />
                </div>
              )
            })
          }
        </header>
      </div>
    );
  }
}

export default App;
