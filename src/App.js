import React from "react";
import { Route } from "react-router-dom";
// Components
import BookSearch from "./components/BookSearch";
import BookCase from "./components/BookCase";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

/**
 *   BooksApp Class - main component for the MyBooks app.  Controls the state of the library, names of the bookshelves, and routing
 */

class BooksApp extends React.Component {
  state = {
    books: [],
    bookShelves: ["Currently Reading", "Want To Read", "Read"] // Here for future improvements... TODO: add ability to create new shelves
  };

  // API call to update a book to a new shelf, then refresh the book list to update state
  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((res) => this.refreshBookList());
  };

  // Call the API to get the book list, then update state
  refreshBookList = () => {
    BooksAPI.getAll().then((res) => {
      this.setState(() => ({
        books: res.map((book) => book)
      }));
    });
  };

  // When the component mounts, refresh the book list by calling on the backend server
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
          <BookSearch books={this.state.books} updateBook={this.updateBook} />
        </Route>
        <Route exact path="/">
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
