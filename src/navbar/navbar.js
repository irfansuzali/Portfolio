import './navbar.css';
import React, {Component} from 'react';

class Navbar extends Component {
  //constructor
  constructor(props){
    super(props)
  }

  render(){
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-portfolio">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about-section"> About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio-section">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact-section">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
