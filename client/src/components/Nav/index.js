import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { BookContext } from '../../context/BookContext';
import "./style.css"

function Nav() {
  const { books } = useContext(BookContext);

  const calcTotalLikes = () => {
    return books.reduce((totalLikes, book) => {
      return book.likes ? book.likes + totalLikes : totalLikes;
    }, 0);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar" to="/">
            React Reading List
          </Link>
        </div>
        <div>
          <Link className="navbar" to="/welcomepage">
            welcome page
          </Link>
        </div>
        <div className="navbar-header">
          <Link className="navbar" to="/">
            Sign Up 
          </Link>
        </div>
        <div className="navbar-header">
          <Link className="navbar" to="/">
            Log In
          </Link>
        </div>
          
        <div className="nav navbar-nav navbar-right text-white">Total Likes: {calcTotalLikes()}</div>
      </div>
    </nav>
  );
}

export default Nav;
