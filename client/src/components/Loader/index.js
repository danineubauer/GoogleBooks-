import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { BookContext } from '../../context/BookContext';

function Loader() {

  return (
    <div class="spinner-grow text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
}

export default Loader;
