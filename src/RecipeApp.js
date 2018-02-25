import React, { Component } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: 'Spaghetti',
          instructions: 'Open jar of spaghetti sauce Bring 8 cups of water to a boil. Boil pasta for 8 minutes. Combine pasta and spaghetti sauce.',
          ingredients: ['pasta', '8 cups water', '1 box spaghetti', '1 jar spaghetti sauce'],
          img: 'spaghetti.jpg'
        },
        {
          id: 1,
          title: 'Breakfast Sandwich',
          instructions: 'Cut busicut in half. Layer eggs and bacon and cheese on top of one another inside both halves to form a sandwich.',
          ingredients: ['busicut', 'eggs', 'bacon', 'cheese'],
          img: 'breakfast-sandwich.jpeg'
        },
        {
          id: 2,
          title: 'French Fries',
          instructions: 'Get in your car, drive to McDonalds, and order french fries. Otherwise this recipe may turn out to be more trouble than it is worth.',
          ingredients: ['car', 'gas', 'will to move'],
          img: 'french-fries.jpeg'
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this);
  }
//when our RecipeApp mounts the Recipe input, it should
  handleSave(recipe) {
    //the updated state will depend on the previous state
    this.setState((prevState, props) => {
      //newly saved recipe consists of all the values submitted by onSave()
      //the new Recipe's id will be equal to the value of state's nextRecipeId
      const newRecipe = {...recipe, id: this.state.nextRecipeId}; 
      return { // new version of state
        //increment the value of next recipe id so it can be used the next time a recipe is saved
        nextRecipeId: prevState.nextRecipeId + 1,
        //add a new recipe to the recipe array
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }
  render() {
    const { showForm } = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        {/* if showForm is true, render the RecipeInput component otherwise, do nothing*/}
        {showForm ? <RecipeInput
          onSave={this.handleSave}
          onClose={() => this.setState({ showForm: false })}/> 
        : null}
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
