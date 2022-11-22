import './App.css';
import { Routes,
  Route
} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Error from './component/Error';
import NavBar from './NavBar';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
    <Route path= "/" element= {<Home />}/>
    <Route path= "/about"  element= {<About/>} />
    <Route path= "/hello"  element= {<Hello/>} />

    <Route path='/*' element = {<Home />}/>
    </Routes>
    </div>
  );
}

export default App;
