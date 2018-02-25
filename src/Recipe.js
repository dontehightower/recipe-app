import React, {Component} from 'react';
import './Recipe.css';
import PropTypes from 'prop-types';

// Recipe Cards Component
class Recipe extends Component {
  render(){
    // deconstruct the properties from props
    const {title, img, instructions} = this.props;
    // make a copy of the ingredients array
    const ingredients = this.props.ingredients.map((ing, index) => (
      // show an li for each ingredient
      <li key={index}>{ing}</li>
    ))
    return (
      <div className='recipe-card'>
        <div className='recipe-card-img'>
          <img src={img} alt={title} />
        </div>
        <div className='recipe-card-content'>
          <h3 className='recipe-title'>{title} </h3>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions</h4>
          <p>{instructions}</p>
        </div>       
      </div>
    );
  }
}

export default Recipe;