import React, { Component } from 'react';
import axios from 'axios';
// import swal from 'sweetalert';
import '../Partials/App.scss';
import Form from './Form';
import Recipes from './Recipes';
import GetIngreidents from './GetIngridents';

const apiKey = '30c105daaed4f60bf6a575ed72e9bb81';
const apiUrl = 'https://www.food2fork.com/api/search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      currentIngridents: [],
      hasRecipes: true,
      isLoading: true,
    }
  }

  setCurrentIngredients = (ingredients) => {
    this.setState({ currentIngridents: ingredients })
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
        console.log(threeRecipes);
        this.setState({
          recipes: threeRecipes,
          hasRecipes: false,
          isLoading: false,
        })
      }).catch(err => (err))
  }

  // async componentDidMount() {
  //   const response = await axios.get(`https://www.food2fork.com/api/get?key=${apiKey}&rId=47746`);
  //   console.log(response);
  // }

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

              <Recipes myRecipes={this.state.recipes} setCurrentIngredients={this.setCurrentIngredients} />

              <GetIngreidents ingredientsObject={this.state.currentIngridents} />
            </div>
          </div>
        </header>
        <button className="backTop">Back to top</button>
        <footer className="recipeFooter">
          <p className="footerCopy"> Created by Whitney Reid &copy; 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
