import React, { Component } from "react";
import PropTypes from "prop-types";
//Components
import Book from "./Book.js";

/*
 *   BookShelf Class - component that represents a shelf in the bookcase.  A shelf holds the books that are associated with its category
 *      - the only category that does not get a shelf is "none"
 */

export class BookShelf extends Component {
  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.shelfName === "none"
            ? "Search Results"
            : this.props.shelfName}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => {
              return (
                <Book
                  book={book}
                  updateBook={this.props.updateBook}
                  key={book.id}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
