import React, { useContext, useEffect, useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { LikeButton } from '../components/LikeButton';
import { BookContext } from '../context/BookContext';
import Axios from "axios";
import JumbotronWelcome from "../components/JumbotronWelcome";
import "./style-landingpage.css"

const LandingPage = () => {

  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const [bookSearch, setBookSearch] = useState({
    search: '',
  });

  const [result, setResult] = useState([]);
  // const {books, setBooks} = useContext(BookContext);

  //when something changes
  const handleInputChangeSearch = event => {
    const { name, value } = event.target;
    console.log(name, value)
    setBookSearch({
      ...bookSearch,
      [name]: value
    })
  }

  //clicking search button
  const handleBookSearchClick = event => {
    event.preventDefault();

    console.log(API_KEY)

    const { search } = bookSearch;
    console.log('search clicked', search)

    Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + API_KEY + "&maxResults=14")
      .then(data => {
        console.log(data.data.items);
        setResult(data.data.items);
      })
  }

  return (
    <Row>
      <Col size="lg-12">
        <div className="header">

          <h1>BookList</h1>

          <form>
            <Input
              className="searchengine"
              value={bookSearch.search}
              onChange={handleInputChangeSearch}
              name="search"
              placeholder="Search any book"
            />
          </form>
          <form>
            <FormBtn
              className='booksearch'
              onClick={handleBookSearchClick}
            >
              Search
              </FormBtn>
          </form>
        </div>
        <div className="headertitle">
          <h4>Read. Share. Repeat.</h4>
        </div>
      </Col>       
      <div>
        <div className="container">
          <div className="book-search-container">
            
            <Col size="lg-12">
              <h5>Your search: </h5>  
              {result.map(bookSearch => (
                <a target="_black" href={bookSearch.volumeInfo.previewLink}>
                  <img src={bookSearch.volumeInfo.imageLinks.thumbnail} alt={bookSearch.title} />
                </a>
              ))}

            </Col>

          </div>
        </div>      </div>
    </Row>

    );
}

export default LandingPage;
