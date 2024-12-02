import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from "./Coponents/Home";
import Contact from "./Coponents/ContactUs";
import About from "./Coponents/AboutUs";
import Login from './Coponents/Login';
import Dashboard from './Coponents/Dashboard';

function App() {
  return (
    <div className="App">
    <Router>
        <nav>
         <ul>
             <li><Link to='/home'>Home</Link></li>
             <li><Link to='/about'>About</Link></li>
             <li><Link to='/contact'>Contact</Link></li>
             <li><Link to='/login'>Login</Link></li>
             <li><Link to='/dash'>DashBoard</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dash' element={<Dashboard/>}/>

        </Routes>
      </Router>

    </div>

  );
}

export default App;
