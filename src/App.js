import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy from 'react-scrollspy'
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <div>
      <div>
      <section id="section-1">
        <Navbar/>
        <Header id="masthead"/>
      </section>
      <section id="section-2"><About /></section>
      <section id="section-3"><Portfolio /></section>
      </div>
      <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
        <li><a href="#section-1">section 1</a></li>
        <li><a href="#section-2">section 2</a></li>
        <li><a href="#section-3">section 3</a></li>
      </Scrollspy>
    </div>
    </div>
  );
}

export default App;