import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Greeting from "./components/Greeting"
import { BookContext } from './context/BookContext';
import BooksAPI from "./pages/BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
    <Router>
      <div>
        <Nav />
        <Greeting />
        <Switch>
          <Route exact path="/welcomepage" component={BooksAPI} />

          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </BookContext.Provider>
  );
}

export default App;
