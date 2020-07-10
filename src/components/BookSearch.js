import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    this.getResults();
  };

  getResults = () => {
    BooksAPI.search(this.state.query)
      .then((books) => {
        this.setState(() => ({ results: books }));
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
        </div>
      </div>
    );
  }
}

export default BookSearch;
