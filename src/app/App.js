 import profile_pic from '../images/profile_pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <div class="jumbotron jumbotron-fluid jumbotron-header">
          <div class="container">
            <h1 class="display-4">Hello, I'm Irfan Suzali</h1>
            <p class="lead">I'm a full-stack developer</p>
            <a class="btn btn-primary btn-lg" href="#about-section" role="button">View my work </a>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#"> About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <div class = "container" id = "about-section">
        <h1>About</h1>
        <img src= {profile_pic} class="img-fluid profile-pic" alt="Responsive Image"/>
        <p> Inspired by code and driven to bring ideas to life </p>
        <h2>Background</h2>

        <h2> Languages and Frameworks </h2>

      </div>
      {/* Portfolio Section */}

      {/* Blog Section */}
      {/* Contact Section */}
      <div class = "container" id = "contact-section">
        <h1>Contact Me</h1>
        <form>
          <div class="form-group row">
            <div class="col-sm-10">
              <input type="name" class="form-control" id="inputName" placeholder="Name"/>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail" placeholder="Enter Email"/>
            </div>
          </div>
          <div class="form-group">
            <textarea class="form-control" id="inputMessage" rows="3" placeholder="Your message here"></textarea>
          </div>
        </form>
      </div>




    </div>
  );
}

export default App;
