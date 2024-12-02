import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Home from "./Coponents/Home";
import Contact from "./Coponents/ContactUs";
import About from "./Coponents/AboutUs";

function App() {
  return (
    <div className="App">
    <Router>
        <nav>
         <ul>
             <li><Link to='/home'>Home</Link></li>
             <li><Link to='/about'>About</Link></li>
             <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </Router>

    </div>

  );
}

export default App;
