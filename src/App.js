import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy from 'react-scrollspy'
import  Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      <Scrollspy items={ ['home', 'section-1', 'section-2', 'section-3'] } currentClassName="is-current">
        <a href="#home"><Header/></a>
        <a href="#section-1"><About/></a>
        <a href="#section-2"><Portfolio/></a>
        <a href="#section-3"><Contact/></a>
      </Scrollspy>
    </div>
    </div>
  );
}

export default App;