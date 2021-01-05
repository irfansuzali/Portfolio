import './header.css';
import React from 'react';

export default function Header() {
  return (
    <div>
      <div className='app-header' >
        <div class="jumbotron jumbotron-fluid jumbotron-header header">
          <div class="container">
            <h1 class="display-4 header-main">Hello, I'm
              <h1 class="display-4 header-name"> Irfan Suzali </h1>
            </h1>
            <p class="lead">Aspiring full-stack developer</p>
            <a class="btn btn-primary btn-lg" href="#about" role="button"> Learn More </a>
          </div>
        </div>
      </div>
    </div>
  )
}
