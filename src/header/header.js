import './header.css';
import React, {Component} from 'react';

class Header extends Component {
  //constructor
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div class="jumbotron jumbotron-fluid jumbotron-header">
          <div class="container">
            <h1 class="display-4 header-main">Hello, I'm
              <h1 class = "display-4 header-name"> Irfan Suzali </h1>
            </h1>
            <p class="lead">Aspiring full-stack developer</p>
            <a class="btn btn-primary btn-lg" href="#about-section" role="button"> Learn More </a>
          </div>
        </div>
    )
  }
}

export default Header;
