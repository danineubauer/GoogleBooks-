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

  const [result, setResult] = useState([]);
  // const {books, setBooks} = useContext(BookContext);

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
          console.log(data.data.items); 
          setResult(data.data.items);
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

            {result.map ( bookSearch => (
              <a target="_black" href={bookSearch.volumeInfo.previewLink}>
                <img src={bookSearch.volumeInfo.imageLinks.thumbnail} alt={bookSearch.title}/>
              </a>
            ))}

          </Col>
        </Row>
      </Container>
    );
}

export default BooksAPI;
