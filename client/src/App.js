import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Loader from "./components/Loader"
import Greeting from "./components/Greeting"
import { BookContext } from './context/BookContext';
import LandingPage from "./pages/LandingPage";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
    <Router>

      <div>
        <Loader></Loader>
        <Nav></Nav>
        <Switch>

          <Route exact path="/" component={LandingPage} />
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
