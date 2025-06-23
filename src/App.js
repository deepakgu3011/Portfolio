import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './pages/navs';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/projects';
import Contact from './pages/contact';
import Footer from './pages/footer';

function App() {
  return (
  <div className="App">
      <Nav />
      <div className="container mt-4">
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
        <Footer />
    </div>
  );
}

export default App;
