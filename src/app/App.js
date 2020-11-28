//Images
import profile_pic from '../images/profile_pic.jpg';
import instahub_pic from '../images/instahub_pic.png';
// Logos
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
//Icons
import github_icon from '../images/icons/logo-github.svg'
import linkedin_icon from '../images/icons/logo-linkedin.svg'

import './App.css';
import Navbar from '../navbar/navbar';
import Header from '../header/header';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <Header />
      </header>
      {/* Navigation Bar */}
      <Navbar />

      {/* About Section */}
      <div class = "container" id = "about-section">
        <h1>About</h1>
        <img src= {profile_pic} class="img-fluid profile-pic" alt="Responsive Image"/>
        <p>
            I’m a recent graduate from the University of Illinois Urbana-Champaign with a passion for technology. After many years of tinkering with hardware through hands-on experience, I have decided to pivot towards a more software oriented field where I can utilize code to my bring ideas and thoughts to life. As I continue on my journey of expanding and developing my craft, I welcome new and exciting problems to push myself further and strive to become better everyday.
        </p>
        <h2>Background</h2>
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          </p>

        <h2> Languages and Frameworks </h2>
        <img src = {html5_pic} class="img-fluid" alt="HTML5"/>
        <img src = {css3_pic} class="img-fluid" alt="CSS3"/>
        <img src = {javascript_pic} class="img-fluid" alt="Javascript"/>
        <img src = {jquery_pic} class="img-fluid " alt="Jquery"/>
        <img src = {bootstrap_pic} class="img-fluid" alt="Bootstrap"/>
        <img src = {react_pic} class="img-fluid" alt="React"/>
        <img src = {python_pic} class="img-fluid" alt="Python"/>
        <img src = {squarespace_pic} class="img-fluid" alt="Squarespace"/>
        <img src = {github_pic} class="img-fluid" alt="Github"/>
        <img src = {mongodb_pic} class="img-fluid" alt="MongoDB"/>


      </div>
      {/* Portfolio Section */}
      <div class = "container" id = "contact-section">
        <h1>Portfolio</h1>
          <div class="card">
            <div class="row">
              <div class= "col-sm-7">
                <div class="card-body">
                  <h5 class="card-title">InstaHub</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Squarespace, CMS</h6>
                  <p class="card-text"></p>
                  <a href="https://www.getinstahub.com/" class="card-link">Visit Website</a>
                </div>
              </div>
              <div class= "col-sm-5 portfolio-img">
                <img src = {instahub_pic} class="img-fluid" alt="CSS3"/>
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

      <footer class = "portfolio-footer">
        <div class = "row">
          <div class = "col"></div>
          <div class = "col-sm-3">
            <div class="card icon-card">
              <div class="card-body icon-body">
                <img src = {linkedin_icon} class="img-fluid" alt="Linkedin"/>
              </div>
            </div>
            <div class="card icon-card">
              <div class="card-body icon-body">
                <img src = {github_icon} class="img-fluid" alt="Github"/>
              </div>
            </div>
          </div>
          <div class = "col"></div>
        </div>
        <h6> Irfan Suzali © 2020 </h6>

      </footer>




    </div>
  );
}

export default App;
