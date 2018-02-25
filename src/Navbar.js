import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div>
          <h2>Recipe App</h2>
        </div>
        <div>
          <ul>
            <li><a href='#'>New Recipe</a></li>
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