import './App.css';
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import About from '../components/about/about';
import Experience from '../components/experience/experience'
// import Resume from '../components/resume/resume'
import Portfolio from '../components/portfolio/portfolio'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio/>
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
