import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { BookContext } from '../../context/BookContext';
import "./style.css"

function Nav() {

  return (
    <nav className="navbar nav">
      <div className="container">
        <div className="flexbox">



        <div>
          <Link className="navbar nav-text signup" id="signup" to="/">
            Sign Up 
          </Link>
        </div>
        <div>
          <h3>|</h3>
        </div>
        <div>
          <Link className="navbar nav-text login" to="/welcomepage">
            Log In
          </Link>
        </div>
      </div>
      </div>

    </nav>
  );
}

export default Nav;
