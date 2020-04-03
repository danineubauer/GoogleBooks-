import React, { Component, useState}  from 'react';

import ReactDom from 'react-dom'

import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Header from "../components/Header/index"
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function BooksAPI() { 


  


    const [book, setBook] = useState(""); 
    // const [result, setResult] = useState([]); 
    // const [apiKey, setUpApiKey] = useState(apikey);
    
    // state = {
    //   books: [],
    //   title: "",
    //   author: "",
    //   synopsis: ""
    // };
  
    // componentDidMount() {
    //   this.loadBooks();
    // }
  
    // loadBooks = () => {
    //   API.getBooks()
    //     .then(res =>
    //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //     )
    //     .catch(err => console.log(err));
    // };
  
    // deleteBook = id => {
    //   API.deleteBook(id)
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // };
  
    // handleInputChange = event => {
    //   const { name, value } = event.target;
    //   this.setState({
    //     [name]: value
    //   });
    // };
  
    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   if (this.state.title && this.state.author) {
    //     API.saveBook({
    //       title: this.state.title,
    //       author: this.state.author,
    //       synopsis: this.state.synopsis
    //     })
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   }
    // };
    
  
  
    const handleInputChange = event => {
      console.log('handleInputChange')
  
      const book = event.target.value; 
      console.log(book)
      // setBook(book)
    }
    
    const handleBookSearchSubmit = event => { 
      event.preventDefault();
      console.log('handleBookSearchSubmit')
      console.log("key", process.env.REACT_APP_GOOGLE_API_KEY)
  
      // console.log(book)
    }
  
      return (
        
              <form onSubmit={handleBookSearchSubmit}>
                <div class="form-group">
                  <input onChange={handleInputChange}
                    type="text"
                    className="form-control mt-10"
                    placeholder="Search for Books"
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="btn btn-danger">Search</button>
              </form>
      );
    }
    
  

  
  


export default BooksAPI;
