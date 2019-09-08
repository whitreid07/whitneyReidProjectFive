import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../Partials/App.scss';
import Form from './Form';
import Recipes from './Recipes';

// import firebase from './firebase';
// import fakeList from './fakeList';

const apiKey = '6195a5a12e7b522530e58fe9806fc4a3';
const apiUrl = 'https://www.food2fork.com/api/search';
// const apiGet = "https://www.food2fork.com/api/get/rId";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      rId: [],
      hasRecipes: true,
      isLoading: true,
    }
  }

  getRecipes = e => {
    e.preventDefault();
    console.log("submitted");
    const recipeName = e.target.elements.recipeName.value;
    // const rId = e.target.elements.recipeName.value;

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
        this.setState({
          recipes: threeRecipes,
          hasRecipes: false,
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

  // removeBook = (bookId) => {
  //   const dbRef = firebase.database().ref();
  //   dbRef.child(bookId).remove();
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     userInput: e.target.value,
  //   });
  // };


  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <div className="overlay">
            <div className="headerContents">
              <h1 className="headerTitle">what's cooking tonight? 🍽</h1>
              <p className="typeWord">Type in a word to get a recipe!</p>

              <Form getRecipes={(e) => this.getRecipes(e)} />

              <Recipes myRecipes={this.state.recipes} />

            </div>
          </div>
        </header>
        <footer className="recipeFooter">
          <p className="footerCopy"> Created by Whitney Reid &copy; 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
