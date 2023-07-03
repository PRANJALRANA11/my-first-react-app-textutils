import {React,useState} from "react";
import { Link } from "react-router-dom";
import '../App.css';
export default function Navbar(props){
  const [mode, setmode] = useState("navbar-light bg-light");
    function Mode(){
      if(mode==="navbar-light bg-light")
          setmode("navbar-dark bg-dark")
      else
          setmode("navbar-light bg-light")    
    }
    return(
        <>
  <nav className={`navbar navbar-expand-lg ${mode}`}>
  <div className="container-fluid">
  <Link to="/About">Home</Link>
  <Link to="/Text">Home</Link>
    <a className="navbar-brand" href="/">Textutils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={Mode}/>
  <label class="form-check-label" htmlfor="flexSwitchCheckDefault">Dark Mode</label>
</div>
      </ul>
    </div>
  </div>
</nav>

          </>
    );
}