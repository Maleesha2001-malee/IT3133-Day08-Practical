import './App.css';
import Home from "./Coponents/Home";
import Contact from "./Coponents/ContactUs";
import About from "./Coponents/AboutUs";

function App() {
  return (
    <div className="App">
      <ul>
        <li><Home/></li>
        <li><About/></li>
        <li><Contact/></li>
      </ul>
    </div>
  );
}

export default App;
