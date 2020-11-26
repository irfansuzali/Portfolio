import profile_pic from '../images/profile_pic.jpg';
import css3_pic from '../images/logos/css3.svg'
import html5_pic from '../images/logos/html5.svg'
import bootstrap_pic from '../images/logos/bootstrap.svg'
import javascript_pic from '../images/logos/javascript.svg'
import react_pic from '../images/logos/react.svg'
import jquery_pic from '../images/logos/jquery.svg'
import python_pic from '../images/logos/python.svg'
import squarespace_pic from '../images/logos/squarespace.svg'
import github_pic from '../images/logos/github.svg'
import mongodb_pic from '../images/logos/mongodb.svg'



import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <div class="jumbotron jumbotron-fluid jumbotron-header">
          <div class="container">
            <h1 class="display-4">Hello, I'm Irfan Suzali</h1>
            <p class="lead">Aspiring full-stack developer</p>
            <a class="btn btn-primary btn-lg" href="#about-section" role="button">View my work </a>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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

      {/* About Section */}
      <div class = "container" id = "about-section">
        <h1>About</h1>
        <img src= {profile_pic} class="img-fluid profile-pic" alt="Responsive Image"/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h2>Background</h2>
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          </p>

        <h2> Languages and Frameworks </h2>
        <img src = {html5_pic} class="img-fluid" alt="CSS3"/>
        <img src = {css3_pic} class="img-fluid" alt="CSS3"/>
        <img src = {javascript_pic} class="img-fluid" alt="CSS3"/>
        <img src = {jquery_pic} class="img-fluid " alt="CSS3"/>
        <img src = {bootstrap_pic} class="img-fluid" alt="CSS3"/>
        <img src = {react_pic} class="img-fluid" alt="CSS3"/>
        <img src = {python_pic} class="img-fluid" alt="CSS3"/>
        <img src = {squarespace_pic} class="img-fluid" alt="CSS3"/>
        <img src = {github_pic} class="img-fluid" alt="CSS3"/>
        <img src = {mongodb_pic} class="img-fluid" alt="CSS3"/>


      </div>
      {/* Portfolio Section */}
      <div class = "container" id = "contact-section">
        <h1>Portfolio</h1>
          <div class="card">
            <div class="row">
              <div class= "col-sm-8">
                <div class="card-body">
                  <h5 class="card-title">InstaHub</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
              <div class= "col-sm-4">

              </div>
            </div>


        </div>
      </div>

      {/* Contact Section */}
      <div class = "container" id = "contact-section">
        <h1>Contact Me</h1>
        <h3>Lets Talk!</h3>
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

      <footer>

      </footer>




    </div>
  );
}

export default App;
