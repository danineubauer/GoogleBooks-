import React, {useContext, useEffect, useState} from "react";
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

const BooksAPI = () => {
  const apikey = ''

  const [bookSearch, setBookSearch] = useState({
    search: '',
  });
  // const {books, setBooks} = useContext(BookContext);

  // const loadBooks = () => {
  //   API.getBooks()
  //     .then(res => {
  //       setBooks(res.data)
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  // useEffect(() => {
  //    if (books.length === 0) {
  //    loadBooks();
  //    }
  //  }, []);

  // const deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => {
  //       const remainingBooks = books.filter(book => book._id !== id);
  //       setBooks(remainingBooks);
  //     })
  //     .catch(err => console.log(err));
  // };

  // const incrementLikes = id => {
  //   console.log('id of book to increase likes', id, books);
  //   const indexToUpdate = books.findIndex(book => book._id === id);
  //   const newBooks = [...books];
  //   newBooks[indexToUpdate].likes = newBooks[indexToUpdate].likes ? newBooks[indexToUpdate].likes + 1 : 1;
  //   setBooks(newBooks);

  // }

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })
  // };


    //when something changes
    const handleInputChangeSearch = event => { 
      const {name, value } = event.target; 
      console.log(name, value)
      setBookSearch({ 
        ...bookSearch, 
        [name]: value
      })
    }

    //clicking search button
    const handleBookSearchClick = event => { 
      event.preventDefault();
      
      const {search} = bookSearch; 
      console.log('search clicked', search)

      Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + apikey + "&maxResults=40")
        .then(data => { 
          console.log(data)
        })
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
           
            <form>
              <Input
                value={bookSearch.search}
                onChange={handleInputChangeSearch}
                name="search"
                placeholder="Title (required)"
              />
             
              <FormBtn
                onClick={handleBookSearchClick}
              >
                Search Book
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
}

export default BooksAPI;
