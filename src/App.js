
import './App.css';
//Importing boostrap from node modules
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Importing the components 
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
//Importing react router dom package
import {BrowserRouter,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
