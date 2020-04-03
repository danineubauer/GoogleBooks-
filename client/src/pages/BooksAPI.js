import React, { Component, useState}  from 'react';
import dotenv from 'dotenv';
dotenv.config()

 
// import errorReporter from './errorReporter'
 
// dotenv.config()
// errorReporter.client.report(new Error('faq example'))


// import ReactDom from 'react-dom'

// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import Header from "../components/Header/index"
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

function BooksAPI() { 

  const apikey = process.env.REACT_APP_GOOGLE_API_KEY;


    const [bookTitle, setBookTitle] = useState(""); 
    const [result, setResult] = useState([]); 
    const [apiKey, setUpApiKey] = useState(apikey);
   
    const handleInputChange = event => {
      console.log('handleInputChange')
  
      const bookTitle = event.target.value; 
      console.log('console book:', bookTitle)
      setBookTitle(bookTitle)
    }
    
    const handleBookSearchSubmit = event => { 
      event.preventDefault();
      console.log('handleBookSearchSubmit')
      console.log(process.env)
  
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
