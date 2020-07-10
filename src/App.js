import React from "react";
// Components
import BookSearch from "./components/BookSearch";
import BookCase from "./components/BookCase";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     *
     * TODO: (TL;DR) Implement React Router instead of state for showing the search page...
     */
    showSearchPage: false,
    books: [],
    bookShelves: ["Currently Reading", "Want To Read", "Read"] // Here for future improvements... TODO: add ability to create new shelves
  };

  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf);
    this.refreshBookList();
  };

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

  componentDidMount = () => {
    this.refreshBookList();
  };

  render() {
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.state.showSearchPage ? (
          <BookSearch />
        ) : (
          <BookCase
            books={this.state.books}
            shelves={this.state.bookShelves}
            updateBook={this.updateBook}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
