import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Components
import BookShelf from "./BookShelf";

import * as BooksAPI from "../BooksAPI";

/*
 *   BookSearch Class - component for the search page
 */

export class BookSearch extends Component {
  static propTypes = {
    updateBook: PropTypes.func.isRequired
  };

  state = {
    query: "",
    results: []
  };

  handleChange = (query) => {
    this.setState(() => ({ query }));
    this.getResults(query);
  };

  // Parse the book results from JSON and return a usable array
  parseBookInfo = (books) => {
    let bookArray = [];
    for (let book in books) {
      bookArray = [...bookArray, books[book]];
    }
    return bookArray;
  };

  getResults = (query) => {
    query !== ""
      ? BooksAPI.search(query)
          .then((books) => {
            books && !books.hasOwnProperty("error")
              ? this.setState(() => ({
                  results: books.map((book) => ({
                    title: book.title,
                    author: book.authors
                      ? book.authors.join(", ")
                      : "No Author",
                    url: book.imageLinks
                      ? book.imageLinks.thumbnail
                      : "No_Cover.jpg",
                    shelf: book.shelf || "none",
                    id: book.id
                  }))
                }))
              : this.setState(() => ({
                  results: []
                }));
          })
          .catch((err) => console.error(err))
      : this.setState(() => ({
          results: []
        }));
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.handleChange(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.results.length > 0 && (
            <BookShelf
              shelfName="Search Results:"
              books={this.state.results}
              updateBook={this.props.updateBook}
            />
          )}
        </div>
      </div>
    );
  }
}

export default BookSearch;
