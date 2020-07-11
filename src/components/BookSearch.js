import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Components
import BookShelf from "./BookShelf";

import * as BooksAPI from "../BooksAPI";

/*
 *   BookSearch Class - component for the search page
 *      -has state to track the search query and current results
 */

export class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  state = {
    query: "",
    results: []
  };

  // When the search query is updated, set the state and populate the results array
  handleChange = (query) => {
    this.setState(() => ({ query }));
    this.getResults(query);
  };

  // Function to convert results JSON to a usable array of books
  getResults = (query) => {
    query !== "" // Only run the search if there is actually a query
      ? BooksAPI.search(query)
          .then((books) => {
            books && !books.hasOwnProperty("error")
              ? this.setState(() => ({
                  results: books.map((book) => ({
                    title: book.title,
                    author: book.authors // If no authors are given, leave it blank
                      ? book.authors.join(", ")
                      : "",
                    url: book.imageLinks // Use a stock image if none are given
                      ? book.imageLinks.thumbnail
                      : "No_Cover.jpg",
                    shelf: this.getCurrentShelf(book), // Find out what shelf the book is assigned to
                    id: book.id
                  }))
                }))
              : this.setState(() => ({
                  results: []
                }));
          })
          .catch((err) => console.error(err))
      : this.setState(() => ({
          // Set the results to an empty array if there is no query
          results: []
        }));
  };

  // Take in a book object and check it against the user library to find out what shelf it is on
  getCurrentShelf = (bookToCheck) => {
    let inLib = this.props.books.filter((book) => book.id === bookToCheck.id);
    return inLib.length === 0 ? "none" : inLib[0].shelf;
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
