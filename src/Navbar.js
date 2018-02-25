import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }
  static propTypes = {
    onNewRecipe: PropTypes.func
  }
  render() {
    return (
      <div className='navbar'>
        <div>
          <h2>Recipe App</h2>
        </div>
        <div>
          <ul>
            <li><a onClick={this.props.onNewRecipe}href='#'>New Recipe</a></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact Us</a></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;