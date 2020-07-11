import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Components
import BookShelf from "./BookShelf";

/*
 *   BookCase Class - component that represents the book shelf.  The bookcase holds multiple shelves.
 */

const BookCase = () => {
  // Get the books in library that belong on a given shelf
  getBooks = (shelf) =>
    this.props.books.filter(
      (book) =>
        shelf.replace(/ /g, "").toLowerCase() === book.shelf.toLowerCase()
    );

  render() {
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div>
            {this.props.shelves.map((shelf) => (
              <BookShelf
                shelfName={shelf}
                books={this.getBooks(shelf)}
                updateBook={this.props.updateBook}
                key={shelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Search</button>
          </Link>
        </div>
      </div>
    );
  }
}

BookCase.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default BookCase;
