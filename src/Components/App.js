import React, { Component } from 'react';
import axios from 'axios';
import '../Partials/App.scss';
import Form from './Form';
import Recipes from './Recipes';
import firebase from './firebase';
import fakeList from './fakeList';

const apiKey = '30c105daaed4f60bf6a575ed72e9bb81';
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
        console.log("testing", res.data.recipes);
        const threeRecipes = res.data.recipes.slice(0, 3);
        // console.log(threeRecipes);
        this.setState({
          recipes: threeRecipes,
          isLoading: false,
        })
      }).catch(err => (err))
  }

  // componentDidMount() {
  //   const dbRef = firebase.database().ref();

  //   dbRef.on('value', (data) => {
  //     const response = data.val();
  //     // console.log(data);

  //     const newState = [];

  //     for (let key in response) {
  //       // console.log(response);
  //       // console.log(key);

  //       newState.push({
  //         title: response[key],
  //         uniqueKey: key,
  //       });
  //     }

  //     this.setState({
  //       recipes: newState,
  //     })
  //   });
  // }

  removeBook = (bookId) => {
    const dbRef = firebase.database().ref();
    dbRef.child(bookId).remove();
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };


  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <div className="overlay">
            <div className="headerContents">
              <h1 className="headerTitle">What's Cooking Tonight? 🍽</h1>
              <p className="typeIngredients">Type in an ingredient to get a recipe!</p>
              <Form getRecipes={(e) => this.getRecipes(e)} />
            </div>
          </div>
          <Recipes myRecipe={this.state.recipes} />
        </header>
      </div>
    );
  }
}

export default App;
