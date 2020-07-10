import React from "react";
import { Switch, Route } from 'react-router-dom';
// Components
import BookSearch from "./components/BookSearch";
import BookCase from "./components/BookCase";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    bookShelves: ["Currently Reading", "Want To Read", "Read"] // Here for future improvements... TODO: add ability to create new shelves
  };

  // API call to update a book to a new shelf, then refresh the book list to update state
  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf);
    this.refreshBookList();
  };

  // Call the API to get the book list, then update state
  refreshBookList = () => {
    BooksAPI.getAll().then((res) => {
      this.setState(() => ({
        books: res.map((book) => ({
          title: book.title,
          author: book.authors.join(", "),
          url: book.imageLinks.thumbnail,
          shelf: book.shelf,
          id: book.id
        }))
      }));
    });
  };

  // When the component mounts, refresh the book list based on the server
  componentDidMount = () => {
    this.refreshBookList();
  };

  render() {
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <Route path="/search">
            <BookSearch />
          </Route>
          <Route exact path ="/">
            <BookCase
              books={this.state.books}
              shelves={this.state.bookShelves}
              updateBook={this.updateBook}
            />
          </Route>
        
      </div>
    );
  }
}

export default BooksApp;
