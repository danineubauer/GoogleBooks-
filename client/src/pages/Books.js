import React, { Component, useState} from "react";
import ReactDom from 'react-dom'

import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Header from "../components/Header/index"
import API from "../utils/API";
import BooksAPI from "./BooksAPI"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



class Books extends Component {
   

    // const [book, setBook] = useState(""); 
    // const [result, setResult] = useState([]); 
    // const [apiKey, setUpApiKey] = useState(apikey);
    
    state = {
      books: [],
      title: "",
      author: "",
      synopsis: ""
    };
  
    componentDidMount() {
      this.loadBooks();
    }
  
    loadBooks = () => {
      API.getBooks()
        .then(res =>
          this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        )
        .catch(err => console.log(err));
    };
  
    deleteBook = id => {
      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.title && this.state.author) {
        API.saveBook({
          title: this.state.title,
          author: this.state.author,
          synopsis: this.state.synopsis
        })
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    };
    
  
  
    // handleInputChange = event => {
    //   console.log('handleInputChange')
  
    //   const book = event.target.value; 
    //   console.log(book)
    //   setBook(book)
    // }
    
    // handleBookSearchSubmit = event => { 
    //   event.preventDefault();
    //   console.log('handleBookSearchSubmit')
    //   console.log("key", process.env.REACT_APP_GOOGLE_API_KEY)
  
    //   console.log(book)
    // }
  
  
    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>What Books Should I Read?</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <TextArea
                  value={this.state.synopsis}
                  onChange={this.handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </form>
  
  
  
              <form onSubmit={this.handleBookSearchSubmit}>
                <div class="form-group">
                  <input
                    type="text" onChange={this.handleInputChange}
                    className="form-control mt-10"
                    placeholder="Search for Books"
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="btn btn-danger">Search</button>
              </form>
  
  
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
              </Jumbotron>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <Link to={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row>
          <BooksAPI></BooksAPI>
        </Container>
  
      );
    }
  }
  
{/* <Row>
  <Col>
      <form>
        <div class="form-group">
        <input
          type="text" onChange
          className="form-control mt-10"
          placeholder="Search for Books"
          autoComplete="off"
        />
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>
  </Col>
</Row> */}

export default Books;
