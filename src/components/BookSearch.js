import React, { Component } from "react";
import { Link } from "react-router-dom";
// Components
import BookShelf from "./BookShelf";

import * as BooksAPI from "../BooksAPI";

/*
 *   BookSearch Class - component for the search page
 */

export class BookSearch extends Component {
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
    query !== "" &&
      BooksAPI.search(query)
        .then((books) => {
          let results = books.map((book) => {
            console.log(book.imageLinks.thumbnail);
            return {
              title: book.title,
              author: book.authors ? book.authors.join(", ") : "No Author",
              url: book.imageLinks.thumbnail,
              shelf: book.shelf || "none",
              id: book.id
            };
          });
          books &&
            this.setState(() => ({
              results
            }));
        })
        .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.handleChange(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
          {this.state.results.length > 0 && (
            <BookShelf
              shelfName="Search Results:"
              books={this.state.results}
              //updateBook={this.props.updateBook}
            />
          )}
        </div>
      </div>
    );
  }
}

export default BookSearch;
